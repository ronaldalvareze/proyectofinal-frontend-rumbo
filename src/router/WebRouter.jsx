import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import { ClientLayout } from  "../layouts/ClientLayout"
import { About,  Contact, Home, Rutas} from "../pages/web"



export function WebRouter() {

    const LoadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page/>
            </Layout>
        )
    }

    return (
        <Routes>
            <Route path="/" element={ LoadLayout(ClientLayout, Home)} /> 

            <Route path= "/about" element={ LoadLayout(ClientLayout,About 
            )} />


            <Route path= "/contact" element={ LoadLayout(ClientLayout, 
            Contact)} />

            <Route path= "/rutas" element={ LoadLayout(ClientLayout, Rutas)} />

            <Route path="/admin" element={<Link to="/admin"></Link>} />
    


    
        </Routes>
    )

}