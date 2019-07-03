/**
 * @class ExampleComponent
 */

import * as React from "react"

import styles from "./styles.css"

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props

    return <div className={styles.test}>Example Component: {text}</div>
  }
}

/**
 * withState
 * @param {string} stateName
 * @param {string} stateUpdaterName
 * @param {string} initialValue
 */
export const withState = (
  stateName: string,
  stateUpdaterName: string,
  initialValue: string
) => (Component: React.FC) => {
  const Wrapper = React.memo(props => {
    const [state, setState] = React.useState(initialValue)

    const injectedProps = {
      [stateName]: state,
      [stateUpdaterName]: setState,
    }
    return <Component {...props} {...injectedProps} />
  })

  return Wrapper
}

/**
 * withEffect
 * @param func
 * @param cleanup
 * @param watchedProps
 */
export const withEffect = (
  func: CallableFunction,
  cleanup: CallableFunction,
  watchedProps: Array<any>
) => (Component: React.FC) => {
  const Wrapper = React.memo(props => {
    React.useEffect(() => {
      func && func()
      return () => {
        cleanup && cleanup()
      }
    }, [...watchedProps])

    return <Component {...props} />
  })

  return Wrapper
}

/**
 * compose
 * @param funcs
 */
export const compose = (...funcs: any) =>
  funcs.reduce(
    (a: any, b: any) => (...args: any) => a(b(...args)),
    (arg: any) => arg
  )
