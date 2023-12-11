
import * as Yup from "yup";

export function initialValues() {
  return {
    nombre: "",
    cedula: "",
    correo: "",
  };
}

export function validationSchema() {
  return Yup.object({
    nombre: Yup.string().required("Campo Obligatorio"),
    cedula: Yup.number().required("Campo Obligatorio"),
    correo: Yup.string()
      .email("El correo no es válido")
      .required("Campo Obligatorio"),
      idCar: Yup.string().required("Campo Obligatorio"),
    
  });
}
