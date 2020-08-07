function major(amountString) {
  if (!amountString) return amountString
  const parts = amountString.split('.')
  return parts.splice(0, parts.length-1).join('')
}

function minor(amountString) {
  if (!amountString) return amountString
  const parts = amountString.split('.')
  if (parts.length < 2) return ''
  return parts[parts.length-1]
}

export default {
  major,
  minor,
}