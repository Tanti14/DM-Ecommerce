import Message from "../models/msg.js";

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    if (messages.length === 0) {
      return res.status(404).json({ message: "No Messages found" });
    }
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { name, lastname, email, message } = req.body;
    const newMessage = new Message({
      name,
      lastname,
      email,
      message,
    });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateMessageStatus = async (req, res) => {
  try {
    const updateMessage = await Message.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateMessage)
      return res.status(404).json({ message: "Message not found" });
    res.status(200).json(updateMessage);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const deleteMessage = await Message.findByIdAndDelete(req.params.id);
    if (!deleteMessage)
      return res.status(404).json({ message: "Message not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
