import React from 'react'

import { Example, greeter } from '@moreptsviteex/package-b'

import styles from '@moreptsviteex/sass/components/mycomp.module.scss'

export function MyComp(props: Example): JSX.Element {
  return <div className={styles.mycomp}>Hurz. {greeter(props.example)}</div>
}
