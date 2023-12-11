import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { Auth } from "../../../../api";
import { initialValues, validationSchema } from "./RegisterForm.form";
import "./RegisterForm.scss";

const authController = new Auth();

export function RegisterForm(props) {
  const { openLogin } = props;
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValues) => {
      try {
        setError("");
        await authController.register(formValues);
        openLogin();
      } catch (error) {
        setError("Error en el servidor");
      }
    },
  });

  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
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
      <Form.Input
        name="usuario"
        placeholder="Usuario"
        onChange={formik.handleChange}
        value={formik.values.usuario}
        error={formik.errors.usuario}
      />


      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={
          formik.touched.password &&
          formik.errors.password && {
            content: formik.errors.password,
            pointing: "below",
          }
        }
      />
      <Form.Input
        name="repeatPassword"
        type="password"
        placeholder="Repetir Contraseña"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
        error={
          formik.touched.repeatPassword &&
          formik.errors.repeatPassword && {
            content: formik.errors.repeatPassword,
            pointing: "below",
          }
        }
      />
      <Form.Checkbox
        name="conditionsAccepted"
        label="He leído y acepto las políticas de privacidad."
        onChange={(_, data) =>
          formik.setFieldValue("conditionsAccepted", data.checked)
        }
        checked={formik.values.conditionsAccepted}
        error={
          formik.touched.conditionsAccepted &&
          formik.errors.conditionsAccepted && {
            content: formik.errors.conditionsAccepted,
            pointing: "below",
          }
        }
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Crear Cuenta
      </Form.Button>

      <p className="register-form__error">{error}</p>
    </Form>
  );
}
