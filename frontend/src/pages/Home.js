import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return(
		
        <div className='align1'>
        <h1><b>SHOP OWNER</b></h1>
		<div>
			<Link to='/about'><button className='a'>ABOUT</button></Link>
			<Link to='/allshops'><button className='a'>ALL SHOPS</button></Link>
			<Link to='/updateshop'><button className='a'>UPDATE SHOPS</button></Link>
			<Link to='/deleteshop'><button className='a'>DELETE SHOPS</button></Link>
		</div>
        </div>
    
    )
}
export default Home;