import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../../assets/png/about/gallery-img-1.png';
import imgDetail2 from '../../assets/png/about/gallery-img-2.png';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Acceso a todas las rutas a nivel regional'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    El propósito de este proyecto es actualizar de manera ágil y publicitaria el servicio de transporte. utilizando las nuevas tecnologías, dándole al usuario la facilidad de conocer horarios, despachos,<br />
                    vehículos y conductores. Con el fin de mitigar el porcentaje de la falta del conocimiento de que ruta se debe ir,en algunos casos a los visitantes a nuestro municipio y el transporte con su respectiva hora de salida,<br />
                    dando así una gran alternativa para todos. Mejorando la percepción por parte de los usuarios.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        '¿Por que elegirnos?'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Estamos comprometidos<br /> 
                    con un excelente servicio de trasporte publico
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;