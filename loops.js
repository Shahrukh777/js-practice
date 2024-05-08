
// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3]
for (const num of arr) {
    console.log(num)
}

const ss = "SHA"
for (const n of ss) {
    console.log(n)
}

//  Maps  -- OBJECT - KEY VALUE PAIR - ORDER

const map = new Map()
map.set('city', 'Mumbai')
map.set('country', 'India')
map.set('system','call')
console.log(map)

for (const [key, value] of map) {
    console.log(key, " :" , value )
}
// .....................
// const game = {
//     g1: "NSF",
//     g2: "GTA",
//     g3: "COC"
// }
// for (const [key, value] of games) {    // DOESNT WORK
//     console.log(key , " :", value)
// }

// ''''''''''''''''''''''''



// forin loop
//OBJECT
const obj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    py: "python"
}
for (const key in obj) {           
    console.log(key,": ",obj[key])
}

// ARRAY
const genshin = ["Kazuha","Raiden","Ayato","Kokomi"]    //ONLY PRINTS INDEXES
for (const character in genshin) {
    console.log(genshin[character])
}
// .................

//foreach
console.log("    foreach      ")

const coding = ['js', 'java', 'cpp', 'python', 'c#']


// coding.forEach( function (x) {      // WORKS
//     console.log(x)
// } )

// coding.forEach( (x) => {           // WORKS
//     console.log(x)
// })

// function print(x){                    // WORKS
//     console.log(x)
// }
// coding.forEach(print)

coding.forEach( (x, index, arr) => {
    console.log(x, index, arr)
})
