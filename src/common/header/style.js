import styled from 'styled-components';
import logoPic from '../../static/images/nav-logo.png'

export const HeaderWrapper = styled.div`
	height: 58px;
	border: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
	href: '/'
})`
	position: absolute;
	top: 0;
	left: 0;
	width: 100px;
	height:56px;
	background: url(${logoPic});
	background-size: cover;
`

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	margin 0 auto;
	background:green;
`