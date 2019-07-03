/**
 * @class ExampleComponent
 */

import * as React from "react";

import styles from "./styles.css";

export type Props = { text: string };

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
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
    const [state, setState] = React.useState(initialValue);

    const injectedProps = {
      [stateName]: state,
      [stateUpdaterName]: setState
    };
    return <Component {...props} {...injectedProps} />;
  });

  return Wrapper;
};
