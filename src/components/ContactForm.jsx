import React from 'react'
'use client'
import { Label, TextInput, Textarea, Button } from 'flowbite-react'
import { HiMail } from 'react-icons/hi';

function ContactForm() {
    return (
        <div className="flex max-w-md flex-col gap-4">
            <div className="text-white text-2xl">¿Quieres reservar un viaje? Completa este formulario y nos pondremos en contacto contigo.</div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="small" value="Nombre" />
                </div>
                <TextInput id="small" type="text" sizing="sm" placeholder="nombre apellido" />
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="email4" value="Correo electronico" />
                </div>
                <TextInput id="email4" type="email" icon={HiMail} rightIcon={HiMail} placeholder="name@flowbite.com" required />
            </div>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea id="comment" placeholder="Commentario" required rows={4} />
            </div>
            <Button color="purple">Enviar</Button>
        </div>
    );
}

export default ContactForm