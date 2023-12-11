import * as Yup from "yup";

export function initialValues() {
  return {
    nombre: "",
    cedula: "",
    correo: "",
    usuario:"",
    password: "",
    repeatPassword: "",
    conditionsAccepted: false,
  };
}

export function validationSchema() {
  return Yup.object({
    nombre: Yup.string().required("Campo Obligatorio"),
    cedula: Yup.number().required("Campo Obligatorio"),
    correo: Yup.string()
      .email("El correo no es válido")
      .required("Campo Obligatorio"),
    
    password: Yup.string().required("Campo Obligatorio"),
    repeatPassword: Yup.string()
      .required("Campo Obligatorio")
      .oneOf([Yup.ref("password")], "Las contraseñas deben ser iguales"),
    conditionsAccepted: Yup.bool().isTrue(true),
  });
}
