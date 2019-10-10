console.log("Hello there.");

//lightning exercises

//exercise one

const coolCar = {
    "make" : "Ford",
    model : "Mustang",
    color : "red",
    year : "2015"
}
console.log("coolCar", coolCar)

//exercise two

const shelterNames = ["Kippers","Jack","Gypsy","Angus","Seymour Boots","Sharky"];


//exercise three

const dad = {
    age : 30,
}

const mom = {
    age : 30
}

const sis = {
    age :5
}

const bro = {
    age : 2
}

const familyMembers = [dad,mom,sis,bro];


//lightning exercise dot notation

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("height",wardrobe.height,"manufacturer" ,wardrobe.manufacturer,"contents", wardrobe.contents,"depth", wardrobe.depth,"height", wardrobe.width);

wardrobe.material = "Cedar";
console.log(wardrobe.material);

//bracket notation lightning exercise

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

//exercise 1
console.log("Stories",empireStateBuilding.stories);
console.log( "height",empireStateBuilding.height);
console.log("Square Feet",empireStateBuilding.squareFeet);
console.log("East-West Length",empireStateBuilding.eastWestLength);
console.log("North-South Length",empireStateBuilding.northSouthLength);

//exercise 2
const address = "address";
const built = "constructionDate";
const ownedBy = "owner";
const cost = "cost";
const designedBy = "architect"



console.log(empireStateBuilding[address]);
console.log("Built", empireStateBuilding[built]);
console.log("owned by", (empireStateBuilding[ownedBy]));
console.log("cost:", empireStateBuilding[cost]);
console.log("designed by:", empireStateBuilding[designedBy]);


//lightning exercise 1

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}


for (let i=0; i<nashvilleSoftwareSchool.instructors.partTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.partTime[i]);
}
for (let i=0; i<nashvilleSoftwareSchool.instructors.fullTime.length; i++) {
    console.log(nashvilleSoftwareSchool.instructors.fullTime[i]);
}

//2

console.log(nashvilleSoftwareSchool.instructors.fullTime[4]);
console.log(nashvilleSoftwareSchool.instructors.partTime[0]);