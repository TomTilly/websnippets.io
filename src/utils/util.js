export function capitalize([firstLetter, ...restOfWord]) {
  return firstLetter.toUpperCase() + Array.from(restOfWord).join('');
}
