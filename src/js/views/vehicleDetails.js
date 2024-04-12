import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const VehicleDetails = () => {

  const { store, actions } = useContext(Context)
  let { id } = useParams();
  const vehicle = store.vehicles.find((vehicle, index) => index === parseInt(id))

  return (
    <div>
      Character Details
      <div className="card mb-3" style={{ maxWidth: "600px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(id) + 1}.jpg`}
              onError={(e) => {
                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
              }} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{vehicle.name}</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut!</p>
            </div>
          </div>
        </div>
      </div>

      <ul class="list-group">
        <li class="list-group-item" style={{ color: 'red' }}>Model: {vehicle.model}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Manufacturer: {vehicle.manufacturer}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Cost in Credits: {vehicle.cost_in_credits}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Length(m): {vehicle.length}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Crew: {vehicle.crew}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Passengers: {vehicle.passengers}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Cargo Capacity(lbs): {vehicle.cargo_capacity}</li>
      </ul>

    </div>
  );
};

export default VehicleDetails;