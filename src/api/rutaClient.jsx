import { ENV } from "../utils";

const HTTP_METHODS = {
  GET: "GET",
};

export class RutaClient {
  baseApi = ENV.BASE_API;

  async register(data) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.CREATERUTA}`;
      const params = {
        method: HTTP_METHODS.POST,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          placaDespacho: data.placaDespacho,
          fecha: data.fecha,
          hora: data.hora,
          ruta: data.ruta,
          origen: data.origen,
          destino: data.destino,

        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (!response.ok) {
        console.error("Error en el registro de la ruta:", result);
        throw new Error("Error al registrar la ruta");
      }

      return result;
    } catch (error) {
      console.error("Error en el registro de la ruta:", error);
      throw new Error("Error al registrar la ruta");
    }
  }
}
