import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Mainshoes = () => {
    const history = useHistory()
    const [id, setId] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push(`/search/${id}`)
    }

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
        <div>
            <div className='shoecatecol'>
                <Link to='/allshoes/nike' className='shoecate'>
                    <img src="https://www.highsnobiety.com/static-assets/thumbor/RLahXWkVEh9UcaOZx8VafLikizM=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg" alt="image" />
                    <h2>Nike</h2>
                </Link>
                <Link to='/allshoes/adidas' className='shoecate'>
                    <img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" alt="" />
                    <h2>Addidas</h2>
                </Link>
                <Link to='/allshoes/yeezy' className='shoecate'>
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Yeezy-Symbol.png" alt="" />
                    <h2>Yeezy</h2>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Mainshoes