import React from 'react'
import {Menu,Icon } from 'semantic-ui-react'
import { Link,  useLocation } from 'react-router-dom'
import { useAuth } from '../../../../hooks'
import "./AdminMenu.scss"



export function AdminMenu() {

  const { pathname } = useLocation()

  const { user: { role }, } = useAuth()
  const isAdmin = role === "admin"

  const isCurrentPath = (path) => {
      if (path === pathname) return true
      return false 
  }

  return (
    <Menu fluid vertical icon text className='admin-menu'>
      {isAdmin && (
        <>
        

        </>
      )}

      <Menu.Item as = {Link} to = "/admin/users" active = {isCurrentPath("/admin/users")}>
        <Icon name= "user outline"/>
          Usuario
      </Menu.Item>
        <Menu.Item as = {Link} to= "/admin/rutas"active = {isCurrentPath("/admin/rutas")}>
          <Icon name = "road" />
        Rutas
        </Menu.Item>

        <Menu.Item as = {Link} to= "/admin/cars"active = {isCurrentPath("/admin/cars")}>
          <Icon name = "bus" />
        Vehiculos
        </Menu.Item>

        <Menu.Item as = {Link} to= "/admin/drivers"active = {isCurrentPath("/admin/drivers")}>
          <Icon name = "user" />
        Conductores
        </Menu.Item>


        <Menu.Item as = {Link} to= "/admin/newsletter"active = {isCurrentPath("/admin/newsletter")}>
          <Icon name = "mail" />
          Newsletter
        </Menu.Item>
    
        <Menu.Item as = {Link} to= "/admin/blog"active = {isCurrentPath("/admin/blog")}>
          <Icon name = "comment alternate outline" />
          Blog
        </Menu.Item>
    </Menu> 
  )
}
