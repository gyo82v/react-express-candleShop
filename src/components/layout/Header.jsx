import {NavLink} from "react-router-dom"

export default function Header(){
    const container = ` bg-gradient-to-br from-slate-700 to-slate-600
                           px-4 py-6 shadow-lg shadow-slate-700/30 
                       flex items-center justify-between`
    const h1 = `text-slate-100 text-2xl font-bold`
    const nav = `flex items-center gap-3`
    const link = `text-slate-200 font-semibold 
                  transition-transform transition-colors duration-300 ease-in-out 
                  hover:scale-110 active:scale-95 hover:text-slate-300`
    return(
        <header className={container}>
            <h1 className={h1}>Candle Shop</h1>
            <nav className={nav}>
                <NavLink to="/" className={({isActive}) => isActive ? `${link} underline` : link}>Home</NavLink>
                <NavLink to="cart" className={({isActive}) => isActive ? `${link} underline` : link}>Cart</NavLink>
                <NavLink to="signIn" className={({isActive}) => isActive ? `${link} underline` : link}>Sign in</NavLink>
            </nav>
        </header>
    )
}