const mongoose = require("mongoose");
const Product = require("./productSchema");
const Order = require("./orderSchema");

exports.addProducts = (req, res) => {
  try {
    for (current of req.body) {
      let product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: current.name,
        description: current.description,
        shortDescription: current.shortDescription,
        image: current.image,
        details: current.details,
        shipping: current.shipping,
        inStockAmount: current.inStockAmount,
        price: current.price,
      });

      product.save();
    }

    return res.status(200).json();
  } catch {
    return res.status(400).json();
  }
};

exports.getProducts = (req, res) => {
  Product.find({}).then((products) => {
    res.send(products);
  });
};

exports.getProductById = (req, res) => {
  Product.findOne({_id: req.params.id}).then((product) => {
    res.status(200).json(product);
  });
};

exports.addOrder = (req, res) => {
  if (req.user.isAuthenticated) {
    try {
      // req.body.products = []

      let order = new Order({
        _id: new mongoose.Types.ObjectId(),
        isActive: req.body.isActive,
        products: req.body.products,
        ordernumber: req.body.ordernumber,
        userId: req.body.userId,
      });

      order.save();

      return res.status(200).json();
    } catch {
      return res.status(400).json();
    }
  } else {
    res.json({message: "You have to be logged in to place orders."});
  }
};
