import { signInAction,signOutAction } from "./action";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from '../../firebase/index'

// 認証
export const listenAuthState = () => {
    return async (dispatch)=>{
        return auth.onAuthStateChanged(user => {
            if (user) {
                const uid=user.uid

                db.collection('users').doc(uid).get()
                    .then(snapshot => {
                        const data = snapshot.data();

                        dispatch(signInAction({
                            isSigneIn: true,
                            role: data.role,
                            uid: uid,
                            username: data.username,
                        }))
                    })
            } else {
                dispatch(push('/signup'))
            }
        })
    }
}
// サインイン
export const signIn = (email, password) => {
    return async (dispatch) => {
        // validation
        if (email === "" || password === "") {
            alert("必須項目が未入力です")
            return false
        }
        return auth.signInWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                if (user) {
                    const uid = user.uid

                    db.collection('users').doc(uid).get()
                        .then(snapshot => {
                            const data = snapshot.data();

                            dispatch(signInAction({
                                isSigneIn: true,
                                role: data.role,
                                uid: uid,
                                username: data.username,
                            }))
                            dispatch(push('/'))
                        })
                }
            }
            )
    }
}
// サインアップ
export const signUp = (username, email, password, confirmPassword) => {
    return async (dispatch) => {
        // validation
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("必須項目が未入力です")
            return false
        }
        if (password !== confirmPassword) {
            alert("パスワードが一致しません")
            return false
        }
        return auth.createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                if (user) {
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()

                    const userInitialData = {
                        created_at: timestamp,
                        email: email,
                        role: "customer",
                        uid: uid,
                        updated_at: timestamp,
                        username: username
                    }
                    db.collection('users').doc(uid).set(userInitialData)
                        .then(() => {
                            dispatch(push('/'))
                        })
                }
            })
    }
}
// サインアウト
export const signOut=()=>{
    return async(dispatch)=>{
        auth.signOut()// firebase.authのサインアウト
        .then(()=>{
            dispatch(signOutAction());
            dispatch(push('/signin'))
        })
    }
}