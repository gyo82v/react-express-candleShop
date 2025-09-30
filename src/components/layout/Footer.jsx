export default function Footer(){
    const container = `bg-gradient-to-br from-slate-700 to-slate-600 
                       text-slate-50 font-semibold p-4 
                       flex items-center justify-center`
    return(
        <footer className={container}>
            <p>Candle Shop @2025</p>
        </footer>
    )
}