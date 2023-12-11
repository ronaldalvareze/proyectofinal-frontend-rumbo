import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterTitle'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';




export  function Footer() {
  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F1F1F1',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'FanarGame'} />
        <FooterLink 
        text={'Llamanos estamos para servirte'} 
        />
        <FooterLink 
        text={'3143668016'} 
        />
        <FooterLink 
        text={'ronaldalvarez172@gmail.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'Nuestros servicios'} />
        <FooterLink text={'Creacion de aplicativos'} />
        <FooterLink text={'Desarrollo de proyectos'} />
        <FooterLink text={'Investigacion'} />
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'Nuestra Compañia'} />
        <FooterLink text={'Gran Personal humano'} />
        <FooterLink text={'Dedicados con el desarrollo'} />
        <FooterLink text={'En beneficios de nuestra gente'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Nuestras Redes'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link> 
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2022 HBSales Inc.
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}


