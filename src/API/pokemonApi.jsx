// URL base da PokeAPI para buscar Pokémon por ID
export const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// Função para buscar dados do Pokémon aleatório
export async function fetchData(setData) {
  try {
    // Gera um número aleatório entre 1 e 898 (limite de Pokémons disponíveis)
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await fetch(`${BASE_URL}${randomId}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    setData(data); // Define os dados no estado
    console.log(data);
  } catch (err) {
    console.error('Error fetching data:', err);
  }
}
