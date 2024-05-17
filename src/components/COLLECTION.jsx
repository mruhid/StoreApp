import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function COLLECTION() {
    const [collection, setCollection] = useState([])
    const [images, setImages] = useState([
        "https://globerec.com/wp-content/uploads/2022/10/consumer.jpeg",
        "https://jewelswithflair.nl/cdn/shop/files/sieradensetschelpzomer.jpg?v=1685776764",
        "https://www.next.com.az/nxtcms/resource/blob/5821500/e62e1d85d444c992f222485ababad4b1/coats-data.jpg",
        "https://www.next.com.az/nxtcms/resource/blob/5759382/b3405e481895047bebf1e95d4c605c13/denim-data.jpg"
    ])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => {
                setCollection(json)
                setLoading(false)
            })
    }, [])
    return (
        <>
        {loading||<h2 className="tag">Collection</h2>}
         {!loading?<section className="collections">
            {collection.slice(1).map((a, index) => (
                <Link to={`http://localhost:5173/${a}/${index+10}/all`} key={index} className="collection">
                    <div><img src={images[index+1]} alt="" /></div>
                    <h2>{a.toUpperCase()}</h2>

                </Link>

            ))}
        </section>:
        <h1>...Loading</h1>
        }
        </>
       
    )
}

export default COLLECTION