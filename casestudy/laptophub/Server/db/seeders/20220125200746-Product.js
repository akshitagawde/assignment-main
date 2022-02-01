'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('Products', [{
      productName: 'Microsoft Surface Pro 4',
      Description:'5 inch:4GB:32GB | Surface Pro 4 features two cameras for taking photos and recording video: an 8-megapixel rear-facing camera with autofocus and a 5-megapixel, high-resolution, front-facing camera. Both cameras record video in 1080p, with a 16:9 aspect ratio. Privacy lights are located on the right side of both cameras.',
      Category:'Laptops',
      image:'https://i.imgur.com/nXgI5iT.png',
      price:40000,
      createdAt:new Date(),
      updatedAt:new Date(),
      InCart: true
    }
  ,
  {
    productName: 'Dell Inspiration 4',
    Description:'5 inch:8GB:1TB | Pre-installed Genuine Windows 10 OS NVIDIA GeForce 920M 15.6 inch HD LED Backlit Truelife Display ',
    Category:'Laptops',
    image:'https://i.imgur.com/ILEU18M.jpg',
    price:42000,
    createdAt:new Date(),
    updatedAt:new Date(),
    InCart: true
  },
  {
    productName: 'Dell Xtreame 5',
    Description:'5 inch:16GB:1TB | 14-inch fully rugged notebook with enhanced graphics performance and up to 4TB of storage. Featuring intuitive hot swappable dual batteries and USB 3.0 Type-C™ connectivity.',
    Category:'Laptops',
    image:'https://i.imgur.com/2kePJmX.jpg',
    price:59000,
    createdAt:new Date(),
    updatedAt:new Date(),
    InCart: true
  }
,{
  productName: 'HP Pro 4',
  Description:'5 inch:4GB:1TB |AMD Ryzen™ 5 processor Windows 10 Pro 64 512 GB PCIe® NVMe™ SSD 35.56 cm (14)AMD Radeon',
  Category:'Laptops',
  image:'https://i.imgur.com/yugQN69.jpg',
  price:55000,
  createdAt:new Date(),
  updatedAt:new Date(),
  InCart: true
}
,{
  productName: 'Lenovo true 4',
  Description:'5 inch:4GB:32GB |  Compete with the Legion 5 Gen 6 (15, AMD). It’s armed with everything you need to dominate any lobby, including up to AMD Ryzen™ 7 5800H mobile processors and NVIDIA® GeForce RTX™ 30 series graphics. Enjoy crisp visuals on a 39.6cms (15) FHD display, featuring amazing color accuracy and Dolby Vision™, while Nahimic 3D audio and the Legion Truestrike keyboard help you strike with pinpoint precision.',
  Category:'Laptops',
  image:'https://i.imgur.com/JOpmFkw.png',
  price:45000,
  createdAt:new Date(),
  updatedAt:new Date(),
  InCart: true
}
,{
  productName: 'HP Elitebook 840',
  Description:'5 inch:4GB:32GB| Windows 10 Pro 11th Generation Intel® Core™ i5 processor 16 GB memory; 256 GB SSD storage 14" diagonal FHD display',
  Category:'Laptops',
  image:'https://i.imgur.com/O02Owsf.jpg',
  price:60000,
  createdAt:new Date(),
  updatedAt:new Date(),
  InCart: true
}
], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
