'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('books', [
      {
        title: 'The Eyre Affair',
        author: 'Jasper Fforde',
        publication_year: '2001',
        read: true
      },
      {
        title: 'A Study in Charlotte',
        author: 'Brittany Cavallaro',
        publication_year: '2016',
        read: true
      },
      {
        title: 'The Passion',
        author: 'Jeanette Winterson',
        publication_year: '1987',
        read: true
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('books', null, {});
  }
};
