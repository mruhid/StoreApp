import { NavLink } from "react-router-dom"

function Product({ product }) {
  const activeImg = 0
  return (

    <>
      <NavLink to={`/product/${product.category.name}/${product.id}`} className="product">
        <img src={product.images[0]} alt="" />
        <div className="product__title">
          <h3 className="title" >{product.title}</h3>
          <h3 className="price">$ {product.price}</h3>
        </div>
      </NavLink>
    </>
  )
}

export default Product
