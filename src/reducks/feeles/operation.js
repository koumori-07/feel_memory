import { push } from "connected-react-router";
import { db, FirebaseTimestamp } from "../../firebase"
import { deleteFeelAction, fetchFeelAction } from "./action";

const feelesRef = db.collection("feeles")
// タグの保存
export const newFeel = (feel) => {
    return async (dispatch) => {
        const timestamp = FirebaseTimestamp.now();

        const data = {
            feel: feel,
        }
        const ref = feelesRef.doc();
        const id = ref.id;
        data.id = id

        return feelesRef.doc(id).set(data)
            .then(() => {
            dispatch(push('/new'))
            }).catch((error) => {
            throw new Error(error)
        })
    }
}
// タグの削除
export const deleteFeel = (id) => {
    return async (dispatch, getState) => {
        feelesRef.doc(id).delete()
            .then(() => {
                const prevFeeles = getState().feeles.list
                const nextFeeles = prevFeeles.filter(feel => feel.id !== id)
                dispatch(deleteFeelAction(nextFeeles))
        })
    }
}
// タグの取得
export const fetchFeel = () => {
    return async (dispatch) => {
        feelesRef.get()
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