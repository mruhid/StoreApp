import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { connect } from "react-redux"
import AddBasketButtun from "../components/AddBasketButtun"

function Details({ data }) {
    const { category, id } = useParams()
    const product = data.find((f) => (f.id == id))
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
            <section className="Link">
                <NavLink style={{ color: '#615a5a' }} to='/' >Home ></NavLink>
                <NavLink style={{ color: '#615a5a' }} to={`/${category}/${product?.category?.id}/all`}>{category} ></NavLink>
            </section>
            <section className="details__continer">
                <div>
                    <img src={product?.images[0]} alt="" />
                </div>
                <div className="detail">
                    <div>
                        <h1 className="Product_name">{product.title}</h1>

                    </div>
                    <div className="detail__price"><h1 className="price">${product?.price}</h1></div>
                    {/* {category == "Clothes" ? <div>
                        <h1 className="size_title">Size:</h1>
                        <div className="sizeNumber">
                            {size.map((a, i) => (
                                <h2 onClick={() => setActiveSize(a)}
                                    key={i}
                                    className={activeSize == a ? "active" : "size"}>{a}</h2>
                            ))}
                        </div>

                    </div> : ''} */}
                    <AddBasketButtun product={product}
                        version={'v2'}
                        activeSize={activeSize ? activeSize : null}
                    />
                </div>
            </section>
        </>
    )
}
const t = (a) => {
    return {
        data: a.products
    }
}
export default connect(t)(Details)