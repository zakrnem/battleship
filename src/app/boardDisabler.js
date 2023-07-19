let disable = -1

export function boardDisabler(typeOfOperation) {
  if (typeOfOperation === 'write') {
    disable *= -1
  }
  if (typeOfOperation === 'read') {
    return disable
  }
}