import React, { useState,useEffect } from "react";
import { Form, Dropdown } from "semantic-ui-react";
import  {Drive, Car}  from "../../api";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./DriverForm.form";
import { useAuth } from "../../hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DriverForm.scss"


const driveController = new Drive();
const carController = new Car();

export function DriverForm(props) {

  const [error, setError] = useState("");
  const [cars, setCars] = useState([]);
  const { accessToken } = useAuth();

  useEffect(() => {
    async function fetchCars() {
      try {
        const carList = await carController.getCars(accessToken);
        setCars(carList);
      } catch (error) {
        console.error("Error al obtener la de Vehiculos:", error);
      }
    }

    fetchCars();
  }, [accessToken]);


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValues) => {
      console.log("Form values:", formValues);
      try {
        await driveController.register(formValues, accessToken);
        formik.resetForm();
        formik.setFieldValue("idCar", undefined);
        toast.success("¡Conductor creado con exito!")
      } catch (error) {
        console.log(error);
        toast.error("Error en el servidor");
      }
    },
  });


  return (
    <>
    <Form className="Driver-Form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="nombre"
        type="text"
        placeholder="Nombres"
        onChange={formik.handleChange}
        value={formik.values.nombre}
        error={
          formik.touched.nombre &&
          formik.errors.nombre && {
            content: formik.errors.nombre,
            pointing: "below",
          }
        }
      />
      <Form.Input
        name="cedula"
        type="text"
        placeholder="Cedula"
        onChange={formik.handleChange}
        value={formik.values.cedula}
        error={
          formik.touched.cedula &&
          formik.errors.cedula && {
            content: formik.errors.cedula,
            pointing: "below",
          }
        }
      />
      <Form.Input
        name="correo"
        placeholder="Correo Electronico"
        onChange={formik.handleChange}
        value={formik.values.correo}
        error={
          formik.touched.correo &&
          formik.errors.correo && {
            content: formik.errors.correo,
            pointing: "below",
          }
        }
      />

    <Form.Field>
        <Dropdown
          fluid
          selection
          search
          name="idCar"
          placeholder="Seleccionar Car"
          options={cars.map((car) => ({
            key: car._id,
            text: `${car.placa} - ${car.tipoVehiculo} - ${car.empresa}`,
            value: car._id,
          }))}
          onChange={(e, { value }) => formik.setFieldValue("idCar", value)}
          value={formik.values.idCar}
          error={
            formik.touched.idCar &&
            formik.errors.idCar && {
              content: formik.errors.idCar,
              pointing: "below",
            }
          }
        />
      </Form.Field>

      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Enviar Datos
      </Form.Button>

      <p className="Driver-Form__error">{error}</p>
    </Form>
    <ToastContainer/>
    </>
  );
}
