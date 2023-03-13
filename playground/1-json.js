const fs =require('fs')

// const books ={
//     book :'Ego is enemy',
//     author :'Ryan Holiday'
// }

// const BookJson =JSON.stringify(books)
// fs.writeFileSync('1-JSON.json' ,BookJson)
const dataBuffer = fs.readFileSync('1-JSON.json');
const datatostring = dataBuffer.toString();
const dataparse =JSON.parse(datatostring)
console.log(dataparse.name)


dataparse.name ='uzair'

dataparse.age='23'
const user =JSON.stringify(dataparse)
fs.writeFileSync('1-JSon.JSON' ,user);
// const parsedata =JSON.parse(BookJson);
// console.log(parsedata)




// const dataBuffer=fs.readFileSync('1-JSON.json')
// const parsedata =dataBuffer.toString()
// const actualdata =JSON.parse(parsedata)

// actualdata.author ='uzair'
// actualdata.book ='N/A'

// console.log(actualdata)

// const user = JSON.stringify('actualdata')
// fs.writeFileSync('1-JSON.json' ,user)

// console.log(actualdata)