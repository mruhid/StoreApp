import { useEffect, useState } from "react"
import { connect } from "react-redux"
function BasketItems({ item,total,setTotal, Basket, dispatch, products }) {

    const { id, count, version } = item
    const [loading, setLoading] = useState(false)
    const [fetchProduct, setFetchProduct] = useState([])
    const link = 'https://fakestoreapi.com/products/' + id
    useEffect(() => {
        version == 'v1' &&
            fetch(link)
                .then(res => res.json())
                .then(json => {
                    setFetchProduct(json)
                })
    }, [Basket])



    const changeItemCount = (n) => {
        let temp = Basket.find((f) => (f.id == id && f.version == version))
        temp.count += n
        if (!temp.count) {
            Basket = Basket.filter((a) => {
                if (a.id == id) {
                    if (a.version == version) {
                        return
                    }
                }
                return a
            })
        }
        dispatch({
            type: "EDIT_BASKET",
            payload: [...Basket]
        })



    }

    const removeItem = () => {
        let test = Basket.filter((a) => {
            if (a.id == id) {
                if (a.version == version) {
                    return
                }
            }

            return a
        })
        dispatch({
            type: "EDIT_BASKET",
            payload: [...test]
        })
    }


    const product =
        products.find((f) => (f.id == id))

    const element = version == 'v1' ? fetchProduct : product
    return (
        <>
            {<div className="basket_item">
                <div className="image" >
                    <div className="img"><img src={
                        version == 'v1' ? element.image :
                            element?.images[0]} alt=""
                    /></div>

                    <div className="title">
                        <div>{element?.title?.slice(0, 16)}...</div>
                        <div>Category:{version == "v1" ? element.category :
                            element?.category.name
                        }</div>

                        <div className="count">
                            <div onClick={() => changeItemCount(-1)} className="decrease">-</div>
                            <div>{count}</div>
                            <div onClick={() => changeItemCount(1)} className="increase">+</div>
                        </div>
                    </div>
                </div>

                <div className="price">
                    
                    <h3 style={{ color: 'green' }} >${+(element?.price*count).toFixed(2)}</h3>
                    <div onClick={removeItem} style={{ color: 'red' }} >Delete</div>
                </div>

            </div>}
        </>
    )
}
const t = (a) => {
    return {
        products: a.products,
    }
}
export default connect(t)(BasketItems)