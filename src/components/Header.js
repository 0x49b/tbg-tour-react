import { render } from '@testing-library/react'
import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const Header = () => {
  render(
    <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    <NavbarBrand href="/">
      Reactstrap
    </NavbarBrand>
  </Navbar>
  )
}
export default Header
