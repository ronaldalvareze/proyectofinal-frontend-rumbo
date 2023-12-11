import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { Pqrs } from "../../api/pqrs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const pqrsController = new Pqrs()

const Details = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    
    //const { nombre, cedula, correo, numeroTelefonico, placaVehicular, mensaje } = data;

    //if (!nombre || !cedula || !correo || !numeroTelefonico  || !placaVehicular || !mensaje){
     // alert("Todos los campos son obligatorios");
   //   return;
   // }
  
    // Set isLoading to true before making the request
    setIsLoading(true);
    pqrsController.register(data).then((response) => {
        // Aquí puedes manejar la respuesta del backend después de enviar los datos
        console.log("Response from Pqrs:", response);
        event.target.reset();
        alert("Se creo su PQR de manera correcta");
      })
      .catch((error) => {
        // Aquí puedes manejar los errores que ocurrieron durante la solicitud al backend
        console.error("Error in Pqrs:", error);
        // Mostrar un mensaje de error al usuario
        alert("Error al enviar los datos. Por favor, inténtelo de nuevo.");
      })
      .finally(() => {
        // Set isLoading to false after the request is complete (success or error)
        setIsLoading(false);
      });

    console.log({
      nombre: data.get("name"),
      cedula: data.get("cedula"),
      email: data.get("correo"),
      phone: data.get("numeroTelefonico"),
      placa: data.get("placaVehicular"),
      mensaje: data.get("mensaje"),
    });
  };


  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Tu opinion nos importa"} textAlign={"center"} />
      <Paragraph
        text={"Califica tu servicio presenta queja reclamo o felicitacion."}
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre completo"
          name="name"
          autoComplete="name"
          autoFocus
        />


<TextField
        margin="normal"
        required
        fullWidth
        id="numero"
        label="Numero de cedula"
        name="cedula"
        autoComplete="number"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Correo electronico"
        name="correo"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="numeroTelefonico"
        label="Numero telefonico"
        type="phone"
        id="phone"
        autoComplete="current-phone"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="placa"
        label="placa vehicular"
        name="placaVehicular"
        autoComplete="String"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="mensage"
        label="ingrese tu mensaje"
        name="mensaje"
        autoComplete="text"
        autoFocus
      />
      

<Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          disabled={isLoading}
          sx={{
            fontSize: "0.9rem",
            textTransform: "capitalize",
            py: 2,
            mt: 3,
            mb: 2,
            borderRadius: 0,
            backgroundColor: "#14192d",
            "&:hover": {
              backgroundColor: "#1e2a5a",
            },
          }}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
