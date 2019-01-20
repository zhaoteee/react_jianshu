import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav } from './style.js'
export default class Header extends Component {
	render() {
		return (<HeaderWrapper>
			<Logo />
			<Nav />
		</HeaderWrapper>)
	}
}