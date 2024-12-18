import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
        <ul>
            <li>
            <Link to="/">About Me</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to ='/resume'>Resume</Link>
            </li>
            <li>
            <Link to='/contact'>Contact Me</Link>
            </li>
        </ul>
        </nav>
    );
};

export default Nav;