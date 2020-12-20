import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ImageArea } from '../components/Article';
import FeelTest from '../components/Feel/FeelTest';
import Header from '../components/Header/Header';
import { ButtonModel, TextInput } from '../components/UIkit'
import { db } from '../firebase';
import { newArticle } from '../reducks/article/operation';
import { getFeeles } from '../reducks/feeles/selector';

const ArticleNew = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const saveFeeles = getFeeles(selector);
    let id = window.location.pathname.split('/new')[1];


    const [title, setTitle] = useState(""),
        [article, setArticle] = useState(""),
        [images, setImages] = useState([]),
        [checkedItems, setCheckedItems] = useState([]);
    
    const inputTitle = useCallback((event) => {
        setTitle(event.target.value)
    }, [setTitle])

    const inputArticle = useCallback((event) => {
        setArticle(event.target.value)
    }, [setArticle])

    useEffect(() => {
        if (id !== "") {
            db.collection("articles").doc(id).get().then(snapshot => {
                const article = snapshot.data()
                setTitle(article.title)
                setArticle(article.article)
                setImages(article.images)
                setCheckedItems(article.items)
                console.log(article)
            })
        } else {
            setTitle("")
            setArticle("")
            setImages([])
            setCheckedItems([])
        }
    },[])

    return (
        <>
            <Header />
            <div className="text-filed-container">
                <div className="text-center title-sample">投稿</div>
                <div className="space-l" />

                <FeelTest feeles={saveFeeles} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>

                <TextInput
                    fullWidth={true}// 幅の指定
                    label={"title"}
                    margin="dense"
                    multiline={false}// 複数行の入力
                    required={true}// 必須か
                    rows={1}// 行数
                    value={title}
                    type={"text"}
                    onChange={inputTitle}
                />
                <TextInput
                    fullWidth={true}// 幅の指定
                    label={"article"}
                    margin="dense"
                    multiline={true}// 複数行の入力
                    required={true}// 必須か
                    rows={5}// 行数
                    value={article}
                    type={"text"}
                    onChange={inputArticle}
                />
                <ImageArea images={images} setImages={setImages} />

                <div className="text-center">
                    <ButtonModel
                        onClick={() =>
                            dispatch(newArticle(id, title, article, images, checkedItems))
                        }
                        label={"submit"} />
                </div>
                <div className="space-l" />

                <div className="text-center">
                </div>

            </div>
        </>
    )
}

export default ArticleNew