import {
  addProduct,
  listMyProducts,
  listPublicProducts,
  getMyProduct,
  updateMyProduct,
  removeMyProduct,
} from "../services/productServices.js";

export const create_product = async (req, res) => {
  try {
    const product = await addProduct(req.user._id, req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to create product" });
  }
};

export const get_products = async (req, res) => {
  try {
    const products = await listMyProducts(req.user._id);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to fetch products" });
  }
};

export const get_public_products = async (req, res) => {
  try {
    const products = await listPublicProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to fetch products" });
  }
};

export const get_product = async (req, res) => {
  try {
    const product = await getMyProduct(req.user._id, req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message || "Product not found" });
  }
};

export const update_product = async (req, res) => {
  try {
    const product = await updateMyProduct(req.user._id, req.params.id, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to update product" });
  }
};

export const delete_product = async (req, res) => {
  try {
    await removeMyProduct(req.user._id, req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message || "Failed to delete product" });
  }
};

export default {
  create_product,
  get_products,
  get_public_products,
  get_product,
  update_product,
  delete_product,
};


