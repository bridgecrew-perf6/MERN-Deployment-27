import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'

const Shoes = (props) => {
  const{urlKey} = useParams()
  const[shoe, setShoe] = useState()

  useEffect(()=>{
    axios.get(`https://stockx.com/api/products/${urlKey}/?includes=market`,{
        headers:{
          "Access-Control-Allow-Orgin":"*"
        }})
        .then(res=>{
          console.log(res.data.Product)
          setShoe(res.data.Product)
        })
        .catch(err=>console.log(err))
},[])

  return (
    <div>
      <header>
            <h1 className='title'>Gifts-R-Us</h1>
            <div className="category">
                <p><Link to='/shoes'>Shoes</Link></p>
                <p>Collectibles</p>
                <p>Electronics</p>
                <p>More Categories</p>
            </div>
            <div className="rightbar">
                <p>Reviews</p>
                <p>About</p>
            </div>
      </header>
      <Link to={'/'} >Home</Link>
      <div className='shoebody'>
        {shoe?
        <div>
          <div className='totalshoe'>
            <img src={shoe['media'].thumbUrl} alt="okay" />
            <h2>{shoe.title}</h2>
            <p>Retail Price: ${shoe.retailPrice}</p>
          </div>
          <div>
            <h3>Description:</h3>
            <p>{shoe.description}</p>
          </div>
        </div>:
          console.log('no')
        }
      </div>
    </div>
  )
}

export default Shoes