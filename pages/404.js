import {MainLayout} from '../components/MainLayout'
import style from '../styles/error.module.css'

export default function NotFound () {
    return (
        <MainLayout>
         <h1 className={style.error}>404 Page</h1>
         
        </MainLayout>
    )
}