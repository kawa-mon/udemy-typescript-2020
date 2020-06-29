declare module 'lodash' {
  export function shuffle<T>(arr: T[]): T[]
}

interface Lodash {
  shuffle<T>(arr: T[]): T[]
}

declare const _: Lodash
