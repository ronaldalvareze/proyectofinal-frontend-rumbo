import React from 'react'
import { Button, Icon } from "semantic-ui-react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../../hooks"

export function Logout() {

    const { logout } = useAuth()
    const { navigate } = useNavigate()

    const onLogout = () => {
        logout()
        navigate("/admin")
    }

  return (
    <Button icon basic color="black" onClick={onLogout}>
        <Icon name="angle double left"/>Salir
    </Button>
  )
}
