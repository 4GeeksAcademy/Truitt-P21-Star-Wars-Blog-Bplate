const getState = ({ getStore, getActions, setStore }) => {
	/*
	//People
	{
		name: anakin
		age: 22
	}
	//Planets
	{

	}
	//Vehicles
	{
		model: 
	}
	*/
	return {
		store: {
			characters: [
				{
					properties: {
						name: 'Ernesto',
						height: '2m'
					},
					description: 'This character is cool'
				}
			],
			planets: [
				{
					properties: {
						name: 'tatooine',
						diameter: '2000000000000m'
					},
					description: 'This planet is cool'
				}
			],
			vehicles: [],
		},
		actions: {
			loadStarWars: () => {
				console.log("fetch data and update store here!")
			}
		}
	};
};

export default getState;
