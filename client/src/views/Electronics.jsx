import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'

const Electronics = () => {

    const [elec, setElec] = useState([])
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push(`/search/${id}`)
    }


    useEffect(() => {
        axios.get(`https://stockx.com/api/browse?_search=Electronics?_search=beats?_search=Most%20Popular?&page=1`,{
            headers:{
                "Access-Control-Allow-Orgin":"*"
            }})
            .then(response => {
                setElec(response.data.Products);
            })
                .catch(err => console.log(err))
    },[])

  return (
    <div>
        <header>
            <h1 className='title'><Link to='/' className='nolink'>Gifts-R-Us</Link></h1>
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
        <div className='shoecolumns'>
            {elec? elec.map((elec, index)=>{
                return(
                    <Link to={`/shoe/${elec.urlKey}`} className='hrefshoe'>
                    <div>
                        <img src={elec['media'].thumbUrl} alt="okay" />
                        <p key={index}>{elec.name}</p>
                        <p>${elec.retailPrice}</p>
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

export default Electronics