import { push } from "connected-react-router";
import { db } from "../../firebase";
import { fetchProfile } from "./action";
const usersRef = db.collection('users')
const profileRef = db.collection('profile')

// プロフィール作成
export const addProfile = (uId,spot,goal) => {
    return async (dispatch)=>{
        const data = {
            spot: spot,
            goal: goal,
        }
        const ref = profileRef.doc();
        const id = ref.id;
        data.id = id

        return usersRef.doc(uId).collection("profile").doc(id).set(data, { marge: true })
            .then(() => {
                dispatch(push('/'))
            }).catch((error) => {
                throw new Error(error)
            })
    }
}
// プロフィールの取得
export const fetchaddProfile = (uId) => {
    return async (dispatch) => {
        usersRef.doc(uId).collection("profile").get()
            .then(snapshot => {
                const profileList = []
                snapshot.forEach(snapshot => {
                    const profile = snapshot.data()
                    profileList.push(profile)
                    console.log(profile)
                })
                dispatch(fetchProfile(profileList))
            })
    }
}