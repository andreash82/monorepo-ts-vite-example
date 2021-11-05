import React from 'react'

import { Example, greeter } from '@moreptsviteex/package-b'

import styles from '@moreptsviteex/sass/components/mycomp.module.scss'
import {Hurzi} from "@moreptsviteex/package-b";

export type MyCompProps = Example

export const MyComp: React.FC<MyCompProps> = ({example}:MyCompProps) => {
  return <div className={styles.mycomp}>Hurz. {greeter(example)}       <Hurzi />
  </div>
}