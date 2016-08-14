import styles from './index.css';
import React from 'react';
import dependency from './dependency';

export default class App extends React.Component {
  render() {
    return (
      <div>
	      <h1>Hello World!</h1>
	      <p>This React project just works including
          <span className={styles.blueBg}>
            module
          </span>
          local styles. :)
        </p>
	      <p>
          Global bootstrap css import works too as you can see on the following button.
        </p>
        <p>
          The dependency value is: {dependency.value}
        </p>
        <p>
          <a className="btn btn-primary btn-lg">
            Enjoy!
          </a>
        </p>
      </div>
    )
  }
}