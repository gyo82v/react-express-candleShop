export default function CandleCard({image, category, name, scent, description, price}){
    const container = ``
    const section1 = ``
    const section2 = ``
    const img = `h-96 w-full rounded-t-lg`
    const categoryP = ``
    const h2 = ``
    const scentP = ``
    const descP = ``
    const priceP = ``
 
    return(
        <section className={container}>
            <section className={section1}>
                <img src={image} alt="candle" className={img} />
                <p className={categoryP}>{category}</p>
            </section>
            <section className={section2}>
                <h2 className={h2}>{name}</h2>
                <p className={scentP}>{scent}</p>
                <p className={descP}>{description}</p>
                <p className={priceP}>£{price}</p>
            </section>
        </section>
    )
}