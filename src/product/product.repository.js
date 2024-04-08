// Berkomunikasi dengan database

const prisma = require('../lib/db');

const findProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

const findProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  return product;
};

const insertProduct = async (productData) => {
  const product = await prisma.product.create({
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });

  return product;
};

const editProductById = async (id, productData) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });

  return product;
};

const patchProductById = async (id, productData) => {
  const product = await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: productData.name,
      price: productData.price,
      description: productData.description,
      image: productData.image,
    },
  });

  return product;
};
module.exports = {
  findProducts,
  findProductById,
  insertProduct,
  editProductById,
  patchProductById,
};
