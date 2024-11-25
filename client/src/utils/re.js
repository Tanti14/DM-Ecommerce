export const noNumbersRegex = /^[^\d]*$/;
export const onlyNumbersRegex = /^\d+(\.\d+)?$/;
export const phoneRegex = /^[0-9]{10}$/;
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
export const urlRegex = /^(http|https):\/\/[^ "]+$/;
