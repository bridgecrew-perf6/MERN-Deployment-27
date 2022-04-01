import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'

const HomePage = (props) => {
    const [allshoes, setAllshoes] = useState([])
    const [allelecs, setAllelecs] = useState([])
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push(`/search/${id}`)
    }

    useEffect(() => {
        props.shoelist.map((shoe, index)=>{
            axios.get(`https://stockx.com/api/products/${shoe}/?includes=market`,{
                headers:{
                    "Access-Control-Allow-Orgin":"*",
                    "Access-Control-Allow": 'Authorization'
                }})
                .then(response => {
                    setAllshoes(old => [...old,response.data.Product]);
                })
                .catch(err => console.log(err))
        })
    },[props.shoelist])

    useEffect(() => {
        props.eleclist.map((elec, index)=>{
            axios.get(`https://stockx.com/api/products/${elec}/?includes=market`,{
                headers:{
                    "Access-Control-Allow-Orgin":"*",
                    "Access-Control-Allow": 'Authorization'
                }})
                .then(response => {
                    setAllelecs(old => [...old,response.data.Product]);
                })
                .catch(err => console.log(err))
        })
    },[props.eleclist])
     
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
        <div className='mainbody'>
            <img src="/shoesmain.png" alt=""  className='mainimage'/>
            <h2 className='imagetext'>Gifts-R-Us</h2>
        </div>
        <div>
            <div className='dividersone'>
                <h2 className='dividers'>Recommended Shoes</h2>
                <p><Link to='/shoes'>View More</Link></p>
            </div>
            <div className='recshoes'>
                <ul>
                    {allshoes?allshoes.map((shoe,index)=>{
                        return(
                        <Link to={`/shoe/${shoe.urlKey}`} className='hrefshoe'>
                        <li key={index}>
                            <img src={shoe['media'].thumbUrl} alt="okay" />
                            <div>
                                <h3>{shoe.title}</h3>
                                <p>${shoe.retailPrice}</p>
                            </div>
                        </li>
                        </Link>
                    )}):
                    console.log("no img")
                    }   
                </ul>
            </div>
        </div>
        <div>
            <div className='dividersone'>
                <h2 className='dividers'>Recommended Electronics</h2>
                <p>View More</p>
            </div>
            <div className='recshoes'>
                <ul>
                    {allelecs?allelecs.map((elec,index)=>{
                        return(
                        <Link to={`/shoe/${elec.urlKey}`} className='hrefshoe'>
                        <li key={index}>
                            <img src={elec['media'].thumbUrl} alt="okay" />
                            <div>
                                <h3>{elec.title}</h3>
                                <p>${elec.retailPrice}</p>
                            </div>
                        </li>
                        </Link>
                    )}):
                    console.log("no img")
                    }   
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HomePage