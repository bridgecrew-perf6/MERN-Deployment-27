import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams, useHistory } from 'react-router-dom'

const Shoes = (props) => {
  const{urlKey} = useParams()
  const[shoe, setShoe] = useState()
  const [id, setId] = useState("")
  const history = useHistory()

  const handleSubmit = (e) =>{
      e.preventDefault()
      history.push(`/search/${id}`)
    }

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
            <h1 className='title'><Link to='/' className='nolink'>Giftio</Link></h1>
            <div className="category">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search.." value={id} className='searchbar'onChange={e=>setId(e.target.value)}/>
                </form>
                <p><Link to='/shoes' className='nolink'>Shoes</Link></p>
                <p><Link to='/electronics' className='nolink'>Electronics</Link></p>
                <div className='right-menu'>
                    <button className='menu-button'>More Categories</button>
                    <div className='dropdown-menu'>
                        <Link to='/search/apparel' className='nolink'>Apparel</Link>
                        <Link to='/search/trading cards' className='nolink'>Trading Cards</Link>
                        <Link to='/search/collectibles' className='nolink'>Collectibles</Link>
                        <Link to='/search/accessories' className='nolink'>Accessories</Link>
                        <Link to='/search/NFTs' className='nolink'>NFTs</Link>
                    </div>
                </div>
            </div>
            <div className="rightbar">
                <p>Reviews</p>
                <p>About</p>
            </div>
        </header>
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