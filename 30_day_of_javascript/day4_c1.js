// tuổi lái xe
{
  const age = Number(prompt('Enter your age:'))
  console.log(`Enter your age: ${age}`)
  if (age >= 18) {
    console.log('You are old enough to drive.')
  } else {
    console.log(`You are left with ${18 - age} years to drive.`)
  }
}
// so sánh tuổi tôi với 25
{
  const myAge = 25
  const yourAge = Number(prompt('Enter your age:'))
  const diff = Math.abs(yourAge - myAge)

  console.log(`Enter your age: ${yourAge}`)

  if (yourAge > myAge) {
    console.log(`You are ${diff} years older than me.`)
  } else if (yourAge < myAge) {
    console.log(`You are ${diff} years younger than me.`)
  } else {
    console.log('You are the same age as me.')
  }
}
//so sánh a,b
{
  let a = 4
  let b = 3
  if (a > b) {
    console.log(`${a} is greater than ${b}`)
  } else {
    console.log(`${a} is less than ${b}`)
  }
}
//số chẵn lẻ
{
  const number = Number(prompt('Enter a number:'))
  console.log(`Enter a number: ${number}`)
  if (number % 2 === 0) {
    console.log(`${number} is an even number`)
  } else {
    console.log(`${number} is an odd number`)
  }
}