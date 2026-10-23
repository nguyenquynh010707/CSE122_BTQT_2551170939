let string2 = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(string2);

let string3 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(string3);

console.log(typeof'10' == 10);

let text = '9, 8'
console.log(parseFloat(text) == 10)
let result = Math.round(parseFloat(text.replace(', ', '.')))
console.log(result)
console.log(result == 10);

let word1 = 'python'
let word2 = 'jargon'
console.log(word1.includes('on'))
console.log(word2.includes('on'));

let string4 = 'Tôi hy vọng khóa học này không chứa đầy những biệt ngữ.'
console.log(string4.includes('biệt ngữ'));

/*let random1 = Math.floor(Math.random()*101)
console.log(random1);

let random2 = Math.floor(Math.random()*51)+50
console.log(random2);

let random3 = Math.floor(Math.random()*256)
console.log(random3);*/

let text2 = 'JavaScript'
let random4 = Math.floor(Math.random()*text2.length)
console.log(random4)
console.log(text2[random4]);

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125');

let string5 = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(string5.substring(39,52));
