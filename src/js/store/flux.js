const getState = ({ getStore, getActions, setStore }) => {

	return {

		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},

		actions: {
			loadPeople: async () => {
				try {
					const response = await fetch('https://swapi.dev/api/people');
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();
					setStore({ characters: data.results });
					console.log(data.results)
				} catch (error) {
					console.error('There was a problem with the fetch operation', error);
				}
			},

			loadPlanets: async () => {
				try {
					const response = await fetch('https://swapi.dev/api/planets');
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();
					setStore({ planets: data.results });
					console.log(data.results)
				} catch (error) {
					console.error('There was a problem with the fetch operation', error);
				}
			},

			loadVehicles: async () => {
				try {
					const response = await fetch('https://swapi.dev/api/vehicles');
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();
					setStore({ vehicles: data.results });
					console.log(data.results)
				} catch (error) {
					console.error('There was a problem with the fetch operation', error);
				}
			},

			addFavorite: (name) => {
				const favorites = getStore().favorites
				favorites.push(name)
				setStore({ favorites: favorites })
			},

			deleteFavorite: (idx) => {
				const favorites = getStore().favorites
				newFavorites = favorites.filter((item, index) => {
					return (
						index !== idx
					)
				})
				setStore({ favorites: newFavorites })
			}

		}
	}

}

export default getState;
