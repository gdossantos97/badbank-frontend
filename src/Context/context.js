
import React, { createContext, useState, useContext, useEffect } from "react"

const BankContext = createContext(null);
export function  useBankContext (){
  return useContext(BankContext)
}
function ContextProvider({children}){
  const [users, setUsers] = useState([{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, loged: false}])
  const [currentUser, setCurrentUser] = useState()



  function login(user){
    const index = users.indexOf(user)
    const usersCopy = [...users]
    usersCopy[index].loged = true
    setUsers(usersCopy)
  }
  function logout(user){
    const index = users.indexOf(user)
    const usersCopy = [...users]
    usersCopy[index].loged = false
    setUsers(usersCopy)
  }

  function handleSetCurrentUser(user) {
    setCurrentUser(user)
  }

  const value = {
    users,
    currentUser,
    login,
    logout,
    handleSetCurrentUser
  }
    return (
      <BankContext.Provider value={value}>
        {children}
      </BankContext.Provider>
    )
  }

export default ContextProvider