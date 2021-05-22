const router = require('express').Router();
const { User } = require('../../models');

// Added comments describing the functionality of this `login` route
// this is if we can get Auth0 to auto-submit
router.post('/', async (req, res) => {
    const oidc = req.body.oidc;
    try {
        // we search the DB for a user with the provided oidc key
        const userData = await User.findOne ({ 
            where: { oidc } 
        });
        if (!userData) {
            // the error message shouldn't specify if the login failed because of wrong email or password
            // maybe we should just re-direct to a signup page?
            res.redirect('https://google.com');
            // res.status(404).json({ message: 'Login failed. Please try again!' })
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// /profile
// front end receives callback
// front end calls backend
// post payload
// route

module.exports = router;
