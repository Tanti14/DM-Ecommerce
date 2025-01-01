import axios from "./axios";

/* Messages Management Routes */
export const getMessagesRequest = () => axios.get("/messages");
export const sendMessageRequest = (msg) => axios.post("/messages", msg);
export const updateMessageStatusRequest = (id, msg) => axios.put(`/messages/${id}`, msg);
export const deleteMessageRequest = (id) => axios.delete(`/messages/${id}`);