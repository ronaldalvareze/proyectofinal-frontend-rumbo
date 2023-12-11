import React, { useState } from 'react'
import { Tab,Grid,GridColumn } from "semantic-ui-react"
import "./Auth.scss"
import { LoginForm, RegisterForm } from '../../../components/Admin/Auth/index'
import Navbar from "../../../components/componentsHome/Navbar"


export function Auth() {
  const [activeIndex, setActiveIndex] = useState(1)
  const openLogin = () => setActiveIndex(0)


  const panes = [
    {
      menuItem: "Enter",
      render: () => (
        <Tab.Pane>
          <LoginForm/>
        </Tab.Pane>
      )
    },
    {
      menuItem: "New User",
      render: () => (
        <Tab.Pane>
          <RegisterForm openLogin={openLogin}/>
        </Tab.Pane>
      )
    }
  ]
  return (
    <Grid columns={1}>
      <GridColumn mobile={16} table={16} computer={16}>
    <div className='auth'>

      <Navbar/>

      <Tab panes={panes} className="auth_form" activeIndex={activeIndex} onTabChange={(_, data)  => setActiveIndex(data.activeIndex)}/>
    </div>
    </GridColumn>
    </Grid>
  )
}

