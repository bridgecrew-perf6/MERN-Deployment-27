import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams, useHistory } from 'react-router-dom'

const Search = (props) => {
    const{id} = useParams()
    const[items, setItem] = useState()
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push(`/search/${id}`)
    }


    useEffect(()=>{
        axios.get(`https://stockx.com/api/browse?_search=${id}?name=Featured?market:[salesThisPeriod:5000]&page=1`,{
            headers:{
                "Access-Control-Allow-Orgin":"*"
            }})
            .then(res=>{
              console.log(res.data.Products)
              setItem(res.data.Products)
            })
            .catch(err=>console.log(err))
    },[])

  return (
    <div>
        <header>
            <h1 className='title'><Link to='/' className='nolink'>Gifts-R-Us</Link></h1>
            <div className="category">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search.."/>
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
        <div className='shoecolumns'>
            {items? items.map((item, index)=>{
                return(
                    <Link to={`/shoe/${item.urlKey}`} className='hrefshoe'>
                    <div>
                        <img src={item['media'].thumbUrl} alt="okay" />
                        <p key={index}>{item.name}</p>
                        <p>${item.retailPrice}</p>
                    </div>
                    </Link>
                )
            }):
            console.log('yeah')
            }
        </div>
    </div>
    </div>
  )
}

export default Search