const productService = require("../../service/product/product");

const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res
      .status(201)
      .json({ data: newProduct, message: `success`, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ data: error.message, message: `failed`, status: false });
  }
};

const fetchAllProduct = async (req, res) => {
  try {
    const product = await productService.fetchAllProduct();
    res
      .status(201)
      .json({ data: product, message: `success`, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ data: error.message, message: `failed`, status: false });
  }
};

module.exports = { createProduct, fetchAllProduct };
