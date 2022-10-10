var array = [1,4,3,5,6,12,9,8];
var trojka = [];

function trojkaa(){
    for (let i of array){
        if (i%3==0){
           trojka.push(i);
        }
    }
}
trojkaa();
console.log(trojka)