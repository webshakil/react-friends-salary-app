import React from 'react';
import { useState } from 'react';

const Friends = () => {
  const data = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json));
  //console.log(data.name);

  //const first10 = data.slice(0, 10);
  const [friend, setFriend] = useState(10);

  return <div></div>;
};

export default Friends;
