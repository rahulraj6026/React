import React,{useState, useContext} from 'react'
import { Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem,
    NavbarText, 
    NavLink
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {UserContext} from "../Context/UserCotext"

const Header = () => {
    const context = useContext(UserContext)

    const [isOpen, setisOpen] = useState(false)//method to open collapsed toggle bar

    const toggle = () => setisOpen(!isOpen);//to toggle menu when page is shrinked
    return(
        <Navbar color="secondary"   light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    GIT FIRE APP
                </Link>
            </NavbarBrand>
            <NavbarText className="text-black">{
                context.User?.email?context.User.email:""
            }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            {
                console.log(context.User)
                
            }
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {    
                        context.User?(
                            <NavItem>
                                <NavLink onClick={() => {
                                    context.setUser(null)
                                }} className="text-black">
                                    Log Out
                                </NavLink>
                            </NavItem>
                        ):(
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to ="/signup" className="text-black">
                                        Sign Up
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signin" className="text-black">
                                        Sign In
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header