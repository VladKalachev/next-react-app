import { useRouter } from 'next/router'

export default function Card () {
    const router = useRouter()
    return (
        <div>
            card {router.query.id}
        </div>
    )
}