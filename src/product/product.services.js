// Service layer bertujuan untuk handle bussiness logic
// Reusable

const { findProducts, findProductById, insertProduct, editProductById, patchProductById } = require('./product.repository');

const getAllProducts = async () => {
  const products = await findProducts();

  return products;
};

const getProductById = async (id) => {
  if (typeof id !== 'number') {
    throw new Error('Id must be a number/int type');
  }

  const product = await findProductById(id);

  if (!product) {
    throw new Error('Product not found');
  }

  return product;
};

const createProduct = async (data) => {
  const product = await insertProduct(data);

  return product;
};

const deleteProduct = async (id) => {
  await prisma.product.delete({
    where: {
      id,
    },
  });
};

const editProduct = async (id, productData) => {
  if (!(productData.image && productData.name && productData.description && productData.price)) {
    return res.status(400).send('Some fields are missing');
  }

  const product = await editProductById(id, productData);

  return product;
};

const patchProduct = async (id, productData) => {
  const product = await patchProductById(id, productData);
  return product;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  editProduct,
  patchProduct,
};
