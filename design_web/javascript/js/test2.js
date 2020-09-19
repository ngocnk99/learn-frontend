// var formValues = [
//     { field: 'name', value: 'Sơn Đặng' }
// ];


// function getRequestBodyFromValues(formValues) { 
//     var output={};  
//     formValues.forEach((obj) =>{
//         output[obj.field] = obj.value;
//         })
//     console.log(output);
// }


// getRequestBodyFromValues(formValues);

// var number = [1,2,3];
// function checkPositiveNumbers(numbers) {

//     var test = numbers.every((number)=>{
        
//         return number > 0;
//     })
//     return test;
// }
// var test = checkPositiveNumbers(number);
// console.log(test);


// var te = [
//     { name: 'Javascript', vnd: 1000000 },
//     { name: 'PHP', vnd: 990000 },
//     { name: 'HTML, CSS', vnd: 0 }
    
// ];

// function hasFreeCourses(courses) {

//     var test = courses.some((khoahoc)=>{
//            return khoahoc.vnd === 0;
//        })
//        return test;
//    }

// var test2 = hasFreeCourses(te);
// console.log(test2);


// var mn =[
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100
//     },
//     {
//         name: 'Khủng long',
//         attack: 1501,
//         speed: 80,
//         hitpoint: 180
//     },
//     {
//         name: 'Khủng long 2',
//         attack: 1501,
//         speed: 80,
//         hitpoint: 180
//     }
// ];


// function findAMonsterByAttack(monsters) {

//     var result = []; 
//     result = monsters.find(function(monster) {
//        return monster.attack === 150;
//     });
//     if (result === undefined) {
//         return null;
//     }
//     return result;
// }

// var te = findAMonsterByAttack(mn);
// console.log(te);

// var te =['hi abc', 'abc', 'chuỗi', '123'];
// function findStringsInArrayByKeyword(keyword,strings){
//     var a = strings.filter((str) =>{
//         if(str.includes(keyword)) return str;
//     })
//     return a;
// }
// var test5 = findStringsInArrayByKeyword('i',te);
// console.log(test5);

var inputs = [1,2,3];

function convertToBoolean(inputs) {
    
    var outputs = inputs.map((input)=>{
        return Boolean(input);
    }) ;
    return outputs;

}

var test7 = convertToBoolean(inputs);
console.log(test7);
