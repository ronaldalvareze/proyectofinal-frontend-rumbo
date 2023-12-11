import React, { useCallback } from "react";
import { Form, Image } from "semantic-ui-react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { image } from "../../../../assets";
import { ENV } from "../../../../utils";
import { initialValues, validationSchema } from "./UserForm.form";
import "./UserForm.scss";

const userController = new User();

export function UserForm(props) {
  const { close, onReload, user } = props;
  const { accessToken } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user),
    validationSchema: validationSchema(user),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (!user) {
          await userController.createUser(accessToken, formValue);
        } else {
          await userController.updateUser(accessToken, user._id, formValue);
        }
        onReload();
        close();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    formik.setFieldValue("avatar", URL.createObjectURL(file));
    formik.setFieldValue("fileAvatar", file);
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpge, image/jpg, image/png",
    onDrop,
  });

  const getAvatar = () => {
    if (formik.values.fileAvatar) {
      return formik.values.avatar;
    } else if (formik.values.avatar) {
      return `${ENV.BASE_PATH}/${formik.values.avatar}`;
    }
    return image.noAvatar;
  };

  return (
    <Form className="user-form" onSubmit={formik.handleSubmit}>
      <div className="user-form__avatar" {...getRootProps()}>
        <input {...getInputProps()} />
        <Image avatar size="small" src={getAvatar()} />
      </div>

      <Form.Group widths="equal">
        <Form.Input
          name="nombre"
          placeholder="Nombres"
          onChange={formik.handleChange}
          value={formik.values.nombre}
          error={formik.errors.nombre}
        />
        <Form.Input
          name="cedula"
          placeholder="numero"
          onChange={formik.handleChange}
          value={formik.values.cedula}
          error={formik.errors.cedula}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="correo"
          placeholder="Correo"
          onChange={formik.handleChange}
          value={formik.values.correo}
          error={formik.errors.correo}
        />

        <Form.Input
          name="usuario"
          placeholder="usuario"
          onChange={formik.handleChange}
          value={formik.values.usuario}
          error={formik.errors.usuario}
        />
      </Form.Group>
      <Form.Input
        type="password"
        name="password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        {user ? "Actualizar Usuario" : "Crear Usuario"}
      </Form.Button>
    </Form>
  );
}

const roleOptions = [
  {
    key: "user",
    text: "Usuario",
    value: "user",
  },
  {
    key: "admin",
    text: "Administrador",
    value: "admin",
  },
];
