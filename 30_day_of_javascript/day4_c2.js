// xếp loại điểm
{
  const score = Number(prompt('Enter the score: '))

  if (Number.isNaN(score) || score < 0 || score > 100) {
    console.log('Invalid score')
  } else if (score >= 80) {
    console.log(`Score ${score}: A`)
  } else if (score >= 70) {
    console.log(`Score ${score}: B`)
  } else if (score >= 60) {
    console.log(`Score ${score}: C`)
  } else if (score >= 50) {
    console.log(`Score ${score}: D`)
  } else {
    console.log(`Score ${score}: F`)
  }
}
// xác định mùa
{
  const month = prompt('Enter a month: ').trim().toLowerCase()
  switch (month) {
    case 'september':
    case 'october':
    case 'november':
      console.log('The season is Autumn.')
      break
    case 'december':
    case 'january':
    case 'february':
      console.log('The season is Winter.')
      break
    case 'march':
    case 'april':
    case 'may':
      console.log('The season is Spring.')
      break
    case 'june':
    case 'july':
    case 'august':
      console.log('The season is Summer.')
      break
    default:
      console.log('Invalid month')
  }
}
//ngày cuối tuần hay ngày làm việc
{
  const input = prompt('What is the day today? ').trim()
  const day = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  if (day === 'Saturday' || day === 'Sunday') {
    console.log(`${day} is a weekend.`)
  } else if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(day)) {
    console.log(`${day} is a working day.`)
  } else {
    console.log('Invalid day')
  }
}