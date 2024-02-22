import React from 'react'
import { Button, Modal, Avatar } from 'flowbite-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function ModalView({image, title, description, location}) {
    const [openModal, setOpenModal] = useState(true);

    return (
        <>
            <Modal className="text-gray-100 dark:text-gray-200" show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>{title}</Modal.Header>
                <Modal.Body className="flex flex-row items-center space-x-2">
                    <div className="w-4/12 h-auto">
                        <Avatar img={image} statusPosition="bottom-left" size="xl" />
                    </div>
                    <div className="w-8/12">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-200">
                           {description}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                   <NavLink to='/contact'> <Button color="purple">Mas info</Button> </NavLink>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalView