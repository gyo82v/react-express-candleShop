export default function CandleCard({image, category, name, scent, description, price}){
    const container = `text-slate-700 shadow-lg shadow-slate-700/30 rounded-lg`
    const section1 = `relative`
    const section2 = `px-1 flex flex-col  mt-2`
    const section3 = `flex justify-between items-center`
    const img = `h-96 w-full rounded-t-lg`
    const categoryP = `absolute top-0 left-0 py-1 px-3
                       bg-gradient-to-br from-purple-300 to-lime-100 rounded-br-lg 
                       font-semibold shadow-lg text-purple-700 text-lg`
    const h2 = `text-xl font-bold`
    const scentP = `italic text-neutral-500 text-sm mr-1`
    const descP = `text-sm mt-2`
    const priceP = ``
 
    return(
        <section className={container}>
            <section className={section1}>
                <img src={image} alt="candle" className={img} />
                <p className={categoryP}>{category}</p>
            </section>
            <section className={section2}>
                <section className={section3}>
                  <h2 className={h2}>{name}</h2>
                  <p className={scentP}>{scent}</p>
                </section>
                <p className={descP}>{description}</p>
                <p className={priceP}>£{price}</p>
            </section>
        </section>
    )
}