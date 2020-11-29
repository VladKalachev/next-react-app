import {useRouter} from 'next/router'

export default function Cards ({url}) {
    const router = useRouter()
    return (
        <div>
            card {router.query.id}
        </div>
    )
}