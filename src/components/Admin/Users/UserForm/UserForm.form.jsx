import * as Yup from "yup"

export function initialValues(user) {
    return {
        avatar: user?.avatar || "",
        fileAvatar: null,
        nombre: user?.nombre || "",
        cedula: user?.cedula || "",
        correo: user?.correo || "",
        usuario: user?.usuario || "",
        role: user?.role || "",
        password: "",
    }
}

export function validationSchema(user) {
    return Yup.object({
        nombre: Yup.string().required(true),
        cedula: Yup.number().required(true),
        correo: Yup.string().email(true).required(true),
        usuario: Yup.string().matches(/^[a-zA-Z0-9]+$/, 'Usuario no válido').required(true),
        role: Yup.string().required(true),
        password: user ? Yup.string() : Yup.string().required(true),
    })
}