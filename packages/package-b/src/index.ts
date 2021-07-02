// lodash used as 3rd party dependency example in a deep dependency module
import { toUpper } from 'lodash-es'

export type Example = {
  example: string
}

export function greeter(incoming: string): string {
  return `Hallo ${toUpper(incoming)}`
}
