let firstName = 'Nguyễn'
let lastName = 'Quỳnh'
let country1 = 'Việt Nam'
let city = 'Hà Tây'
let age1 = 20
let isMarried1 = false
let year = 2026

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country1)
console.log(typeof city)
console.log(typeof age1)
console.log(typeof isMarried1)
console.log(typeof year);

console.log('10'==10);

console.log(parseInt('9.8')==10);

console.log(5>3)
console.log('10'==10)
console.log(Boolean(1));

console.log(5<3)
console.log('10'===10)
console.log(Boolean(0));

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log(('python').length>('biệt ngữ').length);

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(!('dragon'.includes('on') || 'python'.includes('on')));

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(Math.floor(now.getTime() / 1000))