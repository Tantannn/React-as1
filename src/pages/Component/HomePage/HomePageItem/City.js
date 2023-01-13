// import img from './images/city_2.webp'

function City(prop) { 
    console.log(prop.image)
    // var a = require(prop.image)
    return <>
        {/* <img src={img} alt='asd'/> */}
        {/* <img src={require(prop.image)} alt='asd' />  */}
        
        {/* <img src={prop.image} alt=''/> */}



        <p>{prop.name}</p>
        <p>{prop.subText}</p>
    </>
}
export default City