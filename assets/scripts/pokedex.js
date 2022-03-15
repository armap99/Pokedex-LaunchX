const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;
  pokeName = pokeName.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  fetch(url)
    .then((res) => {
      if (res.status != "200") {
        console.log(res);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
        generaPokemon(data);
      }
    })
    .catch((err) => console.log(err));
};

const generaPokemon = (data) => {
  pokeImage(data.sprites.front_default);
  pokeNombre(data.name);
  pokeTypes(data.types);
  pokeStats(data.stats);
};

const pokeImage = (url) => {
  console.log(url);
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

const pokeNombre = (name) => {
  const nombre = (document.getElementById("pokemonName").innerText =
    name.toUpperCase());
};

const pokeTypes = (types) => {
  let aux = "";
  types.forEach((type) => {
    aux += `<p class="texto-tipo"> ${type.type.name.toUpperCase()} </p>`;
  });
  document.getElementById("types").innerHTML = aux;
};

const pokeStats = (stats) => {
  let aux = "<H2>Stats</H2>";
  stats.forEach((stat) => {
    aux += `<p>${stat.stat.name}: <span>${stat.base_stat}</span></p>`;
  });
  document.getElementById("stats").innerHTML = aux;
};
