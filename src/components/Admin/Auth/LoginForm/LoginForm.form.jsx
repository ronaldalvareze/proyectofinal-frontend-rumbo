import * as Yup from "yup"

export function initialValues(){
    return {
        usuario: "",
        password: "",
    }
}

export function validationSchema() {
    return Yup.object({
        usuario: Yup.string().label("El Usuario").required("Campo obligatorio"),
        
        
        password: Yup.string().required("Campo obligatorio"),
            });
        }