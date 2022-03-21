const baseurl =  'https://pokeapi.co/api/v2/pokemon/'
const pokemon = document.getElementById('pokemomname')
const buscar = document.getElementById('buscar')
const pokeball = document.getElementById('pokeball')

buscar.addEventListener('click', insertpokemon)




function insertpokemon(){
    window.fetch(`${baseurl}${pokemon.value.toLowerCase()}`)
    .then(response => {
        if (response.status === 404 ){
            alert('este pokemon no esta disponible,pon otro')
        }  else{
        return response.json()
        }
    })
    .then(responseJSON => {
         const allitems = []

         const result = []

         for(let pokeinfo in responseJSON){
             result.push([pokeinfo,responseJSON[pokeinfo]])
         }

         console.table(result)

         const pokemonImage = document.createElement('img');
    pokemonImage.src = result[14][1].front_default; //*Image of pokemon

    //*Nombre de pokemon e ID
           const pokemonName = document.createElement('h2');
               pokemonName.innerText = `ID: ${result[6][1]}`; //* Name of pokemon with ID
    
        const pokemonType = document.createElement('h2');
         pokemonType.innerText = `Type: ${result[16][1][0].type.name}`; 

          const container = document.createElement('div');
          container.append(pokemonImage , pokemonName ,pokemonType,);
    

    allitems.push(container);

    app.append(...allitems)


    


    
    })
}