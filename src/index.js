console.clear();
var inputNum = 11; 
var res = Math.ceil(Math.sqrt(inputNum));

(res % 2 === 0) ? res += 1 : res;

var arr2 = [];
var c = (res - 1)/2; // center

var x = c, y = c,
    dx = 0, dy = 1;
var curr2 = 1,
    lap2 = 0;

for(let i=0; i<res; i++) {
  arr2[i] = [];
}

while(curr2 != res*res+1) {
    if(x === c && y === c) {
        dx = 0; dy = 1; 
    } else if (x === c + lap2 && y === c + lap2 + 1) {
        dx = -1; dy = 0; lap2++
    } else if (x === c - lap2 && y === c + lap2) {
        dx = 0; dy = -1;
    } else if (x === c - lap2 && y === c - lap2) {
        dx = 1; dy = 0;
    } else if (x === c + lap2 && y === c - lap2) {
        dx = 0; dy = 1; 
    }
  
  arr2[x][y] = curr2;
  x += dx; y += dy;
  curr2++;
}

console.log(arr2);
