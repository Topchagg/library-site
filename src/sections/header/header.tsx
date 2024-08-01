import { Link } from 'react-router-dom'

import './ui/header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className="logo-wrapper">
                <Link to={'/'}> <img className='logo' src="/logo1.png" alt="" /> </Link>
            </div>
            <div className="nav-items-wrapper">
                <div className="nav-item">
                    <Link to={'/examples'}>Examples</Link>
                </div>
                <div className="nav-item">
                    <Link to={'/documentation'}>Documentation</Link>
                </div>
            </div>
        </header>
    )
}

export default Header