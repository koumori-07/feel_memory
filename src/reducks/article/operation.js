import { push } from "connected-react-router";
import { db, FirebaseTimestamp } from "../../firebase"
import { deleteArticleAction, fetchArticleAction } from "./action";

const articleRef = db.collection("articles")

// articleの保存
export const newArticle = (id, title, article, images, items) => {
    return async (dispatch) => {
        const timestamp = FirebaseTimestamp.now();
        if (title === "" || article === "") {
            alert("未入力の項目があります\nタイトル,記事の入力を行ってください")
            return false
        }
        const data = {
            title: title,
            article: article,
            images: images,
            update_at: timestamp,
            items: items
        }
        if (id === "") {
            const ref = articleRef.doc();
            id = ref.id;
            data.id = id
            data.created_at = timestamp
        }
        //doc()メソッド,DB内で、データを保存するための場所を採番
        //set()メソッド,IDの場所に保存
        return articleRef.doc(id).set(data, { merge: true }) // firestoreに保存
            .then(() => {
                dispatch(push('/new'))
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
                })
                dispatch(fetchArticleAction(articleList))
            })
    }
}
// articleの削除
export const deleteAricle = (id) => {
    return async (dispatch, getState) => {
        articleRef.doc(id).delete()
            .then(() => {
                const prevArticle = getState().articles.list
                const nextArticle = prevArticle.filter(article => article.id !== id)
                dispatch(deleteArticleAction(nextArticle))
            })
    }
}
// feelesの抽出
const feelesRef = db.collection("feeles")
export const selectFeeles = (value) => {
    return async (dispatch) => {
        articleRef.orderBy('update_at', 'desc').get()
            .then(snapshots => {
                const articleList = []
                snapshots.forEach(snapshot => {
                    const article = snapshot.data()
                    if (article.items.includes(value)) {
                        articleList.push(article)
                        dispatch(fetchArticleAction(articleList))
                    } else {
                        dispatch(fetchArticleAction(articleList))
                    }
                })
            })
    }
}
// 全件表示
export const allFeeles = (value) => {
    return async (dispatch) => {
        articleRef.orderBy('update_at', 'desc').get()
            .then(snapshots => {
                const articleList = []
                snapshots.forEach(snapshot => {
                    const article = snapshot.data()
                    articleList.push(article)
                    dispatch(fetchArticleAction(articleList))

                })
            })
    }
}

// 日付で抽出
const dateToString = (data) => {
    return data.getFullYear() + '/'
        + ('00' + (data.getMonth() + 1)).slice(-2) + '/'
        + ('00' + data.getDate()).slice(-2) + ' '
};
export const dateSelectArticle = (date) => {
    return async (dispatch) => {
        articleRef.orderBy('update_at', 'desc').get()
            .then(snapshots => {
                const articleList = []
                snapshots.forEach(snapshot => {
                    const article = snapshot.data()
                    const fullDate = dateToString(date)
                    const newDate = dateToString(article.update_at.toDate())
                    if (fullDate <= newDate) {
                        articleList.push(article)
                        dispatch(fetchArticleAction(articleList))
                    } else {
                        dispatch(fetchArticleAction(articleList))
                    }
                })
            })
    }
}

