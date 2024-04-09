import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react";

const Card = (props) => {
    // const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    let field

    props.type === "character" ? (
        field =
        <div style={{ marginRight: '20px' }}>
            <div className="card" style={{ width: '18rem' }}>
                {/* <img src={props.imageSrc} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.character.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>{props.character.gender}</li>
                            <li>{props.character.hair_color}</li>
                            <li>{props.character.eye_color}</li>

                        </ul>
                    </p>
                    <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/person_details/${props.index}`)}>Learn more!</button>
                    <button type="button" className="btn btn-outline-warning" style={{ float: 'right' }}> <i className="fa-regular fa-heart" /> </button>

                </div>
            </div>
        </div>
    ) : null

    props.type === "planet" ? (
        field =
        <div style={{ marginRight: '20px' }}>
            <div className="card" style={{ width: '18rem' }}>
                {/* <img src={props.imageSrc} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.planet.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>{props.planet.population}</li>
                            <li>{props.planet.terrain}</li>
                            <li>{props.planet.diameter}</li>

                        </ul>
                    </p>
                    <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/planet_details/${props.index}`)}>Learn more!</button>
                    <button type="button" className="btn btn-outline-warning" style={{ float: 'right' }}> <i className="fa-regular fa-heart" /> </button>

                </div>
            </div>
        </div>
    ) : null

    props.type === "vehicle" ? (
        field =
        <div style={{ marginRight: '20px' }}>
            <div className="card" style={{ width: '18rem' }}>
                {/* <img src={props.imageSrc} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{props.vehicle.name}</h5>
                    <p className="card-text">
                        <ul>
                            <li>{props.vehicle.cost_in_credits}</li>
                            <li>{props.vehicle.length}</li>
                            <li>{props.vehicle.passengers}</li>

                        </ul>
                    </p>
                    <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/vehicle_details/${props.index}`)}>Learn more!</button>
                    <button type="button" className="btn btn-outline-warning" style={{ float: 'right' }}> <i className="fa-regular fa-heart" /> </button>

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