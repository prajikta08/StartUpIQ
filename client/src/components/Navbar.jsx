import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const { pathname } = useLocation() // know which page we're on

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-icon">🚀</span>
        <Link to="/" className="brand-name">StartupIQ</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className={pathname === '/' ? 'active' : ''}>
            Validate
          </Link>
        </li>
        <li>
          <Link to="/history" className={pathname === '/history' ? 'active' : ''}>
            History
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar