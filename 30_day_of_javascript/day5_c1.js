const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const emptyArray = []

const numbers = [1, 2, 3, 4, 5, 6, 7]

console.log('3.', numbers.length)

const middleIndex = Math.floor(numbers.length / 2)
console.log('4.', numbers[0], numbers[middleIndex], numbers[numbers.length - 1])

const mixedDataTypes = ['Asabeneh', 250, true, null, undefined, { name: 'JS' }, [1, 2], 3.14]
console.log('5.', mixedDataTypes.length)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log('7.', itCompanies)
console.log('8.', itCompanies.length)

const mid = Math.floor(itCompanies.length / 2)
console.log('9.', itCompanies[0], itCompanies[mid], itCompanies[itCompanies.length - 1])
console.log('10.')
itCompanies.forEach((company) => console.log(company))
console.log('11.')
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase())
}

const sentence =
  itCompanies.slice(0, -1).join(', ') +
  ' and ' +
  itCompanies[itCompanies.length - 1] +
  ' are big IT companies.'
console.log('12.', sentence)

const checkCompany = (name) => {
  for (const company of itCompanies) {
    if (company === name) return company
  }
  return 'A company is not found'
}
console.log('13.', checkCompany('Google'), '|', checkCompany('Tesla'))

const manyOs = []
for (const company of itCompanies) {
  let count = 0
  for (const ch of company.toLowerCase()) {
    if (ch === 'o') count++
  }
  if (count > 1) manyOs.push(company)
}
console.log('14.', manyOs) 

const sorted = [...itCompanies].sort()
console.log('15.', sorted)

const reversed = [...itCompanies].reverse()
console.log('16.', reversed)
console.log('17.', itCompanies.slice(0, 3))
console.log('18.', itCompanies.slice(-3))

const middleSlice = (arr) => {
  const m = Math.floor(arr.length / 2)
  return arr.length % 2 === 0 ? arr.slice(m - 1, m + 1) : arr.slice(m, m + 1)
}
console.log('19.', middleSlice(itCompanies))

itCompanies.shift()
console.log('20.', itCompanies)

const m = Math.floor(itCompanies.length / 2)
if (itCompanies.length % 2 === 0) itCompanies.splice(m - 1, 2)
else itCompanies.splice(m, 1)
console.log('21.', itCompanies)

itCompanies.pop()
console.log('22.', itCompanies)

itCompanies.length = 0 
console.log('23.', itCompanies)