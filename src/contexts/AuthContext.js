import React, {useContext, useState, useEffect} from 'react'
import {auth, db} from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    async function signup(email,password, name, surname, citizenId, birthDate, occupation, address) {
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            const user = res.user;
            await db.collection("users").add({
              uid: user.uid,
              name: name,
              surname: surname,
              citizenId: citizenId,
              birthDate: birthDate,
              occupation, occupation,
              address, address,
              email: email,
            });
          } catch (err) {
            console.error(err);
            alert(err.message);
          }

    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }
    const value = {
        currentUser,
        login,
        signup,
        logout
    }
    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
