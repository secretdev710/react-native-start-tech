export function ageValidator(age) {
  if(!(age > 0 && age < 100)){
    return 'Please input valid age!'
  }
  return ''
}