import { Outlet } from 'react-router-dom';
import ProfileFunctionComponent from './Profile';
import ProfileClassComponent from './ProfileClass';

const About = () => {
  return (
    <div>
      <h1>About Us Page </h1>
      <p>This a react router dom session</p>
      <Outlet />
      <ProfileFunctionComponent name={'Apple'} />
      <ProfileClassComponent name={'Apple'} />
    </div>
  );
};
export default About;
