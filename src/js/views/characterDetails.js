import React from 'react'

const characters = [
  
  {
    id: 1 - 1,
    imageSrc: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Luke-Skywalker.Star-Wars-Series.webp",
    name: "Luke Skywalker",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Gender: Male, Hair Color: Blond, Eye Color: Blue",
  },

  {
    id: 1 - 2,
    imageSrc: "https://ew.com/thmb/DR9B7S2D_xzQSnXZKvy7E1-9BKA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/star-wars-episode-v-the-empire-strikes-back-darth-vader-205c0af116534c39844e3b87544ed4b9.jpg",
    name: "Darth Vader",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Gender: Male, Hair Color: N/A, Eye Color: Unknown",
  },

  {
    id: 1 - 3,
    imageSrc: "https://intheirownleaguehome.files.wordpress.com/2019/10/carrie_fisher_princess_leia11-e1571513710158.jpg?w=900&h=506&crop=1",
    name: "Leia Organa",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Gender: Female, Hair Color: Brown, Eye Color: Brown",
  },

  {
    id: 1 - 4,
    imageSrc: "https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=242%2C0%2C716%2C536",
    name: "C-3PO",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Gender: N/A, Hair Color: None, Eye Color: Gold",
  },

  {
    id: 1 - 5,
    imageSrc: "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=364%2C0%2C716%2C536",
    name: "R2-D2",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Gender: N/A, Hair Color: None, Eye Color: None",
  },

]

const HorizontalCard = (props) => {
  return (
    <div>

      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.imageSrc} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.bio}</p>
              <p className="card-text"><small className="text-body-secondary">{props.info}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CharacterDetails = () => {
  return (
    <div>
      Character Details
      {/* {
        characters.map((characters) => (
          <HorizontalCard
            id={characters.id}
            imageSrc={characters.imageSrc}
            name={characters.name}
            bio={characters.bio}
            info={characters.info}
          />
        ))
      } */}
    </div>
  );
};

export default CharacterDetails;