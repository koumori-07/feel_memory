import { db } from "../../firebase"
import { deleteFeelAction, fetchFeelAction } from "./action";
const usersRef = db.collection('users')
const feelesRef = db.collection("feeles")
// タグの保存
export const newFeel = (uId,feel) => {
    return async (dispatch) => {
        const data = {
            feel: feel,
            checked:true
        }
        const ref = feelesRef.doc();
        const id = ref.id;
        data.id = id
        return usersRef.doc(uId).collection('feeles').doc(id).set(data,{marge:true})
            .then(() => {
                dispatch(fetchFeel(uId))
            }).catch((error) => {
            throw new Error(error)
        })
    }
}
// タグの削除
export const deleteFeel = (uId,id) => {
    return async (dispatch, getState) => {
        usersRef.doc(uId).collection('feeles').doc(id).delete()
            .then(() => {
                const prevFeeles = getState().feeles.list
                const nextFeeles = prevFeeles.filter(feel => feel.id !== id)
                dispatch(deleteFeelAction(nextFeeles))
        })
    }
}
// タグの取得
export const fetchFeel = (uId) => {
    return async (dispatch) => {
        usersRef.doc(uId).collection('feeles').get()
            .then(snapshot => {
                const feelList = []
                snapshot.forEach(snapshot => {
                    const feel = snapshot.data()
                    feelList.push(feel)
                })
                dispatch(fetchFeelAction(feelList))
        })
    }
}