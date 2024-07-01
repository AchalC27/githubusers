import React, { useState, useEffect } from 'react';
import Loading from './loading';
import Users from './users';

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      setUsers(await response.json());
      setLoading(false);  // Only set loading to false after data is fetched
    } catch (error) {
      console.log("The error is " + error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Users users={users} />
    </>
  );
}

export default UseEffectAPI;
