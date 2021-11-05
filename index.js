const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

let noWin = ({result: "no win"})
let win = {result: "W"}

function identifyW(object) {
    return object.result === "W";
    //returns true or false  
}

function superbowlWin(array) {
    const win = (array.find(identifyW));
    if (typeof win === 'object'){
    return win.year;
    }
}

console.log(superbowlWin(record))


