import { push } from 'connected-react-router';
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ImageArea } from '../components/Article';
import FeelTest from '../components/Feel/FeelTest';
import Header from '../components/Header/Header';
import { ButtonModel, TextInput } from '../components/UIkit'
import { newArticle } from '../reducks/article/operation';
import { getFeeles } from '../reducks/feeles/selector';

const ArticleNew = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const saveFeeles = getFeeles(selector)

    const [title, setTitle] = useState(""),
        [article, setArticle] = useState(""),
        [images, setImages] = useState([]),
        [createFeeles, setCreateFeeles] = useState(""),
        [checkedItems, setCheckedItems] = useState([]);

    const inputTitle = useCallback((event) => {
        setTitle(event.target.value)
    }, [setTitle])



    const inputArticle = useCallback((event) => {
        setArticle(event.target.value)
    }, [setArticle])


    return (
        <>
            <Header />
            <div className="text-filed-container">
                <div className="text-center title-sample">投稿</div>
                <div className="space-l" />

                <FeelTest feeles={saveFeeles} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />

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
                        onClick={() => dispatch(newArticle(title, article, images, checkedItems))}
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