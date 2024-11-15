import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from '../components/NavbarElements';

const Bar = () => {
return (
	<>
	<h1>SHOPPING MALL MANAGEMENT SYSTEM</h1>
	<Nav>

		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/allshops' activeStyle>
			All Shopowners
		</NavLink>
		<NavLink to='/updateshop' activeStyle>
			Update Shopowners
		</NavLink>
		<NavLink to='/deleteshop' activeStyle>
			Delete Shopowners
		</NavLink>
		
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/' activeStyle>
			Home
		</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Bar;
