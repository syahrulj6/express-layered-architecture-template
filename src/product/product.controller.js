// Layer untuk handle req dan res
// Biasanya juga dipake buat handle validasi body

const express = require('express');

const { getAllProducts, getProductById, createProduct, deleteProduct, editProduct, patchProduct } = require('./product.services');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await getAllProducts();
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const productId = parseInt(req.params.id);

  const product = await getProductById(productId);

  res.send(product);
});

router.post('/', async (req, res) => {
  const newProduct = req.body;
  const product = await createProduct(newProduct);

  res.send({ data: product, message: 'Successfully create product' });
});

router.delete('/:id', async (req, res) => {
  const productId = parseInt(req.params.id);

  await deleteProduct(productId);

  res.send('Successfully delete product');
});

router.put('/:id', async (req, res) => {
  const productId = parseInt(req.params.id);
  const productData = req.body;

  const product = await editProduct(productId, productData);

  res.send({
    data: product,
    message: 'Successfully update product',
  });
});

router.patch('/:id', async (req, res) => {
  const productId = parseInt(req.params.id);
  const productData = req.body;

  const product = await patchProduct(productId, productData);

  res.send({
    data: product,
    message: 'Successfully update product',
  });
});

module.exports = router;
