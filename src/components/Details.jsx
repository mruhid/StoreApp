import { useState } from "react"

function Details() {
    const [size, setSize] = useState([
        "S",
        "M",
        "L",
        "XL",
        "2XL"
    ])
    const [activeSize, setActiveSize] = useState()
    return (
        <>
            <section className="details__continer">
                <div>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                </div>
                <div className="detail">
                    <div>
                        <h1 className="Product_name">Name</h1>

                    </div>
                    <div className="detail__price"><h1 className="price">Price</h1></div>
                    <div>
                        <h1 className="size_title">Size:</h1>
                        <div className="sizeNumber">
                            {size.map((a, i) => (
                                <h2 onClick={() => setActiveSize(a)}
                                    key={i}
                                    className={activeSize==a?"active":"size"}>{a}</h2>
                            ))}
                        </div>

                    </div>
                    <div><button >Add to basket</button></div>
                </div>
            </section>
        </>
    )
}

export default Details