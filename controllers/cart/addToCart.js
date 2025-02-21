const { cartService } = require("../../service/cart/addToCart");

const addToCart = async (req, res) => {
  try {
    const cart = await cartService(req.body);
    res
      .status(201)
      .json({ data: cart, message: `Added to cart`, status: true });
  } catch (error) {
    res
      .status(500)
      .json({ data: error.message, message: `Add failed`, status: false });
  }
};

module.exports = { addToCart };
