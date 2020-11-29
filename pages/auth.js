import React from 'react'
import Router from 'next/router'
import {MainLayout} from '../components/MainLayout'

export default function Auth () {

    const handleBack = () => {
        Router.push('/')
    }

    return (
        <MainLayout title="Auth">
            Auth <br/>
            <button onClick={handleBack}>Go back</button>
        </MainLayout>
    )
}