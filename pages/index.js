// import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'

export default function Index() {
  return (
    <MainLayout title="Home">
      Home
      {/* <p><Link href={'/cards'}><a>Cards</a></Link></p>
      <p><Link href='/auth'><a>Auth</a></Link></p> */}
    </MainLayout>
  )
}
