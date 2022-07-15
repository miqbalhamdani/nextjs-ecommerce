import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Default(props) {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )
}
