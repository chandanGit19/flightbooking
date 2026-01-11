// 'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {

//     /* ---------- INSERT CITIES ---------- */
//     await queryInterface.bulkInsert('cities', [
//       { name: 'Delhi', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Mumbai', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Bangalore', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Chennai', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Kolkata', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Hyderabad', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Pune', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Ahmedabad', createdAt: new Date(), updatedAt: new Date() },
//       { name: 'Jaipur', createdAt: new Date(), updatedAt: new Date() },
//       {  name: 'Kochi', createdAt: new Date(), updatedAt: new Date() }
//     ]);

//     /* ---------- INSERT AIRPORTS ---------- */
//     await queryInterface.bulkInsert('Airports', [
//       {
//         name: 'Indira Gandhi International Airport',
//         code: 'DEL',
//         address: 'New Delhi, India',
//         cityId: 1,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Chhatrapati Shivaji Maharaj International Airport',
//         code: 'BOM',
//         address: 'Mumbai, India',
//         cityId: 2,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Kempegowda International Airport',
//         code: 'BLR',
//         address: 'Bangalore, India',
//         cityId: 3,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Chennai International Airport',
//         code: 'MAA',
//         address: 'Chennai, India',
//         cityId: 4,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Netaji Subhas Chandra Bose International Airport',
//         code: 'CCU',
//         address: 'Kolkata, India',
//         cityId: 5,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Rajiv Gandhi International Airport',
//         code: 'HYD',
//         address: 'Hyderabad, India',
//         cityId: 6,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Pune International Airport',
//         code: 'PNQ',
//         address: 'Pune, India',
//         cityId: 7,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Sardar Vallabhbhai Patel International Airport',
//         code: 'AMD',
//         address: 'Ahmedabad, India',
//         cityId: 8,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Jaipur International Airport',
//         code: 'JAI',
//         address: 'Jaipur, India',
//         cityId: 9,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       },
//       {
//         name: 'Cochin International Airport',
//         code: 'COK',
//         address: 'Kochi, India',
//         cityId: 10,
//         createdAt: new Date(),
//         updatedAt: new Date()
//       }
//     ]);
//   },

//   async down (queryInterface, Sequelize) {
//     await queryInterface.bulkDelete('Airports', null, {});
//     await queryInterface.bulkDelete('cities', null, {});
//   }
// };





'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      /* ---------- INSERT CITIES ---------- */
      await queryInterface.bulkInsert(
        'cities',
        [
          { name: 'Delhi', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Mumbai', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Bangalore', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Chennai', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Kolkata', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Hyderabad', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Pune', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Ahmedabad', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Jaipur', createdAt: new Date(), updatedAt: new Date() },
          { name: 'Kochi', createdAt: new Date(), updatedAt: new Date() }
        ],
        { transaction }
      );

      /* ---------- FETCH CITY IDS ---------- */
      const [cities] = await queryInterface.sequelize.query(
        `SELECT id, name FROM cities WHERE name IN
         ('Delhi','Mumbai','Bangalore','Chennai','Kolkata','Hyderabad','Pune','Ahmedabad','Jaipur','Kochi')`,
        { transaction }
      );

      const cityMap = {};
      cities.forEach(c => {
        cityMap[c.name] = c.id;
      });

      /* ---------- INSERT AIRPORTS ---------- */
      await queryInterface.bulkInsert(
        'Airports',
        [
          {
            name: 'Indira Gandhi International Airport',
            code: 'DEL',
            address: 'New Delhi, India',
            cityId: cityMap['Delhi'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Chhatrapati Shivaji Maharaj International Airport',
            code: 'BOM',
            address: 'Mumbai, India',
            cityId: cityMap['Mumbai'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Kempegowda International Airport',
            code: 'BLR',
            address: 'Bangalore, India',
            cityId: cityMap['Bangalore'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Chennai International Airport',
            code: 'MAA',
            address: 'Chennai, India',
            cityId: cityMap['Chennai'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Netaji Subhas Chandra Bose International Airport',
            code: 'CCU',
            address: 'Kolkata, India',
            cityId: cityMap['Kolkata'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Rajiv Gandhi International Airport',
            code: 'HYD',
            address: 'Hyderabad, India',
            cityId: cityMap['Hyderabad'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Pune International Airport',
            code: 'PNQ',
            address: 'Pune, India',
            cityId: cityMap['Pune'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Sardar Vallabhbhai Patel International Airport',
            code: 'AMD',
            address: 'Ahmedabad, India',
            cityId: cityMap['Ahmedabad'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Jaipur International Airport',
            code: 'JAI',
            address: 'Jaipur, India',
            cityId: cityMap['Jaipur'],
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: 'Cochin International Airport',
            code: 'COK',
            address: 'Kochi, India',
            cityId: cityMap['Kochi'],
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', null, {});
    await queryInterface.bulkDelete('cities', null, {});
  }
};
