
import * as Yup from "yup";

export function initialValues() {
  return {
    placa: "",
    tipoVehiculo: "",
    empresa: "",
  };
}

export function validationSchema() {
  return Yup.object({
    placa: Yup.string().required("Campo Obligatorio"),
    tipoVehiculo: Yup.string().required("Campo Obligatorio"),
    empresa: Yup.string().required("Campo Obligatorio"),
    
  });
}
