import React from 'react'

const vehicles = [

  {
    id: 3 - 1,
    imageSrc: "https://lumiere-a.akamaihd.net/v1/images/AT-AT_89d0105f.jpeg?region=214%2C19%2C1270%2C716",
    name: "AT-AT",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Cost: Unknown - Speed: 60km/hr - Length: 20m - Passengers: 40",
  },

  {
    id: 3 - 2,
    imageSrc: "https://static.wikia.nocookie.net/starwars/images/4/4d/T16skyhopper_negvv.png/revision/latest?cb=20170411234939",
    name: "T-16 Skyhopper",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Cost: 14,500 credits - Speed: 1,200km/hr - Length: 10.4m - Passengers: 1",
  },

  {
    id: 3 - 3,
    imageSrc: "https://i.pinimg.com/736x/14/65/dc/1465dcc8bbd2677eef9b9cb8dc7bf87f.jpg",
    name: "Sail Barge",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Cost: 285,000 - Speed: 100km/hr - Length: 30m - Passengers: 500",
  },

  {
    id: 3 - 4,
    imageSrc: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2011/10/03/94587/39452/tie_bomber_from_star_wars_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_277752_o.jpg",
    name: "TIE Bomber",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Cost: Unknown - Speed: 850km/hr - Length: 7.8m - Passengers: 0",
  },

  {
    id: 3 - 5,
    imageSrc: "https://cdn.rebrickable.com/media/thumbs/mocs/moc-110313.jpg/1000x800.jpg",
    name: "TIE/LN Starfighter",
    bio: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    info: "Cost: Unknown - Speed: 1,200km/hr - Length: 6.4m - Passengers: 0",
  },

]

const HorizontalCard = (props) => {
  return (
    <div>

      <div className="card mb-3" style="max-width: 540px;">
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

const VehicleDetails = () => {
  return (
    <div>
      Vehicle Details
      {/* {
        vehicles.map((vehicles) => (
          < HorizontalCard
            id={vehicles.id}
            imageSrc={vehicles.imageSrc}
            name={vehicles.name}
            bio={vehicles.bio}
            info={vehicles.info}
          />
        ))
      } */}
    </div>
  );
};

export default VehicleDetails;