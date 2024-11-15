export const URL= "https://pokeapi.co/api/v2/pokemon/ditto";

//Function to fetch pokemon 
export async function fetchPokemonData(pokemonId, setData) {
    try {
        let response = await fetch(`${BASE_URL}/pokemon/${pokemonId}`, {
            method: "GET",
        });

        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setData(data)
    } catch (error) {
        console.error("Error fetching Pokemon data", error)
    }
}