import React, { useState, createContext, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import app from "../services/firebaseConnection";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const database = getDatabase(app);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
            }
            setLoading(false);
        }
        loadStorage();
    }, []);
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);


    async function signIn(email, password) {
        try {
            setLoading(true);
            const logIn = await signInWithEmailAndPassword(auth, email, password);
            const uid = logIn.user.uid;
            const userRef = ref(database, `user/${uid}`);
            const snapshot = await get(userRef);
            if (snapshot.exists()) {
                const userData = snapshot.val();
                setUser({ ...logIn.user, ...userData });
                storageUser(logIn.user); // Corrigido para chamar storageUser com logIn.user
            } else {
                console.error("Usuário não encontrado no banco de dados.");
            }
        } catch (error) {
            console.error("Erro ao logar:", error.message);
        } finally {
            setLoading(false);
        }
    }
    
    async function signUp(email, password, nome) {
        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const uid = userCredential.user.uid;
            await set(ref(database, `user/${uid}`), {
                saldo: 0,
                nome: nome
            });
            setUser(userCredential.user);
            storageUser(userCredential.user); // Corrigido para chamar storageUser com userCredential.user
        } catch (error) {
            console.error("Erro ao cadastrar usuário:", error.message);
        }finally {
            setLoading(false);
        }
    }
    
    // Função de armazenamento de usuário movida para fora da função signUp
    async function storageUser(userCredential) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(userCredential));
    }
    async function signOut() {
        try {
            setLoading(true);
            await auth.signOut();
            console.log('Signed out successfully');
            await AsyncStorage.removeItem('Auth_user');
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error.message);
        }finally {
            setLoading(false);
        }
    }
    
    
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
