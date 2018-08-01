import React from 'react';

import UserList from './UserList';
import UserDetails from './UserDetails';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <UserList />
        <UserDetails />
      </div>
    );
  }
}
