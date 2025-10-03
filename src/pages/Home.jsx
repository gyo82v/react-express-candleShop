import { useState, useEffect } from "react"
import CandleCard from "../components/CandleCard"

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

    const candlesArr = candles.map(c => <CandleCard key={c.id} {...c} />)

    return(
        <section className="p-4 flex flex-col gap-4">
            {candlesArr}
        </section>
    )
}