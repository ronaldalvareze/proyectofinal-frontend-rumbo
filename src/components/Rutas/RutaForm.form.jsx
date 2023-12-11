
import * as Yup from "yup";

export function initialValues() {
  return {
    placaDespacho: "",
    fecha: "",
    hora: "",
    ruta: "",
    origen: "",
    destino: "",
  };
}

export function validationSchema() {
  return Yup.object({
    placaDespacho: Yup.string().required("Campo Obligatorio"),
    fecha: Yup.string().required("Campo Obligatorio"),
    hora:  Yup.string().required("Campo Obligatorio"),
    ruta: Yup.string().required("Campo Obligatorio"),
    origen: Yup.string().required("Campo Obligatorio"),
    destino: Yup.string().required("Campo Obligatorio"),
  });
}
