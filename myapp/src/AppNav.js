import React, { Component } from 'react'
import {Nav,NavItem,Navbar,NavbarBrand,NavLink} from 'reactstrap'
import {Link} from 'react-router-dom'
export default class AppNav extends Component {
    render() {
        return (
            <div>

<Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Expense Truker Application</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/catagory">Category</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/expenses">Expenses</NavLink>
            </NavItem>
          </Nav>
         
       
      </Navbar>

                
            </div>
        )
    }
}
