import { ENV } from "../utils";

const HTTP_METHODS = {
  POST: "POST",
};

export class Drive {
  baseApi = ENV.BASE_API;

  async register(data, accessToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.CREATECONDUCTOR}`;
  
      const params = {
        method: HTTP_METHODS.POST,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
      },
        body: JSON.stringify({
          nombre: data.nombre,
          cedula: data.cedula,
          correo: data.correo,
          idCar: data.idCar,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 201) throw result
            return result

            
          }catch (error) {
            throw error
        }
      }
}
