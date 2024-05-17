import { useEffect, useState } from "react";
import { connect } from 'react-redux'


function AddBasketButtun({ product, version, activeSize, basket, dispatch }) {



    let check = basket.find((f) => (f.id == product.id &&
        f.version == version))

    const addItem = () => {
        dispatch({
            type: "SET_BASKET",
            payload: {
                count: 1,
                version: version,
                id: product.id,
            }

        })

    }

    return (
        <>
            <div>
                {check && <p>Product added on Basket</p>}
                <button
                    onClick={addItem}
                    disabled={check}
                >Add to basket</button>
            </div>

        </>
    )
}



// function AddBasketButtun({ version, product, basket, activeSize, dispatch }) {
//     let check = activeSize.length ? basket.filter((f) => f.id == product.id &&
//         f.version == version
//     ) :
//         basket.find((f) => f.id == product.id && f.version == version);
//     console.log(check)
//     const [defaultSize, setDefaultSize] = useState([])
//     const [loading, setLoading] = useState(true)

//     const [warning, setWarning] = useState(false)


//     const IsClothes = () => {
//         if (version == 'v1' && product?.category !== "jewelery") {
//             return true
//         }
//         if (version == "v2" && product.category?.name == "Clothes") {
//             return true
//         }
//         return false

//     }


//     const addItems = () => {
//         let check = IsClothes()
//         if (check) {
//             if (activeSize.length) {
//                 setWarning(false)
//                 setDefaultSize([...defaultSize, activeSize])
//                 dispatch(
//                     {
//                         type: "SET_BASKET",
//                         payload: {
//                             id: product.id,
//                             version: version,
//                             count: 0,
//                             activeSize: activeSize
//                         }
//                     }
//                 )
//                 return
//             }
//             setWarning(true)
//             return
//         }

//         dispatch(
//             {
//                 type: "SET_BASKET",
//                 payload: {
//                     id: product.id,
//                     version: version,
//                     count: 0,
//                 }
//             }
//         )




//     }
//     let buttonDisabled = check && IsClothes() && defaultSize.find((f) => (f == activeSize))
//     console.log(buttonDisabled, defaultSize);

//     return (
//         <>
//         <div>
//             <p>{buttonDisabled && "Product added to basket" }</p>
//             <p style={{ color: 'red' }} className="warning">{warning ? "Choose Size or Color!" : ""}</p>
//             {IsClothes() ? <button
//                 onClick={addItems}
//                 disabled={buttonDisabled} >Add to basket
//             </button> :
//                 <button disabled={check} >Add basket</button>
//             }
//         </div>

//         </>
//     )
// }
const t = (a) => {
    return {
        basket: a.basket
    }
}
export default connect(t)(AddBasketButtun)