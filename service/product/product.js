const mongoose = require("mongoose");
const productModel = require("../../models/product/product");

const createProduct = async (productObj) => {
  const newProduct = await productModel.create(productObj);
  return newProduct;
};

module.exports = { createProduct };
