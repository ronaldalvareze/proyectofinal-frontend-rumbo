import React, { useState } from "react";
import { Form,Icon } from "semantic-ui-react";
import { Ruta } from '../../api'; 
import { useAuth } from "../../hooks";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RutaForm.form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./RutaForm.scss";


const rutaController = new Ruta();

export function RutaForm(props) {
  const [error, setError] = useState("");  
  const { accessToken } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValues, { resetForm }) => {
      try {
        await rutaController.register(formValues,accessToken);
        resetForm();
        toast.success("Ruta creado con éxito!");
      } catch (error) {
        console.log(error);
        if (error.response && error.response.status === 400) {
          setError("Error de validacion:Verifica los datos del formulario");
        } else {
          setError("Error en el servidor");
        }
      }
    },
  });

  return (
    <Form className="RutaForm" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="placaDespacho"
        type="text"
        placeholder="Placa de Despacho"
        onChange={formik.handleChange}
        value={formik.values.placaDespacho}
        error={
          formik.touched.placaDespacho &&
          formik.errors.placaDespacho && {
            content: formik.errors.placaDespacho,
            pointing: "below",
          }
        }
      />

      <Form.Input
        name="fecha"
        placeholder="Fecha"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.fecha}
        error={
          formik.touched.fecha &&
          formik.errors.fecha && {
            content: formik.errors.fecha,
            pointing: "below",
          }
        }
      />

      <Form.Input
        name="hora"
        placeholder="Hora"
        type="time"
        onChange={formik.handleChange}
        value={formik.values.hora}
        error={
          formik.touched.hora &&
          formik.errors.hora && {
            content: formik.errors.hora,
            pointing: "below",
          }
        }
      />

      <Form.Input
        name="ruta"
        type="text"
        placeholder="ruta"
        onChange={formik.handleChange}
        value={formik.values.ruta}
        error={
          formik.touched.ruta &&
          formik.errors.ruta && {
            content: formik.errors.ruta,
            pointing: "below",
          }
        }
      />
      <Form.Input
        name="origen"
        type="text"
        placeholder="origen"
        onChange={formik.handleChange}
        value={formik.values.origen}
        error={
          formik.touched.origen &&
          formik.errors.origen && {
            content: formik.errors.origen,
            pointing: "below",
          }
        }
      />
      <Form.Input
        name="destino"
        type="text"
        placeholder="destino"
        onChange={formik.handleChange}
        value={formik.values.destino}
        error={
          formik.touched.destino &&
          formik.errors.destino && {
            content: formik.errors.destino,
            pointing: "below",
          }
        }
      />

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
      <Icon name="road" />
        Enviar Datos
      </Form.Button>


  
      <p className="RutaForm__error">{error}</p>
      <ToastContainer/>
    </Form>
  );
}
