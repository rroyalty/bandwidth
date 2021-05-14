const router = require('express').Router();
// const Book = require('../../models/Book');
const { User } = require('../../models');

// GET all users
router.get('/', (req, res) => {
    // Get all books from the book table
    User.findAll().then((userData) => {
        res.json(userData);
    });
});


// GET all users 'Looking for Musicians'
router.get('/bands-seeking', (req, res) => {
    User.findAll({
        where: {
            // Only get users seeking a musician
            intentionStatus: 'Looking for a Musician'
        },
        attributes: {
            // Maybe include contact info but only show on front end if user has oidc
            // Don't include these fields in the returned data
            exclude: ['id', 'oidc', 'email', 'phone']
        }
    }).then((userData) => {
        // below logs a key from the first array index (object 1)  
        // res.json(userData[0].nickName);
        // below logs an array of objects
        res.json(userData);
    });
});

// GET all users 'Looking for a Band'
router.get('/musicians-seeking', (req, res) => {
    User.findAll({
        // Order by title in ascending order
        order: ['firstName'],
        where: {
            // Only get users seeking a band
            intentionStatus: 'Looking for a Band'
        },
        attributes: {
            exclude: ['id', 'oidc', 'email', 'phone']
        }
    }).then((userData) => {
        res.json(userData);
    });
});

// GET all users just 'Looking to Network'
router.get('/networking', (req, res) => {
    User.findAll({
        // Order by title in ascending order
        order: ['firstName'],
        where: {
            // Only get users intending to network
            intentionStatus: 'Looking to Network'
        },
        attributes: {
            exclude: ['id', 'oidc', 'email', 'phone']
        }
    }).then((userData) => {
        res.json(userData);
    });
});

// GET a single user
// Need to change User model and re-test
router.get('/:oidc', (req, res) => {
  // Find a single book by their primary key (book_id)
  // Find a single user by their  (book_id)
  User.findByPk(req.params.oidc).then((userData) => {
    res.json(userData);
  });
});

// CREATE a book
// router.post('/', (req, res) => {
//   Book.create(req.body)
//     .then((newBook) => {
//       res.json(newBook);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// CREATE multiple books
// router.post('/seed', (req, res) => {
//   Book.bulkCreate([
//     {
//       title: 'Make It Stick: The Science of Successful Learning',
//       author: 'Peter Brown',
//       isbn: '978-0674729018',
//       pages: 336,
//       edition: 1,
//       is_paperback: false
//     },
//     {
//       title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
//       author: 'Kenneth Rubin',
//       isbn: '978-0137043293',
//       pages: 500,
//       edition: 1,
//       is_paperback: true
//     },
//     {
//       title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
//       author: 'Robin DiAngelo',
//       isbn: '978-0807047415',
//       pages: 192,
//       edition: 2,
//       is_paperback: true
//     },
//     {
//       title: 'The Pragmatic Programmer: Your Journey To Mastery',
//       author: 'David Thomas',
//       isbn: '978-0135957059',
//       pages: 352,
//       edition: 2,
//       is_paperback: false
//     },
//     {
//       title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
//       author: 'Donald Knuth',
//       isbn: '978-0201896831',
//       pages: 672,
//       edition: 3,
//       is_paperback: false
//     },
//     {
//       title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
//       author: 'Safiya Umoja Noble',
//       isbn: '978-1479837243',
//       pages: 256,
//       edition: 1,
//       is_paperback: true
//     }
//   ])
//     .then(() => {
//       res.send('Database seeded!');
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

module.exports = router;
