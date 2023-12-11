const IP_SERVER = "https://proyect-backend-rumbo-production.up.railway.app/"

// VARIABLES PARA MODIFICAR Y AGREGAR DEL FRONTEND

export const ENV = {
    BASE_PATH: `http://${IP_SERVER}`,
    BASE_API: `http://${IP_SERVER}/api/v1`,
    API_ROUTES: {
        REGISTER: "auth/register",
        LOGIN: "auth/login",
        REFRESH_ACCESS_TOKEN: "/auth/refresh_access_token",
        USER_ME: "user/me",
        USER: "user",
        USERS: "users",
        PQRSREGISTER:"pqrs",
        CREATECONDUCTOR: "driver",
        GETCONDUCTOR: "drivers",
        DELETECONDUCTOR: "driver/:id",
        UPDATECONDUCTOR: "driver/:id",
        GETCAR: "cars",
        CREATECAR: "car",
        UPDATECAR: "car/:id",
        DELETECAR: "car/:id",
        CREATERUTA: "ruta",
        GETRUTAS: "ruta/:id"
        
    },
    JWT: {
        ACCESS: "access",
        REFRESH: "refresh",
    },
}