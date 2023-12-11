import React from "react";
import { Routes, Route } from "react-router-dom";
import { map } from "lodash";
import { AdminLayout } from "../layouts";
import {
  Auth,
  Users,
  Blog,
  Rutas,
  Drivers,
  Cars,
  Menu,
  NewsLetter,
  
} from "../pages/admin";
import { useAuth } from "../hooks";



export function AdminRouter() {
  const { user } = useAuth()

  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    )
  }

  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*"  element={<Auth/>} />
      ) : (
        <>
          {["/admin", "/admin/blog"].map ((path) => (
            <Route
              key={path}
              path={path}
              element={loadLayout(AdminLayout, Blog)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />

          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />

          <Route path="/admin/rutas" element={loadLayout(AdminLayout, Rutas)} />

          <Route path="/admin/cars" element={loadLayout(AdminLayout, Cars)} />

          <Route path="/admin/drivers" element={loadLayout(AdminLayout, Drivers)} />

          <Route path="/admin/blog" element={loadLayout(AdminLayout, Blog)} />

          <Route path="/admin/newsletter"element={loadLayout(AdminLayout, NewsLetter)}/>

        </>
      )}
    </Routes>
  )
}
