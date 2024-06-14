import React from 'react'
import Navbar from './Navbar'
import Items from './Items'
import { Routes,Route } from 'react-router-dom'
import AddItem from './AddItem'
import Cart from './Cart'
import { createStore } from 'redux'

import { Provider } from 'react-redux'
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import RootReducer from './Reducers/RootReducer'
import Footer from './Footer'
const App = () => {
  const persistConfig = {
    key : 'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig,RootReducer)

  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

  return (
    <div>
   <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Navbar/>
     <Routes>
          <Route path='/' element={<Items/>}/>
          <Route path='/additem' element={<AddItem/>}/>
          <Route path='/cart' element={<Cart/>}/>

     </Routes>
      </PersistGate>
   </Provider>

    </div>
  )
}

export default App
