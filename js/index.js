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
root.insertAdjacentElement("beforebegin",select)

select.addEventListener("change",function(){
    var selectedOption = this.options[select.selectedIndex];

    fetch(`https://pokeapi.co/api/v2/pokemon/${selectedOption.value}/`)
    .then(response => response.json())
    .then(data => {
        const url = data.sprites.front_default

        let img = document.createElement("img")
        img.setAttribute("src",url)
        img.setAttribute("alt",selectedOption.value)
        let contenedor =  document.createElement("div")
        contenedor.setAttribute("class","contenedor")
        contenedor.append(img)
        let p = document.createElement("p")
        p.innerHTML = selectedOption.value
        contenedor.append(p)
        root.innerHTML= ""
        root.append(contenedor)
    });

    console.log(selectedOption.value + ': ' + selectedOption.text);
})