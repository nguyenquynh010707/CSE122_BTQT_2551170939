let challenge = ' Học JavaScript trong 30 ngày ';
console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substring(0,3));

console.log(challenge.substring(15,28));

console.log(challenge.includes('Script'));

let Array = challenge.split(' ')
console.log(Array)
console.log(Array[1])
console.log(Array.length);

/*console.log(Array)-cach 1*/
console.log(challenge.split(' '));

let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(', '))
console.log(string);

let challenge2 = challenge.replace('JavaScript', 'Python')
console.log(challenge2);

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(4));

console.log(challenge.indexOf('o'));

console.log(challenge.lastIndexOf('o'));

let challenge3 = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(challenge3.indexOf('vì'))
console.log(challenge3.lastIndexOf('vì'));

console.log(challenge3.search('vì'));

console.log(challenge.trim());

console.log(challenge.trim().startsWith('Học'))
console.log(challenge.trim().endsWith('ngày'));

console.log(challenge.match(/o/g));

let p1 = 'Học JavaScript trong'
let p2 = '30 ngày'
console.log(p1.concat(' ',p2));

console.log(challenge.repeat(2));