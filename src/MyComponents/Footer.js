import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='bg-dark text-light py-3'>
            <p className='text-center'>
            Copyright &copy; <Link to='/'>MyTodosList.com</Link>
            <br/>
            <font className="alert-primary">
            Made By Ali Ashraf
            </font>
            </p>
        </footer>
    )
}
