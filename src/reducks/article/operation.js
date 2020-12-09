import { push } from "connected-react-router";
import { db, FirebaseTimestamp } from "../../firebase"
import { fetchArticleAction } from "./action";

const articleRef = db.collection("articles")

// articleの保存
export const newArticle = (title, article, images) => {
    return async (dispatch) => {
        const timestamp = FirebaseTimestamp.now();

        const data = {
            title: title,
            article: article,
            images: images,
            update_at: timestamp.toDate()
        }
        const ref = articleRef.doc();
        const id = ref.id;
        data.id = id
        data.created_at = timestamp
        //doc()メソッド,DB内で、データを保存するための場所を採番
        //set()メソッド,IDの場所に保存
        return articleRef.doc(id).set(data) // firestoreに保存
            .then(() => {
                dispatch(push('/'))
            }).catch((error) => {
                throw new Error(error)
            })
    }
}
// firebaseからの取得
export const fetchArticle = () => {
    return async (dispatch) => {
        articleRef.orderBy('update_at', 'desc').get()
            .then(snapshots => {
                const articleList = []
                
                snapshots.forEach(snapshot => {
                    const article = snapshot.data()
                    articleList.push(article)
                    console.log(snapshot.data().update_at.toString());
                })
                dispatch(fetchArticleAction(articleList))
            })
    }
}
