import React, { useState, useEffect } from 'react';
import Loading from './loading';
import Users from './users';

const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getUsers = async () => {
    try {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching users:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Users users={users} />;
}

export default UseEffectAPI;