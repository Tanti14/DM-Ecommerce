import React from "react";
import contactbg from "../../assets/img/contactus.svg";
import {
  GroupedInputs,
  StyledForm,
  StyledFormScreen,
  StyledInput,
  StyledTextArea,
  SubmitBtn,
} from "./styles";
import { useFormik } from "formik";
import { contactSchema, contactInitialValues } from "../../Formik/index.js";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ContactusScreen = () => {
  const navigate = useNavigate();
  const { values, handleSubmit, getFieldProps, resetForm, errors } = useFormik({
    validationSchema: contactSchema,
    initialValues: contactInitialValues,
    validateOnBlur: true,
    validateOnChange: true,
    validateOnMount: false,
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        position: "top-start",
        icon: "success",
        title: "Mensaje enviado con exito",
        text: "Nos comunicaremos a la brevedad",
        showConfirmButton: false,
        timer: 2500,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInLeft
            animate__lower
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutLeft
            animate__lower
          `,
        },
      });

      setTimeout(() => {
        resetForm();
        navigate("/", { replace: true });
      }, 500);
    },
  });
  return (
    <StyledFormScreen>
      <StyledForm noValidate onSubmit={handleSubmit}>
        <h1>FORMULARIO DE CONTACTO</h1>
        <GroupedInputs>
          <label htmlFor="name">Nombre</label>
          <StyledInput
            type="text"
            name="name"
            {...getFieldProps("name")}
            placeholder="Ingrese su nombre"
          />
        </GroupedInputs>
        {errors.name && <span>{errors.name}</span>}

        <GroupedInputs>
          <label htmlFor="lastname">Apellido</label>
          <StyledInput
            type="text"
            name="lastname"
            {...getFieldProps("lastname")}
            placeholder="Ingrese su apellido"
          />
        </GroupedInputs>
        {errors.lastname && <span>{errors.lastname}</span>}

        <GroupedInputs>
          <label htmlFor="email">Correo electronico</label>
          <StyledInput
            type="email"
            name="email"
            {...getFieldProps("email")}
            placeholder="Ingrese su correo electronico"
          />
        </GroupedInputs>
        {errors.email && <span>{errors.email}</span>}
        <GroupedInputs>
          <label htmlFor="asunto">Mensaje</label>
          <StyledTextArea
            name="asunto"
            cols="30"
            rows="10"
            {...getFieldProps("consulta")}
            placeholder="Ingresa su mensaje"
          ></StyledTextArea>
        </GroupedInputs>
        {errors.consulta && <span>{errors.consulta}</span>}
        <SubmitBtn
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={
            !values.name &&
            !values.lastname &&
            !values.email &&
            !values.consulta
          }
        >
          ENVIAR
        </SubmitBtn>
      </StyledForm>
      <img src={contactbg} alt="" />
    </StyledFormScreen>
  );
};
