
import "./NavBar.css";


function NavBar(prop) {
    return (
        <div className="asd">
            <li className="nav-bar">
                <i className={prop.icon} />  {prop.type}
            </li>
        </div>
    )
}

export default NavBar