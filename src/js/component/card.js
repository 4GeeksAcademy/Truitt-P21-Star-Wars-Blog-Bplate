import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const { store, actions } = useContext(Context);

    let field

    props.type === "character" ? (
        field =
        <div style={{ marginRight: '20px' }}>
            <div className="card" style={{ width: '18rem' }}>
                <img
                    className="card-img-top"
                    alt="Card image cap"
                    src={`https://starwars-visualguide.com/assets/img/characters/${props.index + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}
                />

                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>Gender: {props.character.gender}</li>
                            <li>Hair Color: {props.character.hair_color}</li>
                            <li>Eye Color: {props.character.eye_color}</li>

                        </ul>
                    </p>

                    <Link className="btn btn-outline-primary" to={'/person_details/' + props.index}>Learn more!</Link>
                    <button type="button" className="btn btn-outline-warning" onClick={() => { actions.addFavorite(props.character.name); }} style={{ float: 'right' }}>
                        {store.favorites.includes(props.character.name) ? <i className="fa-solid fa-heart" /> : <i className="fa-regular fa-heart" />}
                    </button>

                </div>
            </div>
        </div>
    ) : null

    props.type === "planet" ? (
        field =
        <div style={{ marginRight: '20px' }}>
            <div className="card" style={{ width: '18rem' }}>

                <img
                    className="card-img-top"
                    alt="Card image cap"
                    src={`https://starwars-visualguide.com/assets/img/planets/${props.index + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}
                />

                <div className="card-body">
                    <h5 className="card-title">{props.planet.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>Population: {props.planet.population}</li>
                            <li>Terrain: {props.planet.terrain}</li>
                            <li>Diameter(km): {props.planet.diameter}</li>

                        </ul>
                    </p>

                    <Link className="btn btn-outline-primary" to={'/planet_details/' + props.index}>Learn more!</Link>
                    <button type="button" className="btn btn-outline-warning" onClick={() => { actions.addFavorite(props.planet.name); }} style={{ float: 'right' }}>
                        {store.favorites.includes(props.planet.name) ? <i className="fa-solid fa-heart" /> : <i className="fa-regular fa-heart" />}
                    </button>

                </div>
            </div>
        </div>
    ) : null

    props.type === "vehicle" ? (
        field =
        <div style={{ marginRight: '20px' }}>
            <div className="card" style={{ width: '18rem' }}>

                <img
                    className="card-img-top"
                    alt="Card image cap"
                    src={`https://starwars-visualguide.com/assets/img/vehicles/${props.index + 1}.jpg`}
                    onError={(e) => {
                        e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                    }}
                />

                <div className="card-body">
                    <h5 className="card-title">{props.vehicle.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>Cost in Credits: {props.vehicle.cost_in_credits}</li>
                            <li>Length(m): {props.vehicle.length}</li>
                            <li>Passenger Capacity: {props.vehicle.passengers}</li>

                        </ul>
                    </p>

                    <Link className="btn btn-outline-primary" to={'/vehicle_details/' + props.index}>Learn more!</Link>
                    <button type="button" className="btn btn-outline-warning" onClick={() => { actions.addFavorite(props.vehicle.name); }} style={{ float: 'right' }}>
                        {store.favorites.includes(props.vehicle.name) ? <i className="fa-solid fa-heart" /> : <i className="fa-regular fa-heart" />}
                    </button>

                </div>
            </div>
        </div>
    ) : null

    return (
        <div>
            {field}
        </div>

    )
}

export default Card;