import Link from 'next/link'
import Head from 'next/head'

export function MainLayout ({children, title = "Base"}) {
    return (
        <>
            <Head>
                <title>{title} | Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/cards'}><a>Cards</a></Link>
                <Link href='/auth'><a>Auth</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{
                `
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    right: 0;
                    top: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                
                nav a {
                    color: #fff;
                    margin-left: 10px;
                }

                main {
                    margin-top: 60px;
                }
                `
            }</style>
        </>
    )
}