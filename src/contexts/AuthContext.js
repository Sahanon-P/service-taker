import React, {useContext, useState, useEffect} from 'react'
import {auth, db} from '../firebase'
import axios from 'axios'

const request = axios.create()

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    async function signup(email,password, name, surname, citizenId, birthDate, occupation, address) {
        const body = {
            "name": name,
            "surname": surname,
            "citizen_id": citizenId,
            "birth_date": birthDate,
            "occupation": occupation,
            "address": address,
            "password": password
        };
        const response = await request.post("https://flamxby.herokuapp.com/user/", body)
        console.log(response)
        try {
            const res = await auth.createUserWithEmailAndPassword(email, password);
            const user = res.user;
            await db.collection("users").add({
              uid: user.uid,
              citizen_id: citizenId,
              password: password
            });
          } catch (err) {
            console.error(err);
            alert(err.message);
          }

    }
    async function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
        // console.log(id)
        // console.log(pass)
        // var req = require('request');
        // req.post({
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded'
        //     },
        //     url: 'https://flamxby.herokuapp.com/login',
        //     body: `username=${id}&password=${pass}`
        // }, function(error, response, body){
        //     console.log(body)
        // })
    
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
