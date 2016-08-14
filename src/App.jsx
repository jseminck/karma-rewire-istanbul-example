import styles from './index.css';
import React from 'react';
import dependency from './dependency';

export default class App extends React.Component {
  render() {
    return (
      <div>
	      <h1>Hello World!</h1>
        <p>
          The dependency value is: <span className="dependency">{dependency.value}</span>
        </p>
      </div>
    )
  }
}