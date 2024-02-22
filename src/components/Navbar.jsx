import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function Header() {
  return (
    <Navbar  className='w-screen'>
      <Navbar.Brand href="#">
        <img src="./assets/icono_WW.png" className="mr-3 h-6 sm:h-12" alt="Wander Well Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">WanderWell</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Juan García</span>
            <span className="block truncate text-sm font-medium">jgarcia@wanderwell.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Perfil</Dropdown.Item>
          <Dropdown.Item>Reservas</Dropdown.Item>
          <Dropdown.Item>Configuración</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header