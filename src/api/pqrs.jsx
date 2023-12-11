import {ENV} from "../utils"

const HTTP_METHODS = {
  POST: "POST",
};

export class Pqrs {
  baseApi = ENV.BASE_API;

    async register (data) {
      try{
        
        const url = `${this.baseApi}/${ENV.API_ROUTES.PQRSREGISTER}`;
        const params = {
          method: HTTP_METHODS.POST,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: data.get('name'),
            cedula: data.get('cedula'),
            correo: data.get('correo'),
            numeroTelefonico: data.get('numeroTelefonico'),
            placaVehicular: data.get('placaVehicular'),
            mensaje: data.get('mensaje'),
          }),
      };

      const response = await fetch(url, params)
      const result = await response.json();
  
      if (!response.ok) {
        console.error("Error en el registro del Pqrs", result)
        throw new Error("Error al registrar el Pqrs")
      }else{
        console.log("Se creo el PQRS", result);
      }

      return result
    } catch (error){
      console.log("error:", error);
    }
  }
}
    
  
  

