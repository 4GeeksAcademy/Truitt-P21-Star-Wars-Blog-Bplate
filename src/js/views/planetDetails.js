import React from 'react'

const planets = [

  {
    id: 2 - 1,
    imageSrc: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg",
    name: "Tatooine",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Population: 200,000 - Terrain: Desert - Diameter: 10,465",
  },

  {
    id: 2 - 2,
    imageSrc: "https://static.wikia.nocookie.net/starwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20181015023938",
    name: "Yavin IV",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Population: 1,000 - Terrain: Jungle, Rainforests - Diameter: 10,200km",
  },

  {
    id: 2 - 3,
    imageSrc: "https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
    name: "Alderaan",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Population: 2,000,000,000 - Terrain: Grasslands, Mountains - Diameter: 12,500km",
  },

  {
    id: 2 - 4,
    imageSrc: "https://lumiere-a.akamaihd.net/v1/images/image_51705c58.jpeg",
    name: "Coruscant",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Population: 1,000,000,000,000 - Terrain: Cityscape, Mountains - Diameter: 12,240km",
  },

  {
    id: 2 - 5,
    imageSrc: "https://static.wikia.nocookie.net/starwars/images/a/a9/Eaw_Kamino.jpg/revision/latest?cb=20090527045541",
    name: "Kamino",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Population: 1,000,000,000 - Terrain: Ocean - Diameter: 19,720km",
  },

]

const HorizontalCard = (props) => {
  return (
    <div>

      <div className="card mb-3" style="max-width: 540px;">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="{props.imageSrc}" className="img-fluid rounded-start" alt="..." />
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

const PlanetDetails = () => {
  return (
    <div>
      Planet Details
      {/* {
        planets.map((planets) => (
          <HorizontalCard
            id={planets.id}
            imageSrc={planets.imageSrc}
            name={planets.name}
            bio={planets.bio}
            info={planets.info}
          />
        ))
      } */}
    </div>
  );
};

export default PlanetDetails;