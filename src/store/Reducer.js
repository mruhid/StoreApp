const initialState = {
    deliveryAmount: 10,
    lastPath: '/',
    discount: [],
    products: [],
    v1products: [],
    logo:["https://seeklogo.com/images/S/shop-app-logo-BDB17CEF31-seeklogo.com.png"],
    basket: JSON.parse(localStorage.getItem("basket")) || [],
    categories: [{ name: 'Jewelery' },
   
    { name: 'Men' },
    { name: 'Women' }],
     AllCategories:[
        {
            name:"Woman",
            path:"/women's%20clothing/12/all"
        },
        {
            name:"Man",
            path:"/men's%20clothing/11/all"
        },
        {
            name:"Jewelery",
            path:"/jewelery/10/all"
        },
        {
            name:"Electronics",
            path:"/Electronics/2/all"
        },
        {
            name:"Funiture",
            path:"/Change%20title/3/all"
        },
        {
            name:"Shoes",
            path:"/Shoes/4/all"
        },
     ],

     AllPages:[
        {
            name:"About",
            path:'/about'
        },
        {
            name:"Contact",
            path:'/contact'
        },
        {
            name:"Rules",
            path:'/rule'
        },
        {
            name:"Privacy",
            path:'/privacy'
        },
     ],
    user: JSON.parse(localStorage.getItem("user")) || [],
    Users: JSON.parse(localStorage.getItem("Users")) || [
        {
            "id": 1,
            "username": "john_doe",
            "email": "john@example.com",
            "password": "12341234",
            "name": "John Doe",
            "address": "123 Main St, Cityville",
            "phone": "555-123-4567",
            "orders": []
        },
        {
            "id": 2,
            "username": "jane_smith",
            "email": "jane@example.com",
            "password": "12341234",
            "name": "Jane Smith",
            "address": "456 Elm St, Townsville",
            "phone": "555-987-6543",
            "orders": []
        },
        {
            "id": 3,
            "username": "Ru_m",
            "email": "ruhidmmmdzad@gmail.com",
            "password": "20032003",
            "name": "Jane Smith",
            "address": "123 Elm St, London",
            "phone": "555-111-222",
            "orders": []
        }
    ]
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "SET_V1PRODUCTS":
            return { ...state, v1products: action.payload };
        case "SET_BASKET":

            localStorage.setItem("basket", JSON.stringify([...state.basket, action.payload]))
            return { ...state, basket: [...state.basket, action.payload] };
        case "SET_CATEGORY":
            return { ...state, categories: [...state.categories, action.payload] };
        case "SET_LASTPATH":
            if (action.payload == '/login' || action.payload == '/signup') {
                return
            }
            return { ...state, lastPath: action.payload };

        case "EDIT_BASKET":
            localStorage.setItem("basket", JSON.stringify(action.payload))
            return { ...state, basket: action.payload };
        case "SET_USER":
            localStorage.setItem("user", JSON.stringify(action.payload))
            return { ...state, user: action.payload };

        case "SET_ORDER":
            let check = state.Users.find((f) => (f.id == state.user.id))
            check.orders = action.payload
            localStorage.setItem("Users", JSON.stringify(state.Users))
            return { ...state }
    }

    return state
}

