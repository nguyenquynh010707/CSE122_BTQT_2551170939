const base = Number(prompt('Enter base: '))
const height = Number(prompt('Enter height: '))
const area = 0.5 * base * height
console.log(`Enter base: ${base}`)
console.log(`Enter height: ${height}`)
console.log(`The area of the triangle is ${area}`);

{const a = Number(prompt('Enter side a: '))
const b = Number(prompt('Enter side b: '))
const c = Number(prompt('Enter side c: '))
const perimeter = a + b + c

console.log(`Enter side a: ${a}`)
console.log(`Enter side b: ${b}`)
console.log(`Enter side c: ${c}`)
console.log(`The perimeter of the triangle is ${perimeter}`);}

{
  const length = Number(prompt('Enter length: '))
  const width = Number(prompt('Enter width: '))
  const area = length * width
  const perimeter = 2 * (length + width)

  console.log(`Enter length: ${length}`)
  console.log(`Enter width: ${width}`)
  console.log(`The area of the rectangle is ${area}`)
  console.log(`The perimeter of the rectangle is ${perimeter}`)
}
//diện tích chu vi hình tròn
{
  const radius = Number(prompt('Enter radius: '))
  const pi = 3.14
  const area = (pi * radius * radius).toFixed(2)
  const circumference = (2 * pi * radius).toFixed(2)

  console.log(`Enter radius: ${radius}`)
  console.log(`The area of the circle is ${area}`)
  console.log(`The circumference of the circle is ${circumference}`)
}
//hệ số góc, giao điểm của y=2x-2, so sánh hệ số góc
{
  const m1 = 2
  const yIntercept = -2
  const xIntercept = -yIntercept / m1

  console.log(`Slope: ${m1}`)
  console.log(`x-intercept: ${xIntercept}`)
  console.log(`y-intercept: ${yIntercept}`)

  const x1 = 2
  const y1 = 2
  const x2 = 6
  const y2 = 10
  const m2 = (y2 - y1) / (x2 - x1)

  console.log(`The slope between (2, 2) and (6, 10) is ${m2}`)

  if (m1 > m2) {
    console.log('The slope of y = 2x - 2 is greater')
  } else if (m1 < m2) {
    console.log('The slope between the two points is greater')
  } else {
    console.log('The two slopes are equal')
  }
}
//y=x^2+6x+9, tìm x để y = 0
{
  for (let x = -6; x <= 0; x++) {
    const y = x ** 2 + 6 * x + 9
    console.log(`x = ${x}, y = ${y}`)
    if (y === 0) {
      console.log(`y is 0 when x = ${x}`)
    }
  }
}
//tiền lương
{
  const hours = Number(prompt('Enter hours: '))
  const rate = Number(prompt('Enter rate per hour: '))
  const earning = hours * rate

  console.log(`Enter hours: ${hours}`)
  console.log(`Enter rate per hour: ${rate}`)
  console.log(`Your weekly earning is ${earning}`)
}
//tên dài hay ngắn
{
  const name = prompt('Enter your name: ')

  if (name.length > 7) {
    console.log('Your name is long')
  } else {
    console.log('Your name is short')
  }
}
// so sánh độ dài họ và tên
{
  let firstName = 'Asabeneh'
  let lastName = 'Yetayeh'

  if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
  } else if (firstName.length < lastName.length) {
    console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)
  } else {
    console.log(`Your first name, ${firstName} and your family name, ${lastName} have the same length`)
  }
}
// so sánh tuổi
{
  let myAge = 250
  let yourAge = 25
  const diff = Math.abs(myAge - yourAge)

  if (myAge > yourAge) {
    console.log(`I am ${diff} years older than you.`)
  } else if (myAge < yourAge) {
    console.log(`I am ${diff} years younger than you.`)
  } else {
    console.log('We are the same age.')
  }
}
//được lái xe hay chưa
{
  const birthYear = Number(prompt('Enter birth year: '))
  const age = new Date().getFullYear() - birthYear

  console.log(`Enter birth year: ${birthYear}`)

  if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive`)
  } else {
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`)
  }
}
// số giây sống được
{
  const years = Number(prompt('Enter number of years you live: '))
  const seconds = years * 365 * 24 * 60 * 60

  console.log(`Enter number of years you live: ${years}`)
  console.log(`You lived ${seconds} seconds.`)
}
// định dạng ngày giờ
{
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')

  console.log(`${year}-${month}-${day} ${hours}:${minutes}`)
  console.log(`${day}-${month}-${year} ${hours}:${minutes}`)
  console.log(`${day}/${month}/${year} ${hours}:${minutes}`)
}