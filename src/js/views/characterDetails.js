import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const CharacterDetails = () => {

  const { store, actions } = useContext(Context)
  let { id } = useParams();
  const character = store.characters.find((character, index) => index === parseInt(id))

  return (
    <div>
      Character Details
      <div className="card mb-3" style={{ maxWidth: "600px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(id) + 1}.jpg`}
              onError={(e) => {
                e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
              }} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
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
        <li class="list-group-item" style={{ color: 'red' }}>Gender: {character.gender}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Height(cm): {character.height}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Mass(kg): {character.mass}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Hair Color: {character.hair_color}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Skin Color: {character.skin_color}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Eye Color: {character.eye_color}</li>
        <li class="list-group-item" style={{ color: 'red' }}>Birth Year: {character.birth_year}</li>
      </ul>

    </div>
  );
};

export default CharacterDetails;