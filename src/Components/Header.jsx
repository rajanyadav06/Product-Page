import { useState, useEffect, useRef } from 'react'
import './Header.css'

const products = [
    {
        id: 1,
        title: 'Banking as a Service',
        description: 'Digital banking services, designed for scale',
        tag: 'BAAS',
        icon: '🏦'
    },
    {
        id: 2,
        title: 'Payments as a Service',
        description: 'Create the perfect payment experience',
        tag: 'PAAS',
        icon: '💳'
    },
    {
        id: 3,
        title: 'Banking as a Platform',
        description: 'Seamlessly integrate digital financial services',
        tag: 'BAAP',
        icon: '🔄'
    },
    {
        id: 4,
        title: 'Cronica',
        description: 'Securely generate, authenticate, and retrieve programmable documents.',
        tag: 'CRONICA',
        icon: '📄'
    }
]

function Header() {
    const [activeNav, setActiveNav] = useState('home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleNavClick = (nav) => {
        setActiveNav(nav)
        setIsMenuOpen(false)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = (e) => {
        e.stopPropagation()
        setShowDropdown(!showDropdown)
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-content">
                    <a href="#" className="logo">Team 4</a>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <span
                            className={`nav-item ${activeNav === 'home' ? 'active' : ''}`}
                            onClick={() => handleNavClick('home')}
                        >
                            Home
                        </span>
                        <span
                            className={`nav-item ${activeNav === 'products' ? 'active' : ''}`}
                            onClick={toggleDropdown}
                            ref={dropdownRef}
                        >
                            Products
                            <div className={`products-dropdown ${showDropdown ? 'show' : ''}`}>
                                {products.map(product => (
                                    <div
                                        key={product.id}
                                        className="dropdown-item"
                                        onClick={() => handleNavClick('products')}
                                    >
                                        <div className="dropdown-icon">{product.icon}</div>
                                        <div className="dropdown-content">
                                            <div className="dropdown-title">{product.title}</div>
                                            <div className="dropdown-description">{product.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </span>
                        <span
                            className={`nav-item ${activeNav === 'developers' ? 'active' : ''}`}
                            onClick={() => handleNavClick('developers')}
                        >
                            Developers
                        </span>
                        <span
                            className={`nav-item ${activeNav === 'contact' ? 'active' : ''}`}
                            onClick={() => handleNavClick('contact')}
                        >
                            Contact
                        </span>

                        <button className="get-started">Get Started</button>
                    </div>
                </div>
            </nav>

            <div className="main-content">
                <div className="products-container">
                    <div className="header">
                        <h1>Welcome to Finto</h1>
                        <p>Click on Products in the navigation to see our offerings</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;