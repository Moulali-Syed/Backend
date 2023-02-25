import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileFunctionComponent from './Profile';
import ProfileClassComponent from './ProfileClass';

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    console.log('constructor');
  }

  componentDidMount() {
    //API calls made here
    console.log('component did mount');
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>About Us Page </h1>
        <p>This a react router dom session</p>
        <Outlet />
        <ProfileFunctionComponent name={'Apple'} />
        <ProfileClassComponent name={'Apple'} />
      </div>
    );
  }
}
