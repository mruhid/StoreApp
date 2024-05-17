import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { connect } from "react-redux"
import AddBasketButtun from "../components/AddBasketButtun"

function Details() {
    const { category, id } = useParams()
    const [product, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => {
                setProducts(json)
                setLoading(false)
            })
    }, [])
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

            {loading || <section className="Link">
                <NavLink style={{ color: '#615a5a' }} to='/' >Home ></NavLink>
                <NavLink style={{ color: '#615a5a' }} to={`/${category}/${id}/all`}>{category} ></NavLink>
            </section>}

            {!loading ? <section className="details__continer">
                <div>
                    <img src={product.image} alt="" />
                </div>

                <div className="detail">
                    <div>
                        <h1 className="Product_name">{product.title}</h1>

                    </div>
                    <div className="detail__price"><h1 className="price">${product.price}</h1></div>
                    {category == "null" ? <div>
                        <h1 className="size_title">Size:</h1>
                        <div className="sizeNumber">
                            {size.map((a, i) => (
                                <h2 onClick={() => setActiveSize(a)}
                                    key={i}
                                    className={activeSize == a ? "active" : "size"}>{a}</h2>
                            ))}
                        </div>

                    </div> : ''}
                    <AddBasketButtun product={product}
                        version={'v1'}
                        activeSize={activeSize ? activeSize : null}
                    />
                </div>
            </section>
                : <h1 >...Loading</h1>}

        </>
    )
}

export default connect()(Details)