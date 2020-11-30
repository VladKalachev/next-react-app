import React from 'react'
import Router from 'next/router'
import {MainLayout} from '../components/MainLayout'

export default function Auth ({title}) {

    const handleBack = () => {
        Router.push('/')
    }

    return (
        <MainLayout title="Auth">
            {title}
            <br/>
            <button onClick={handleBack}>Go back</button>
        </MainLayout>
    )
}

Auth.getInitialProps = async () => {
    const response = await fetch(`http://localhost:4300/about`)
    const data = await response.json()
  
    return {
      title: data.title
    }
  }