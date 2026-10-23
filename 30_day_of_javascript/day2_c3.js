let string7 = 'Tình yêu là điều tuyệt vời nhất trên thế giới này. Một số đã tìm thấy tình yêu của mình và một số vẫn đang tìm kiếm tình yêu của mình.'
let count1 =  string7.match(/tình yêu/gi).length
console.log(count1);

let string8 = 'Bạn không thể kết thúc câu bằng bởi vì bởi vì bởi vì là một liên từ'
console.log(string8.match(/vì/g).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const cleaned = sentence.replace(/[%$@#&;]/g, '')
console.log(cleaned)
const words = cleaned.toLowerCase().match(/[a-z0-9]+/g)
const counts = {}
for (const w of words) {
  counts[w] = (counts[w] || 0) + 1
}
const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
const top1 = sorted[0]
console.log('Từ phổ biến nhất:', top1[0])  
console.log('Số lần xuất hiện:', top1[1]);

let string9 = 'Anh ấy kiếm được 5000 euro từ lương mỗi tháng, 10000 euro tiền thưởng hàng năm, các khóa học trực tuyến 15000 euro mỗi tháng.'
let numbers = string9.match(/\d+/g)   

let salary = Number(numbers[0]) * 12    
let bonus = Number(numbers[1])           
let courses = Number(numbers[2]) * 12   

let total = salary + bonus + courses

console.log(total);