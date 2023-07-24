import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import firebase from 'firebase/compat'
import { firebaseConfig } from './firebaseConfig'
import User = firebase.User


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export async function login(email: string, password: string): Promise<User> {
    const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );

        return userCredential.user as User;
    } catch (error) {
        switch (error.code) {
            case 'auth/user-not-found':
                throw new Error('Мы не нашли такого пользователя');
            case 'auth/missing-password':
                throw new Error('Пароль не может быть пустым');
            case 'auth/invalid-email':
                throw new Error('Неверный email');
            case 'auth/wrong-password':
                throw new Error('Неправильный пароль');
            default:
                throw new Error('Произошла непредвиденная ошибка');
        }
    }
}

export async function logout() {
    const auth = getAuth();
    await signOut(auth);
}


