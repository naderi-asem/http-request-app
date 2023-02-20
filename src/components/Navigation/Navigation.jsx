import './nav.css';
import { NavLink } from "react-router-dom";

const items = [
    { name: "Home", to: "/", exact: true },
    { name: "New Comment", to: "/New-Comment", },
];

const Navigation = () => {
    return (
        <nav>
            {items.map(item => (
                <li>
                    <NavLink
                        to={item.to}
                        exact={item.exact || false}
                        activeClassName="activeLink"
                    > {item.name} </NavLink>
                </li>
            ))}
        </nav>
    );
}

export default Navigation;