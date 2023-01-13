
import NavBarItem from "../Component/NavBar/NavBarItem.js"
import Header from "../Component/Header/Header.js";
import HomePage  from "../Component/HomePage/HomePage.js";
import './Home.css'
const Home = () => {
	return (
		<div className="home-page">	
			<NavBarItem />
			<Header />
			<HomePage/>
		</div>
	);
};

export default Home;
