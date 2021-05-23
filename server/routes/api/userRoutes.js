const router = require('express').Router();
const { sequelize, User, Genre, Instrument } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            // include: ['genres', 'instruments'],
        });
        if (!users) {
            res.status(404).json({ message: 'No users found!' });
            return;
        }
        // Return the userData inside of the JSON response
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});


// GET user by email (Toni needs this)
router.get('/:email', (req, res) => {
    const { email } = req.params; 
    User.findOne({where:{email}}).then((userData) => {
        res.json(userData);
    });
});


// GET all users 'Looking for Musicians'
router.get('/bands-seeking', async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                // Only get users seeking a musician
                intentionStatus: 'Looking for a Musician'
            },
            include: ['genres', 'instruments'],
            attributes: {
                // Maybe include contact info but only show on front end if user has oidc
                // Don't include these fields in the returned data
                exclude: ['oidc', 'email', 'phone']
            }
        });
        if (!users) {
            res.status(404).json({ message: 'No users currently seeking Musicians. Please try again later.' });
            return;
        }
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all users 'Looking for a Band'
router.get('/musicians-seeking', async (req, res) => {
    try {
        const users = await User.findAll({
            // Order by title in ascending order
            order: ['firstName'],
            where: {
                // Only get users seeking a band
                intentionStatus: 'Looking for a Band'
            },
            include: ['genres', 'instruments'],
            attributes: {
                exclude: ['oidc', 'email', 'phone']
            }
        });
        if (!users) {
            res.status(404).json({ message: 'No users currently seeking bands. Please try again later.' });
            return;
        }
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET all users just 'Looking to Network'
router.get('/networking', async (req, res) => {
    try {
        const users = await User.findAll({
            // Order by title in ascending order
            order: ['firstName'],
            where: {
                // Only get users intending to network
                intentionStatus: 'Looking to Network'
            },
            include: ['genres', 'instruments'],
            attributes: {
                exclude: ['oidc', 'email', 'phone']
            }
        });
        if (!users) {
            res.status(404).json({ message: 'No users currently looking to network. Please try again later.' });
            return;
        }
        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single user by their unique id given by Auth0
// Need to change User model and re-test
router.get('/:oidc', async (req, res) => {
    const oidc = req.params.oidc;
    try {
        const users = await User.findOne({
            where: { oidc },
            include: ['genres', 'instruments'],
        })
        if (!users) {
            res.status(404).json({ message: 'No user with this id!' });
            return;
        }
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE a new user
router.post('/', async(req, res) => {
    const { nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location, blurb } = req.body

    try {
        const user = await User.create({ nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location, blurb })
        if (!user) {
            res.status(404).json({ message: 'Something went wrong!' });
            return;
        }
        return res.json(user)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

//EDIT a current user
// router.put('/', async(req, res) => {
//     const { nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location } = req.body

//     try {
//         const user = await User.create({ nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location })
//         if (!user) {
//             res.status(404).json({ message: 'Something went wrong!' });
//             return;
//         }
//         return res.json(user)
//     } catch(err) {
//         console.log(err)
//         return res.status(500).json(err)
//     }
// })

// needs work
router.put('/:oidc', async (req, res) => {
        const oidc = req.params.oidc
        const { nickName, firstName, lastName, image, intentionStatus, bandName, email, phone, location } = req.body
    try {
        const updatedUser = await User.update(
            {
                nickName: req.body.nickName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                image: req.body.image,
                intentionStatus: req.body.intentionStatus,
                bandname: req.body.bandname,
                email: req.body.email,
                phone: req.body.phone,
                location: req.body.location
            },
            {
                where: {
                    oidc: req.params.oidc,
                },
            }
        );
        if (!updatedUser[0]) {
            res.status(404).json({ message: 'Something went wrong. No user with this id! Changes could not be made.' });
            return;
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// If button allows User to delete their own profile
// Might be a future development deal - good for privacy
// DELETE a user
router.delete('/:oidc', async (req, res) => {
    const oidc = req.params.oidc
    try {
        const user = await User.findOne({ where: { oidc } })

        await user.destroy()
        if (!user) {
            res.status(404).json({ message: 'Something went wrong. No user with this id! Deletion could not be made.' });
            return;
        }
        // res.json(user);
        return res.json({ message: 'User deleted!'})
    } catch (err) {
        res.status(500).json(err);
    }
});

// GENRES
router.post('/genres', async (req, res) => {
    const { userOidc, name } = req.body
    try {
        const user = await User.findOne({
            where: { oidc: userOidc }
        })

        const genre = await Genre.create({
            name, userOidc: user.oidc
        })

        return res.json(genre)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// doesn't work
router.get('/genres', async (req, res) => {
    // const { userOidc, name } = req.body
    try {
        const genres = await Genre.findAll({
            // if you need multiple associations
            // you pass an array and then you pass user and the other ones
            include: ['user']
        })

        return res.json(genres)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// INSTRUMENTS
router.post('/instruments', async (req, res) => {
    const { userOidc, name } = req.body
    try {
        const user = await User.findOne({
            where: { oidc: userOidc }
        })

        const instruments = await Instrument.create({
            name, userOidc: user.oidc
        })

        return res.json(instruments)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// doesn't work
router.get('/instruments', async (req, res) => {
    // const { userOidc, name } = req.body
    try {
        const instruments = await Instrument.findAll({
            // if you need multiple associations
            // you pass an array and then you pass user and the other ones
            include: ['user']
        })

        return res.json(instruments)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

module.exports = router;
