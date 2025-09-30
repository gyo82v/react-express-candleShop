import { useState, useEffect } from "react"

export default function Home(){
    const [candles, setCandles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:8000/api/product", {
                method : "GET",
                credentials : "include"
            })
            if(!res.ok){throw new Error("Error fecthing the data GET")}
            const data = await res.json()
            setCandles(data)
        }
        fetchData()
    }, [])

    const candlesArr = candles.map(c => (
        <p key={c.id}>{c.name}</p>
    ))

    return(
        <section>
            {candlesArr}
        </section>
    )
}