import Categories from "../models/category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    if (categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const newCategory = new Categories({ categoryName });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(category);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Categories.findByIdAndDelete(req.params.id);
    if (!category)
      return res.status(404).json({ message: "Category not found" });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};