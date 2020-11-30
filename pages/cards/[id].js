import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MainLayout } from '../../components/MainLayout'

export default function Card ({card: serverPost }) {
    const [card, setCard] = useState(serverPost)
    const { query } = useRouter()
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4300/cards/${query.id}`)
            const data = await response.json()
            setCard(data)
        }
        if(!serverPost) {
            load()
        }
    }, [])

    if(!card) {
        return (
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <h1>{card.title}</h1>
            <hr />
            <p>{card.body}</p>
            <Link href={'/cards'}><a>Back to all cards</a></Link>
        </MainLayout>
    )
}

Card.getInitialProps = async ({ query, req }) => {
    if(!req) {
        return { card: null }
    }
    const response = await fetch(`http://localhost:4300/cards/${query.id}`)
    const card = await response.json()
    return { card }
}