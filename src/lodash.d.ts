declare module 'lodash' {
  export function shuffle<T>(arr: T[]): T[]
}

declare namespace _ {
  function shuffle<T>(arr: T[]): T[]
}
