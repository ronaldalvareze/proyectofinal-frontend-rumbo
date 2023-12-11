import  React from "react"
import { Footer } from "../../../components/Footer/Footer"
import  Header from "../../../components/componentsHome/Header"
import Navbar from "../../../components/componentsHome/Navbar"
import GetInTouch from "../../../components/componentsHome/GetInTouch"
import GetStarted from "../../../components/componentsHome/GetStarted"

export function Home() {
    return (
        <>
        <Navbar/>
        <Header />
        <GetStarted/>
        <GetInTouch/>
        <Footer/>
        </>
    )
}