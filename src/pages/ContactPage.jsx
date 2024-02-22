import React from 'react'
import Header from '../components/Header'
import AppFooter from '../components/Footer'
import ContactForm from '../components/ContactForm';

function ContactPage(title) {
    const backgroundImage =
        'url("https://static.vecteezy.com/system/resources/previews/013/630/282/non_2x/interesting-gradient-design-purple-black-free-photo.jpg")';
    return (
        <div
            className="flex flex-col justify-between"
            style={{ backgroundImage, backgroundSize: "cover", minHeight: "100vh" }}>
            <Header />
            <ContactForm />
            <AppFooter />
        </div>
    )
}

export default ContactPage
