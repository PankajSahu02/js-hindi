const marvel_heros = ["thor", "saktiman", "spiderman"]
const dc_heros = ["superman", "doromoon", "flash","batman"]

//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[1][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const new_allHeros = [...dc_heros, ...marvel_heros] 

//console.log(new_allHeros);

const another_array = [ 1, 2, 3, [4, 5], 6, [7, 8, 9, 10]]

const real_array = another_array.flat(Infinity)
//console.log(real_array);



//console.log(Array.isArray("Pankaj sahu"))
//console.log(Array.from({name: "Pankaj sahu"}))



let score1 = 100
let score2 = 200
let score3 = 300

console.log (Array.of(score1,score2,score3))