import { useNavigate } from 'react-router-dom'
import './Header.css'
function Header() {
    const navigate = useNavigate()
    return <>
        <h1 className='distant'>A lifetime of discounts? It's Genius</h1>
        <p className='bas'>Get rewarded for your travels - unlock instant savings for 10% or more with a free account</p>
        <p id='search'>Sign in/ Register</p>
        <form id='search-bar'>
            <input type='text' placeholder='Where are you going?' />
            <input type="date" />
            <input type='text' placeholder='1 adult - 0 children - 1 room' />
            <input type="submit" placeholder='Search' id='search' onClick={() => navigate('/search')}/>
        </form>
    </>
}
export default Header