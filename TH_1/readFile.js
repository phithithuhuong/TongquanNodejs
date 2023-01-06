const  fs= require('fs');

console.log('hic');
fs.readFile('text.txt', 'utf8',(err, data)=>{
    console.log(data);
})
console.log('heat hurt')