// Your code goes here
function findTypes() {
    let result=[];
    for(var i = 0; i<arguments.length; i++){
        let type = typeof arguments[i];
        result.push(type);
    }
    return result;
}
findTypes(null, 5, "hello");

function executeforEach(array, callback) {
 for(let i = 0; i < array.length; i++){
     callback(array[i]);
 }   
}
executeforEach([1, 2, 3], (el) => console.log(el));

function mapArray(mas, func) {
    let res = [];
    executeforEach(mas, function(el){
        res.push(func(el));
    });
    return res;
}
mapArray([2, 5, 8], el => el + 3);

function filterArray(data, func) {
    let res = [];
    executeforEach(data, function(el) {
        if (func(el)) {
            res.push(el);
        }
    });
    return res;
}
filterArray([2, 5, 8], el => el > 3);

let inputData = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
]  
function getAmountOfAdultPeople() {
    return filterArray(inputData, function (el) {
        return el.age > 18;
    }).length;
}
getAmountOfAdultPeople(inputData);

function getGreenAdultBananaLovers(){
    let res = [];
    filterArray(inputData, function (el) {
        if(el.age > 18 && el.favoriteFruit === "bananna" && el.eyeColor === "green"){
            res.push(el.name);
        }
        return res;
    });
}
getGreenAdultBananaLovers(inputData);

function keys(objEntries){
    let arr = [];
    for(let key in objEntries){
        arr.push(key);
    }
    return arr;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(objEntries){
    let res = [];
    for(var key in objEntries){
        res.push(objEntries[key]);
    }
    return res;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});

function showFormattedDate(date){
      let MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return `Date: ${date.getDate()} of ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date){
    var year = date.getFullYear();
    return !(year % 2);
}
isEvenYear(new Date('2019-01-27T01:10:00'))

function isEvenMonth(date){
    var month = date.getMonth() + 1;
    return !(month % 2);
}
isEvenMonth(new Date('2019-02-27T01:10:00'))