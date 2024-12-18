import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './Header.css'
import { eventNames } from 'process'

// const Header = ({ siteTitle }) => (
//   <div className="Header">
//     <div className="HeaderGroup">

//        {/* <Link to="/page-2/"> <img src={logo}/> </Link>
//         */}
//        <Link to="/page-2/"> <img src={require('../images/logo-designcode.svg')}/> </Link>
//        <Link to="/courses"> Courses </Link> 
//        <Link to="/downloads"> Downloads </Link> 
//        <Link to="/workshops"> Workshops </Link> 
//        <Link to="/buy"> <button> Buy </button> </Link> 
//        {/* <Link to="/shit1"> Random shit </Link> 
//        <Link to="/shit2"> Random shit </Link>  */}
//     </div>

//   </div>
// )

class Header extends React.Component {
  constructor(props){
    super(props)

    this.state ={
      hasScrolled: false 
    }
  }
    
  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll)
    }
    
  

  handleScroll = (event)=> {
    const scrollTop = window.scrollY

    if (scrollTop>50) {
      this.setState( {hasScrolled: true} )
    } else {this.setState( {hasScrolled: false})}
  }
  render() {
    return(
      <div className={this.state.hasScrolled?"Header HeaderScrolled":"Header"}>
          <div className="HeaderGroup">
      
            {/* <Link to="/page-2/"> <img src={logo}/> </Link>
              */}
            <Link to="/page-2/"> <img src={require('../images/logo-designcode.svg')}/> </Link>
            <Link to="/courses"> Courses </Link> 
            <Link to="/downloads"> Downloads </Link> 
            <Link to="/workshops"> Workshops </Link> 
            <Link to="/buy"> <button> Buy </button> </Link> 
            {/* <Link to="/shit1"> Random shit </Link> 
            <Link to="/shit2"> Random shit </Link>  */}
          </div>
  
      </div>
    )
  }
}
export default Header
