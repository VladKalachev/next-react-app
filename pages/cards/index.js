import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MainLayout } from '../../components/MainLayout'

export default function Cards ({ cards: serverCards }) {
    const [cards, setCards] = useState(serverCards)
    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4300/cards/`)
            const data = await response.json()
            setCards(data)
        }
        if(!serverCards) {
            load()
        }
    }, [])

    if(!cards) {
        return (
            <MainLayout>
                <p>Loading ...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout title="Cards">
           <ul>
            {cards.map(card => (
            <li key={card.id}>
                <Link href={`/cards/[id]`} as={`/cards/${card.id}`}>
                <a>{card.title}</a>
                </Link>
            </li>
            ))}
        </ul>
        </MainLayout>
    )
}

Cards.getInitialProps = async ({ req }) => {
    if(!req) {
        return { cards: null }
    }
    const response = await fetch(`http://localhost:4300/cards/`)
    const cards = await response.json()
    return { cards }
}