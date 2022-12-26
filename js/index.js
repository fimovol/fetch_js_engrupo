let select = document.createElement("select")

fetch('https://pokeapi.co/api/v2/generation/1/')
    .then(response => response.json())
    .then(data => {
    const pokemons = data.pokemon_species

    for (const index in pokemons){
        let option = document.createElement("option")
        option.setAttribute("value",pokemons[index].name)
        option.innerHTML = pokemons[index].name
        select.append(option)
    }
});
let root = document.getElementById("root")
root.append(select)

select.addEventListener("change",function(){
    var selectedOption = this.options[select.selectedIndex];

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedOption.value}/`)
    .then(response => response.json())
    .then(data => {
        const url = data.sprites.front_default

        let img = document.createElement("img")
        img.setAttribute("src",url)
        img.setAttribute("alt",selectedOption.value)
        root.append(img)
    });

    console.log(selectedOption.value + ': ' + selectedOption.text);
})