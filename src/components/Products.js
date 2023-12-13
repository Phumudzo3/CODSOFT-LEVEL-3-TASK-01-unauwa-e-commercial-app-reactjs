import React, { useState } from 'react'
import './Products.css'
import Product from './ProductItems'

function Products () {
  const [filterItem, setFilterItem] = useState(null)

  const FilterChange = (category) => {
    setFilterItem(category)
  }

  const productsData = [
    // Your product data here
    {
      id: '1',
      title: 'Apple iPhone 11',
      image:
        'https://d28i4xct2kl5lp.cloudfront.net/product_images/78877_cbe0138e-899f-457b-b3a9-423b8fac2599.jpg',
      alt: 'iphone',
      rating: 4,
      price: 59.99,
      category: 'phones'
    },
    {
      id: '2',
      title: 'Samsung Galaxy S23+ 512GB Dual Sim 5G',
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/101034439-800-800?v=638366241854600000&width=800&height=800&aspect=true',
      alt: 'samsung',
      rating: 5,
      price: 89.99,
      category: 'phones'
    },
    {
      id: '3',
      title: 'Samsung 75 inch Au7000 Uhd 4K Tv',
      image:
        'https://thefoschini.vtexassets.com/arquivos/ids/100949808-800-800?v=638365640995670000&width=800&height=800&aspect=true',
      alt: 'plasma-screen',
      rating: 5,
      price: 60.99,
      category: 'tv'
    },
    {
      id: '4',
      title: 'Roku Express 4K+ | Roku Streaming Device 4K/HDR, Roku Voice Remote, Free & Live TV',
      image:
        'https://altechelectronics.org/wp-content/uploads/2021/06/samsung-galaxy-tab-s7-124-inch-android-tablet-128gb-wi-fi-bluetooth-s-pen-1536x1536.jpg',
      alt: '',
      rating: 3,
      price: 28.99,
      category: 'streaming'
    },
    {
      id: '5',
      title: 'Lenovo IdeaPad Flex 5 14″ Touch Laptop – Core i7, 16GB RAM, 512GB SSD, Win 11 Home',
      image: 'https://tech.co.za/wp-content/uploads/2023/01/IdeaPad-Flex-5-14IAU7a-768x576.png',
      alt: 'tablet',
      rating: 10,
      price: 59.99,
      category: 'laptop'
    }

  ]

  const filteredProducts = filterItem
    ? productsData.filterItem((product) => product.category === filterItem)
    : productsData

  return (
    <>
      <div className="filter_buttons">
        <button onClick={() => FilterChange(null)}>All</button>
        <button onClick={() => FilterChange('phones')}>Phones</button>
        <button onClick={() => FilterChange('tv')}>TV</button>
        <button onClick={() => FilterChange('streaming')}>Streaming</button>
        <button onClick={() => FilterChange('laptop')}>Laptop</button>

      </div>

      <div className="products_row">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            alt={product.alt}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </>
  )
}

export default Products
