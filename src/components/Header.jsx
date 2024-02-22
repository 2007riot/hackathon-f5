import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar className="w-screen bg-slate-900">
      <div className="flex flex-row">
        <Navbar.Brand href="#">
          <img
            src="src/assets/iconoww.jpg"
            className="mr-3 h-14"
            alt="Wander Well Logo"
          />
        </Navbar.Brand>
      </div>
      <div className="flex flex-row gap-28 items-center">
        <div className="flex md:order-2 bg-slate-900">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header className="bg-slate-900">
              <span className="block text-sm">Juan García</span>
              <span className="block truncate text-sm font-medium">
                jgarcia@wanderwell.com
              </span>
            </Dropdown.Header>
            <div>
              <Dropdown.Item>Perfil</Dropdown.Item>
              <Dropdown.Item>Reservas</Dropdown.Item>
              <Dropdown.Item>Configuración</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </div>
          </Dropdown>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <div className="flex flex-row gap-12">
            <Navbar.Link href="/home" active className="text-base">
              Home
            </Navbar.Link>
            <Navbar.Link to="/home" className="text-base">
              About
            </Navbar.Link>
            <Navbar.Link href="/contact" className="text-base">
              Contacto
            </Navbar.Link>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
