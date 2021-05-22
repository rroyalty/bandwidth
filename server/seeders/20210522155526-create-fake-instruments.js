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
    await queryInterface.bulkInsert('instruments', [{
      uuid: '7sk2x36qvkckubn5xjhofuvl',
      name: "guitar, vocals, lyrics",
      userOidc: "0sk1x27qvkckubn5xjhofuvl"
    }, {
      uuid: '0sk2x36qvkckubn5xjhofuvl',
      name: "vocals, guitar",
      userOidc: "0sk2x36qvkckubn5xjhofuvl"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('instruments', null, {});
  }
};
