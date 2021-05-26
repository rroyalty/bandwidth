'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      uuid: '7sk2x36qvkckubn5xjhofuvl',
      nickName: 'JB Jables',
      firstName: 'Jack',
      lastName: 'Black',
      image: 'https://pbs.twimg.com/profile_images/1087897550760243201/XVP-oVIs_400x400.jpg',
      intentionStatus: 'Looking to Network',
      bandName: 'Tenacious D',
      oidc: '0sk1x27qvkckubn5xjhofuvl',
      email: 'jack@gmail.com',
      phone: '9786664201',
      location: 'Hollywood CA',
      blurb: 'Im Jack Black. I play guitar and stuff.'
    }, {
      uuid: '0sk2x36qvkckubn5xjhofuvl',
      nickName: 'Crunch Cone',
      firstName: 'Kyle',
      lastName: 'Gass',
      image: 'https://steveclayton.com/blog/wp-content/uploads/2013/10/kylegass.jpg',
      intentionStatus: 'Looking to Network',
      bandName: '',
      oidc: '0sk2x36qvkckubn5xjhofuvl',
      email: 'kyle@gmail.com',
      phone: '9786664201',
      location: 'Hollywood CA',
      blurb: 'Jack Blacks bestest buddy'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
