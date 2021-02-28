import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/user', { withCredentials: true })
      .then(({ data }) => setUser(Boolean(data)))
      .catch(console.error)
      .finally(() => setIsReady(true))
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, isReady }}>
      {children}
    </UserContext.Provider>
  )
}