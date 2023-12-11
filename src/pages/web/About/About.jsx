import React from 'react'
import { Footer } from "../../../components/Footer/Footer"
import Content from '../../../components/componentsHome/Content'
import Gallery from '../../../components/componentsHome/Gallery'
import Navbar from '../../../components/componentsHome/Navbar'

export function About() {
  return (
    <>
    <Navbar/>
    <Content />
    <Gallery />
    <Footer/>
    </>
  )
}
