export {}

function echo(message: string): string | null {
  return message
}

let implicitAny
implicitAny = 'implicitAny'

let nullableMessage = echo('hi')
let undefinedMessage: string | undefined = undefined
let onlyNull: null = null
let onlyUndefined: undefined = undefined
if (nullableMessage) nullableMessage.toUpperCase
echo.call(null, 'hi')
