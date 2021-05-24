const router = require('express').Router();
const { sequelize, User, Genre, Instrument } = require('../../models');

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            // Do these work?
            include: ['genres', 'instruments'],
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

// attempt to CREATE a new user with different route, followed by adding more to it.
router.post('/test', async(req, res) => {
    const { nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location, genres } = req.body
    console.log(req.body)
    console.log("=============")
    console.log(req.body.genres)

    try {
        const user = await User.create({ nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location })
        if (!user) {
            res.status(404).json({ message: 'Something went wrong!' });
            return;
        }
        const userFind = await User.findOne({
            where: { oidc },
            include: ['genres', 'instruments'],
        })
        console.log(userFind.genres);

        // const genre = await Genre.create({
        //     name: userFind.genres, userOidc: userFind.oidc
        // })
        console.log(userFind);
        // console.log(userFind.genres);
        return res.json(userFind)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// CREATE a new user
router.post('/', async(req, res) => {
    const { nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location } = req.body

    try {
        const user = await User.create({ nickName, firstName, lastName, image, intentionStatus, bandName, oidc, email, phone, location })
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

// probably needs a safety net for if a put request is made but no updates are actually made
// currently I believe if you save changes but nothing is changed it will return the error message.
router.put('/:oidc', async (req, res) => {
        const oidc = req.params.oidc
        console.log(oidc);
        const { nickName, firstName, lastName, image, intentionStatus, bandName, email, phone, location } = req.body
        // currently if no changes are made, this will error.
        try {
        const updatedUser = await User.update(
            {
                nickName, firstName, lastName, image, intentionStatus, bandName, email, phone, location 
                // nickName: req.body.nickName,
                // firstName: req.body.firstName,
                // lastName: req.body.lastName,
                // image: req.body.image,
                // intentionStatus: req.body.intentionStatus,
                // bandname: req.body.bandname,
                // email: req.body.email,
                // phone: req.body.phone,
                // location: req.body.location
            },
            {
                where: {
                    oidc,
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

module.exports = router;
