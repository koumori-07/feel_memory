import { push } from 'connected-react-router';
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ImageArea } from '../components/Article';
import { ButtonModel, TextInput } from '../components/UIkit'
import { newArticle } from '../reducks/article/operation';

const ArticleNew = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(""),
          [article, setArticle] = useState(""),
          [images, setImages] = useState([]);

    const inputTitle = useCallback((event) => {
        setTitle(event.target.value)
    }, [setTitle])

    const inputArticle = useCallback((event) => {
        setArticle(event.target.value)
    }, [setArticle])

    return (
        <div className="text-filed-container">
            <div className="text-center title-sample">投稿</div>
            <div className="space-l" />
            <ImageArea images={images} setImages={setImages} />

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
            <div className="text-center">
                <ButtonModel onClick={() => dispatch(newArticle(title, article,images))}
                    label={"submit"} />
            </div>
            <div className="space-l" />

            <div className="text-center">
                <button onClick={() => dispatch(push('/'))}>top</button>
            </div>
        </div>
    )
}

export default ArticleNew