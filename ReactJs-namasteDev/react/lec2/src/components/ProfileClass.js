// it normally a javascript class

import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'Dummy Name',
        location: 'Dummy Location',
      },
    };
    console.log('inside constructor');
  }

  async componentDidMount() {
    //API call will be made here
    console.log('Component Did Mount');
    const data = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await data.json();

    this.setState(() => {
      return { userInfo: json };
    });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render ');
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="image" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
