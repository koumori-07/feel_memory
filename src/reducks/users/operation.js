import { deleteUserAction, fetchProfileAction, signInAction, signOutAction } from "./action";
import { push } from "connected-react-router";
import { auth, db, FirebaseTimestamp } from '../../firebase/index'


const usersRef = db.collection('users')

// 認証
export const listenAuthState = () => {
    return async (dispatch) => {
        return auth.onAuthStateChanged(user => {
            if (user) {
                usersRef.doc(user.uid).get()
                    .then(snapshot => {
                        const data = snapshot.data()
                        if (!data) {
                            dispatch(push('/signin'))
                        }

                        // Update logged in user state
                        dispatch(signInAction({
                            email: data.email,
                            isSignedIn: true,
                            role: data.role,
                            uid: user.uid,
                            username: data.username,
                            createdAt: data.updated_at,
                            spot: data.spot,
                            goal: data.goal
                        }))
                    })
            } else {
                dispatch(push('/signin'))
            }
        })
    }
};

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
                    const uId = result.user.id
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
                                    createdAt: data.updated_at,
                                    spot: "",
                                    goal: ""
                                }))
                                dispatch(push('/'))
                            })
                    } else{
                        alert('存在せず')
                        return false
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
                        username: username,
                        spot: "",
                        goal: ""
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
export const signOut = () => {
    return async (dispatch) => {
        auth.signOut()// firebase.authのサインアウト
            .then(() => {
                dispatch(signOutAction());
                dispatch(push('/signin'))
            })
    }
}
// プロフィールの追加更新
export const profileAdd = (uId, spot, goal) => {
    return async (dispatch) => {
        usersRef.doc(uId).get()
            .then(snapshot => {
                const data = snapshot.data();
                const newData = {
                    email: data.email,
                    isSignedIn: true,
                    role: data.role,
                    uid: uId,
                    username: data.username,
                    spot: spot,
                    goal: goal
                }
                return usersRef.doc(uId).set(newData, { marge: true })
                    .then(() => {
                        dispatch(push('/user/' + uId))
                    })
            }
            )
    }
}

export const fetchProfile = (uId) => {
    return async (dispatch) => {
        usersRef.doc(uId).get()
            .then(snapshot => {
                dispatch(fetchProfileAction(snapshot.data()))
            })
    }
}
export const deleteAcount = (uId) => {
    return async (dispatch, getState) => {
        usersRef.doc(uId).delete()
            .then(() => {
                const prevUser = getState().users.list
                const nextUser = prevUser
                dispatch(deleteUserAction(nextUser))
                dispatch(push('/signin'))
        })
    }
}