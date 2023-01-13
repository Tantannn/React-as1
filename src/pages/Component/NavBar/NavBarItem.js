import Nav from '../data/navBar.json'
import NavBar from './NavBar.js'
import './NavBarItem.css'
function NavBarItem() {
    return <>
        
        <h1 className="in-line">Booking Website</h1>
        <p className="float-right in-line">Register</p>
        <p className="float-right in-line">Login</p>

        <span className="aa">
            {
                Nav.map((prop, index) => (
                    // <p key={index}>{prop.type}</p>
                    <NavBar
                        key={index}
                        type={prop.type}
                        icon={prop.icon}
                        active={prop.active}
                    />
                ))
            }
        </span>
        
    </>
}

export default NavBarItem