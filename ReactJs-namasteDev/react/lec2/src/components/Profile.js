import { useState } from 'react';

const Profile = (props) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h2>Profile Page</h2>
      <h3>Name: {props.name}</h3>
      <button onClick={() => setState(1)}>Count - {state}</button>
    </div>
  );
};

export default Profile;
