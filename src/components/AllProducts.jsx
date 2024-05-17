import { Link, NavLink } from "react-router-dom"
import { FaChevronRight as Right } from "react-icons/fa";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function AllProducts({ categories, category_id, category }) {
    const [fetchData, setFechData] = useState([])
    const [loading, setLoading] = useState(true)
    const [Check, setCheck] = useState()

    useEffect(() => {
        const arr = ["Clothes",
            "Change tilin",
            "Electronics",
            "Furniture",
            "Shoes"
        ]
        let check = arr.find((f) => (f == category))
        setCheck(check)
        let URL = check ? `https://api.escuelajs.co/api/v1/products/?categoryId=${category_id}` :
            `https://fakestoreapi.com/products/category/${category}`

        fetch(URL)
            .then(res => res.json())
            .then(json => {
                setFechData(json)
                setLoading(false)
            })

    }, [])


    return (
        <>
            {loading ? <h1>Product over!</h1> : <section className="allProducts">
                <div className="category__box">
                    {categories.map((a, index) => (
                        <NavLink to={`/${a.name}/all`} key={index} className="link" >
                            <div><div className="a" >{a.name}</div></div>
                            <div><Right /></div>
                        </NavLink>
                    ))}


                </div>
                {fetchData.length ? "" :
                    <h1 style={{ textAlign: "center", color: "orangered", fontSize: '29px', alignItems: 'center', marginTop: '60px' }}>Products are over!</h1>
                }
                <div className="cotegory_products">

                    {Check ? fetchData.map((a) => (
                        <Link to={`/product/${a.category.name}/${a.id}`} key={a.id} className="product">
                            <img src={a.images[0]} alt="" />
                            <div className="product__title">
                                <h3 title={a.title} className="title" >{a.title.slice(0, 18)}...</h3>
                                <h3 className="price">${a.price}</h3>
                            </div>
                        </Link>
                    )) :
                        fetchData.map((a) => (
                            <Link to={`/product_v2/${a.category}/${a.id}`} key={a.id} className="product">
                                <img src={a.image} alt="" />
                                <div className="product__title">
                                    <h3 title={a.title} className="title" >{a.title.slice(0, 18)}...</h3>
                                    <h3 className="price">${a.price}</h3>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </section>}
        </>
    )
}
const t = (a) => {
    return {
        categories: a.categories
    }
}
export default connect(t)(AllProducts)
