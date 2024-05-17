import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import Reducer from './store/Reducer.js';
import { Provider } from 'react-redux'
import { legacy_createStore } from 'redux'
const store=legacy_createStore(Reducer)



ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  
  
  )
