import { push } from "connected-react-router";
import { db, FirebaseTimestamp } from "../../firebase"
import { newArticleAction } from "./action";


// articleの保存
export const newArticle = (title, article, images) => {
    return async(dispatch) => {
        const timestamp = FirebaseTimestamp.now();

        const data = {
            title: title,
            article: article,
            images: images,
            update_at: timestamp
        }
        const articleRef = db.collection("articles")
        const ref = articleRef.doc();
        const id = ref.id;
        data.id = id
        data.created_at = timestamp
            //doc()メソッド,DB内で、データを保存するための場所を採番
            //set()メソッド,IDの場所に保存
        return articleRef.doc(id).set(data) // firestoreに保存
            .then(() => {
                dispatch(newArticleAction({
                    title: data.title,
                    article: data.article,
                    images: data.images,
                }))
                dispatch(push('/'))
            }).catch((error) => {
                throw new Error(error)
            })
    }
}