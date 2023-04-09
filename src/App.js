import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.setState({ users: response.data, loading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}:{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

