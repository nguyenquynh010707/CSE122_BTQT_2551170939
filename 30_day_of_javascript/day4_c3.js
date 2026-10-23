// số ngày trong tháng(t2 luôn có 28 ngày)
{
  const input = prompt('Enter a month: ').trim()
  const month = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  const daysInMonth = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  }
  if (daysInMonth[month] === undefined) {
    console.log('Invalid month')
  } else {
    console.log(`${month} has ${daysInMonth[month]} days.`)
  }
}
//số ngày(tính năm nhuận)
{
  const input = prompt('Enter a month: ').trim()
  const year = Number(prompt('Enter a year: '))
  const month = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  const daysInMonth = {
    January: 31,
    February: isLeapYear ? 29 : 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
  }

  if (daysInMonth[month] === undefined) {
    console.log('Invalid month')
  } else {
    console.log(`${month} ${year} has ${daysInMonth[month]} days.`)
  }
}