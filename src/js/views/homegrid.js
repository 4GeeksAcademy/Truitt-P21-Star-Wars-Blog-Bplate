import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

import Card from "../component/card.js"

const HomeGrid = () => {
    const { store } = useContext(Context)
    return (
        <div className="home-grid">

            {/* Character Cards & Row */}
            <div className='character-row'>
                <h1 style={{ color: 'red' }}>Characters</h1>
                <div className="d-flex flex-row scrollable-row">
                    {
                        store.characters.map((character, index) =>
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

};

export default HomeGrid;
