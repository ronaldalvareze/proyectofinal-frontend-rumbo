import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { Car } from "../../api";
import { useFormik } from "formik";
import { useAuth } from "../../hooks";
import { initialValues, validationSchema } from "./CarForm.form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./CarForm.scss";

const carController = new Car();

export function CarForm(props) {
  const [error, setError] = useState("");
  const { accessToken } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValues, { resetForm }) => {
      try {
        await carController.createCar(formValues, accessToken);
        resetForm();
        toast.success("Vehículo creado con éxito!");
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 400) {
          const errorMessage = error.response.data.msg || "";
          if (errorMessage.includes("ya existe")) {
            toast.error("¡El vehiculo ya existe!");
          } else{
            setError("Error de validacion:Verifica los datos del formulario");
          }
        } else  {
          setError("Error en el servidor");
        }
      }
    },
  });


  return (
    
    <Form className="Car-Form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="placa"
        type="text"
        placeholder="placa"
        onChange={formik.handleChange}
        value={formik.values.placa}
        error={
          formik.touched.placa &&
          formik.errors.placa && {
            content: formik.errors.placa,
            pointing: "below",
          }
        }
      />
      <Form.Input
        name="tipoVehiculo"
        type="text"
        placeholder="tipoVehiculo"
        onChange={formik.handleChange}
        value={formik.values.tipoVehiculo}
        error={
          formik.touched.tipoVehiculo &&
          formik.errors.tipoVehiculo && {
            content: formik.errors.tipoVehiculo,
            pointing: "below",
          }
        }
      />
      <Form.Input
        name="empresa"
        placeholder="empresa"
        onChange={formik.handleChange}
        value={formik.values.empresa}
        error={
          formik.touched.empresa &&
          formik.errors.empresa && {
            content: formik.errors.empresa,
            pointing: "below",
          }
        }
      />

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        <Icon name="bus" />
        Enviar Datos
      </Form.Button>

      <p className="Car-Form__error">{error}</p>
      <ToastContainer/>
    </Form>
  );
}
