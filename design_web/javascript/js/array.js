/*
 array methods:
    forEach() : duyet mang
    every(): kiem tra tat ca phan tu phan tu xem co dung theo tieu chuan nao k
        ->>boolean

    some(): kiem tra xem co phan tu nao thoa man dieu kien khong
        ->>boolean
    find(): giong some
        ->> phan tu dau tien thoa man dk
    filter():
    map():
    reduce():
*/
var students =[
    {
        id: 01,
        namea: 'abc',
        gpi: 1
    },
    {
        id: 02,
        name: 'ngoc',
        gpi: 1
    },
    {
        id: 03,
       
        gpi: 3
    },
    {
        id: 03,
     
        gpi: 4
    }
];

 students.forEach(function(student,index){
    console.log(student,index);
})

var test_forEach = students.every(function(st,index)
{
    console.log(index);
    return st.gpi >= 1;
})
console.log(test_forEach);

var test_some =students.some((te,index) =>{
    console.log(index);
    return te.name == 'ngoc';
} );
console.log(test_some);

var test_find =students.find((te,index) =>{
    console.log(index);
    return te.name == 'ngoc';
} );
console.log(test_find);

var test_filter = students.filter((te) =>{
    
    return te.gpi == 1;
})

console.log(test_filter);

var test_includes = students.includes((te,index) => {
    console.log(index);
    return te.gpi == 1;
})
console.log(test_includes);






