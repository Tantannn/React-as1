import CityJson from '../data/city'
import TypeJson from '../data/type.json'
import HotelListJson from '../data/hotel_list.json'

import City from './HomePageItem/City.js'
import Type from './HomePageItem/Type.js'
import HotelList from './HomePageItem/HotelList.js'

function HomePage() {
    return (
        <>
            {CityJson.map((props, index) => (
                <City
                    name={props.name}
                    subText={props.subText}
                    image={props.image}
                    key={index}
                />
            ))}
            {/* {TypeJson.map((props,i) => (
                <Type
                    name={props.name}
                    count={props.count}
                    image={props.image}
                    key={i}
                />
            ))}
            {HotelListJson.map((props,i) => (
                <HotelList
                    name={props.name}
                    city={props.city}
                    price={props.price}
                    rate={props.rate}
                    type={props.type}
                    image={props.image_url}
                    key={i}
                />

            ))} */}
        </>
    )
}

export default HomePage