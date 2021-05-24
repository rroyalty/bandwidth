const router = require('express').Router();
const { sequelize, User, Instrument } = require('../../models');

// GENRES
router.post('/', async (req, res) => {
    const { userOidc, name } = req.body
    try {
        const user = await User.findOne({
            where: { oidc: userOidc }
        })

        const isntrument = await Instrument.create({
            name, userOidc: user.oidc
        })

        return res.json(isntrument)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})

// Includes duplicates
router.get('/', async (req, res) => {
    const { userOidc, name } = req.body
    // console.log(req.body);
    try {
        const isntruments = await Instrument.findAll({
            // if you need multiple associations
            // you pass an array and then you pass user and the other ones
            include: ['user']
        })

        return res.json(isntruments)
    } catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})


module.exports = router;
