import { ENV } from "../utils";

export class Car {
  baseApi = ENV.BASE_API;

  async getCars(accessToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.GETCAR}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createCar( data, accessToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.CREATECAR}`;
      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          placa: data.placa,
          tipoVehiculo: data.tipoVehiculo,
          empresa: data.empresa,
        }),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 201) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async updateCar(accessToken, idCar, carData) {
    try {
      const data = carData;

      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      const url = `${ENV.BASE_API}/${ENV.API_ROUTES.UPDATECAR}/${idCar}`;
      const params = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(accessToken, idCar) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.DELETECAR}/${idCar}`;
      const params = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
