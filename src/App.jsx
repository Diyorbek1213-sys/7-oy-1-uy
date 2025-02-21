import { useSelector, useDispatch } from "react-redux"
import { closeModal, openModal } from "./redux/modalSlice"
import './App.css'
import { useEffect, useState } from "react"
import { addProduct, removeProduct, editProducts } from "./redux/productsSlice"
import { addToCart, removeFromCart, resetCart } from "./redux/cartSlice"
import { login, logout } from "./redux/authSlice"

function App() {
  const [block, setBlock] = useState(false)
  const dispatch = useDispatch()
  const modal = useSelector(state => state.modal.value)
  const products = useSelector(state => state.products.value)
  const cart = useSelector(state => state.cart.value)
  const auth = useSelector(state => state.auth.value)
  const totalPrice = cart.reduce((price, item) => price + item.price, 0);
  console.log(cart)

  console.log(products)

  useEffect(() => {
    if (modal === true) {
      document.body.style.backgroundColor = 'gray'
    } else {
      if (modal === false) {
        document.body.style.backgroundColor = 'white'
      }
    }
  }, [modal])

  function handleTrue() {
    dispatch(openModal(true))
    setBlock(true)
  }

  function handleFalse() {
    dispatch(closeModal(false))
    setBlock(false)
  }

  function handleAdder() {
    let product = {
      id: Date.now(),
      name: 'nimadir',
      price: '$100',
      quantity: 10
    }
    dispatch(addProduct(product))
    console.log(products)
  }

  useEffect(() => {
    console.log("Updated products:", products);
  }, [products]);

  function handleDelete(id) {
    dispatch(removeProduct(id))
  }

  function handleEdit(id) {
    dispatch(editProducts(id))
  }

  function handleAddToCart() {
    let request = prompt('Mahsulot nomini kiriting')
    let price_product = +prompt('Narxini kiriting')
    let count = +prompt('Nechtaligini kiriting')

    // if (typeof price_product === 'string' || typeof count === 'string') {
    //   return alert('Narx va Nechtaligini raqamda yozing')
    // }

    dispatch(addToCart({ id: Date.now(), name: request, price: price_product, quantity: count }))
  }

  function handleDeleteCart(index) {
    dispatch(removeFromCart(index))
  }

  function handleReset() {
    dispatch(resetCart())
  }

  function handleLogin() {
    dispatch(login('login'))
  }

  function handleLogout() {
    dispatch(logout('logout'))
  }

  return (
    <div>
      <div className="main_div">
        <button disabled={block} style={{ backgroundColor: block === true ? 'rgb(72, 72, 72)' : '' }} className="button_open" onClick={handleTrue}>Open Modal</button>
        {
          modal === true && <div className="modal">
            <button className="button_close" onClick={handleFalse}>Close Modal</button>
          </div>
        }
      </div>

      {/* 2nd of homework */}

      <button onClick={handleAdder}>Add</button>

      <div>
        {
          products.length > 0 && products.map((item) => {
            return (
              <div className="products" key={item.id}>
                <span><b>Id:</b> {item.id},</span>
                <span><b>Name:</b> {item.name},</span>
                <span><b>Price:</b> {item.price},</span>
                <span><b>Quantity:</b> {item.quantity}</span>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </div>
            )
          })
        }
      </div>

      {/* 3 */}

      <div className="cart">
        <button onClick={handleAddToCart}>Add To Cart</button>

        <div className="mt">
          {
            cart.length > 0 && <span><b>Total Price</b>: {totalPrice}</span>
          }
          {
            cart.length > 0 && cart.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <p><b>Product Name:</b> {item.name}</p>
                  <p><b>Product Price:</b> {item.price}</p>
                  <p><b>Product Count:</b> {item.quantity}</p>
                  <button onClick={() => handleDeleteCart(index)}>Delete</button>
                  <button onClick={handleReset}>Reset</button>
                </div>
              )
            })
          }
        </div>
      </div>

      {/* 5 */}

      <div className="btns">
        {/* <button onClick={handleLogin} className="same_btn">Login</button>
        <button onClick={handleLogout} className="same_btn">Logout</button> */}

        {
          auth === 'login' ? <button onClick={handleLogout} className="same_btn">Logout</button> : <button onClick={handleLogin} className="same_btn">Login</button>
        }
        {
          <span>value: {auth}</span>
        }
      </div>

    </div>
  )
}

export default App