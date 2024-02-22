import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

function Header() {
  return (
    <Navbar  className='w-screen bg-slate-900'>
      <Navbar.Brand href="#">
        <img src="./assets/icono_WW.png" className="mr-3 h-6 sm:h-12" alt="Wander Well Logo" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-slate-50">WanderWell</span>
      </Navbar.Brand>
      <div className="flex md:order-2 bg-slate-900">
      
        <Dropdown 
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header className='bg-slate-900'>
            <span className="block text-sm">Juan García</span>
            <span className="block truncate text-sm font-medium">jgarcia@wanderwell.com</span>
          </Dropdown.Header>
          <div >
          <Dropdown.Item>Perfil</Dropdown.Item>
          <Dropdown.Item>Reservas</Dropdown.Item>
          <Dropdown.Item>Configuración</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
          </div>
        </Dropdown>

        <Navbar.Toggle  />
      </div>
      <Navbar.Collapse >
        <Navbar.Link href="/home" active>
          Home
        </Navbar.Link>
        <Navbar.Link to="/home">About</Navbar.Link>
        <Navbar.Link href="/contact">Contacto</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header

