/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react'
import { db } from '../firebase'
import './orders.css'

import shoppingContext from './context/shopping/ShoppingContext'
import { Order } from './Order'

function Orders () {
  const context = useContext(shoppingContext)
  const {
    basket, user, getBasketTotal, emptyBasket
  } = context

  const [orders, setOrders] = useState([])

  useEffect(() => {
    if (user) {
      db.collection('user')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => (

          setOrders(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          })))
        ))
    } else {
      setOrders([])
    }
  }, [user])

  return (
    <div>
      <h1>Your orders </h1>

      <div className="orders_order">
        {orders?.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

export default Orders
