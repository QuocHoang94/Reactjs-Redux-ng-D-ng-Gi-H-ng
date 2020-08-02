import React, { Component } from 'react'
import Header from './components/Header'
import Message from './components/Mesage'
import Cart from './components/Cart'
import Footer from './components/Footer'
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import MessageContainer from './containers/MessageContainer'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer />
            <MessageContainer/>
            <CartContainer/>
          </div>
        </main>
        {/* Footer */}
        <Footer/>
      </div>

    )
  }
}
