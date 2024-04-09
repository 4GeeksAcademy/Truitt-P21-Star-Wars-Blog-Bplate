import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import Card from "../component/card.js"

// const characters = [
//     {
//         id: 1 - 1,
//         meta1: "Luke Skywalker",
//         meta2: "Gender: Male",
//         meta3: "Hair Color: Blonde",
//         meta4: "Eye Color: Blue",
//         imageSrc: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Luke-Skywalker.Star-Wars-Series.webp",
//     },

//     {
//         id: 1 - 2,
//         meta1: "Darth Vader",
//         meta2: "Gender: Male",
//         meta3: "Hair Color: N/A",
//         meta4: "Eye Color: Unknown",
//         imageSrc: "https://ew.com/thmb/DR9B7S2D_xzQSnXZKvy7E1-9BKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/star-wars-episode-v-the-empire-strikes-back-darth-vader-205c0af116534c39844e3b87544ed4b9.jpg",
//     },

//     {
//         id: 1 - 3,
//         meta1: "Leia Organa",
//         meta2: "Gender: Female",
//         meta3: "Hair Color: Brown",
//         meta4: "Eye Color: Brown",
//         imageSrc: "https://intheirownleaguehome.files.wordpress.com/2019/10/carrie_fisher_princess_leia11-e1571513710158.jpg?w=900&h=506&crop=1",
//     },

//     {
//         id: 1 - 4,
//         meta1: "C-3PO",
//         meta2: "Gender: N/A",
//         meta3: "Hair Color: None",
//         meta4: "Eye Color: Gold",
//         imageSrc: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=242%2C0%2C716%2C536",
//     },

//     {
//         id: 1 - 5,
//         meta1: "R2-D2",
//         meta2: "Gender: N/A",
//         meta3: "Hair Color: None",
//         meta4: "Eye Color: None",
//         imageSrc: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=364%2C0%2C716%2C536",
//     },

// ]

// const planets = [
//     {
//         id: 2 - 1,
//         meta1: "Tatooine",
//         meta2: "Population: 200,000",
//         meta3: "Terrain: Desert",
//         meta4: "Diameter: 10,465",
//         imageSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg",
//     },

//     {
//         id: 2 - 2,
//         meta1: "Yavin IV",
//         meta2: "Population: 1,000",
//         meta3: "Terrain: Jungle, Rainforests",
//         meta4: "Diameter: 10,200km",
//         imageSrc: "https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20181015023938",
//     },

//     {
//         id: 2 - 3,
//         meta1: "Alderaan",
//         meta2: "Population: 2,000,000,000",
//         meta3: "Terrain: Grasslands, Mountains",
//         meta4: "Diameter: 12,500km",
//         imageSrc: "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
//     },

//     {
//         id: 2 - 4,
//         meta1: "Coruscant",
//         meta2: "Population: 1,000,000,000,000",
//         meta3: "Terrain: Cityscape, Mountains",
//         meta4: "Diameter: 12,240km",
//         imageSrc: "https://lumiere-a.akamaihd.net/v1/images/image_51705c58.jpeg",
//     },

//     {
//         id: 2 - 5,
//         meta1: "Kamino",
//         meta2: "Population: 1,000,000,000",
//         meta3: "Terrain: Ocean",
//         meta4: "Diameter: 19,720km",
//         imageSrc: "https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541",
//     },

// ]

// const vehicles = [
//     {
//         id: 3 - 1,
//         meta1: "AT-AT",
//         meta2: "Cost: Unknown",
//         meta3: "Speed: 60km/hr",
//         meta4: "Length: 20m",
//         meta5: "Passengers: 40",
//         imageSrc: "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716",
//     },

//     {
//         id: 3 - 2,
//         meta1: "T-16 Skyhopper",
//         meta2: "Cost: 14,500 credits",
//         meta3: "Speed: 1,200km/hr",
//         meta4: "Length: 10.4m",
//         meta5: "Passengers: 1",
//         imageSrc: "https://static.wikia.nocookie.net/starwars/images/4/4d/T16skyhopper_negvv.png/revision/latest?cb=20170411234939",
//     },

//     {
//         id: 3 - 3,
//         meta1: "Sail Barge",
//         meta2: "Cost: 285,000 credits",
//         meta3: "Speed: 100km/hr",
//         meta4: "Length: 30m",
//         meta5: "Passengers: 500",
//         imageSrc: "https://i.pinimg.com/736x/14/65/dc/1465dcc8bbd2677eef9b9cb8dc7bf87f.jpg",
//     },

//     {
//         id: 3 - 4,
//         meta1: "TIE Bomber",
//         meta2: "Cost: Unknown",
//         meta3: "Speed: 850km/hr",
//         meta4: "Length: 7.8m",
//         meta5: "Passengers: 0",
//         imageSrc: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2011/10/03/94587/39452/tie_bomber_from_star_wars_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_277752_o.jpg",
//     },

//     {
//         id: 3 - 5,
//         meta1: "TIE/LN Starfighter",
//         meta2: "Cost: Unknown",
//         meta3: "Speed: 1,200km/hr",
//         meta4: "Length: 6.4m",
//         meta5: "Passengers: 0",
//         imageSrc: "https://cdn.rebrickable.com/media/thumbs/mocs/moc-110313.jpg/1000x800.jpg",
//     },

// ]


const HomeGrid = () => {
    const { store } = useContext(Context)
    return (
        <div className="home-grid">

            {/* Character Cards & Row */}
            <div className='character-row'>
                <h1 style={{ color: 'red' }}>Characters</h1>
                <div className="d-flex flex-row scrollable-row">
                    {
                        store.people.map((character, index) =>
                            <Card
                                key={index} character={character} index={index} type="character"
                            />
                        )
                    }
                </div>
            </div>

            {/* Planet Cards & Row */}
            <div className='planet-row'>
                <h1 style={{ color: 'red' }}>Planets</h1>
                <div className="d-flex flex-row scrollable-row">
                    {

                        store.planets.map((planet, index) =>
                            <Card
                                key={index} planet={planet} index={index} type="planet"
                            />
                        )
                    }

                </div>
            </div>

            {/* Vehicle Cards & Row */}
            <div className='vehicle-row'>
                <h1 style={{ color: 'red' }}>Vehicles</h1>
                <div className="d-flex flex-row scrollable-row">
                    {

                        store.vehicles.map((vehicle, index) =>
                            <Card
                                key={index} vehicle={vehicle} index={index} type="vehicle"
                            />
                        )
                    }

                </div>
            </div>

        </div> //HomeGrid closing div
    )

    Card.prototype = {
        name: PropTypes.string
    };

};

export default HomeGrid;
