import { ENV } from "../utils";

const HTTP_METHODS = {
  POST: "POST",
};

export class Auth {
  baseApi = ENV.BASE_API;

  async register(data) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.REGISTER}`;
      const params = {
        method: HTTP_METHODS.POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: data.nombre,
          cedula: data.cedula,
          correo: data.correo,
          usuario: data.usuario,
          password: data.password,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (!response.ok) {
        console.error("Error en el registro:", result);
        throw new Error("Error al registrar el usuario");
      }

      return result;
    } catch (error) {
      console.error("Error en el registro:", error);
      throw new Error("Error al registrar el usuario");
    }
  }

  async login(data) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.LOGIN}`;
      const params = {
        method: HTTP_METHODS.POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (!response.ok) {
        console.error("Error en el inicio de sesión:", result);
        throw new Error("Error en el inicio de sesión");
      }

      return result;
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      throw new Error("Error en el inicio de sesión");
    }
  }

  async refreshAccessToken(refreshToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.REFRESH_ACCESS_TOKEN}`;
      const params = {
        method: HTTP_METHODS.POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: refreshToken,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (!response.ok) {
        console.error("Error al refrescar el token de acceso:", result);
        throw new Error("Error al refrescar el token de acceso");
      }

      return result;
    } catch (error) {
      console.error("Error al refrescar el token de acceso:", error);
      throw new Error("Error al refrescar el token de acceso");
    }
  }

  setAccessToken(token) {
    localStorage.setItem(ENV.JWT.ACCESS, token);
  }

  getAccessToken() {
    return localStorage.getItem(ENV.JWT.ACCESS);
  }

  setRefreshAccessToken(token) {
    localStorage.setItem(ENV.JWT.REFRESH, token);
  }

  getRefreshAccessToken() {
    return localStorage.getItem(ENV.JWT.REFRESH);
  }

  removeTokens() {
    localStorage.removeItem(ENV.JWT.ACCESS);
    localStorage.removeItem(ENV.JWT.REFRESH);
  }
}
