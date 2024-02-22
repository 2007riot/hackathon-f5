import React from 'react'
import { Button, Modal, Avatar } from 'flowbite-react';
import { useState } from 'react';

function ModalView() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Open Detail Card</Button>
            <Modal className="text-gray-100 dark:text-gray-200" show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Machu Picchu</Modal.Header>
                <Modal.Body className="flex flex-row items-center space-x-2">
                    <div className="w-4/12 h-auto">
                        <Avatar img="src/assets/1.jpg" statusPosition="bottom-left" size="xl" />
                    </div>
                    <div className="w-8/12">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-200">
                            Machu Picchu es una antigua ciudad inca ubicada en lo alto de los Andes peruanos. Es famosa por su arquitectura bien conservada y su impresionante ubicación escénica.
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* TODO : take the user to contact page */}
                    <Button onClick={() => setOpenModal(false)} color="purple">Mas info</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalView