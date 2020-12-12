import { push } from 'connected-react-router';
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ImageArea } from '../components/Article';
import FeelList from '../components/Feel/FeelList';
import { ButtonModel, TextInput } from '../components/UIkit'
import { newArticle } from '../reducks/article/operation';
import { newFeel } from '../reducks/feeles/operation';
import { getFeeles } from '../reducks/feeles/selector';

const ArticleNew = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const saveFeeles = getFeeles(selector)

    const [title, setTitle] = useState(""),
        [article, setArticle] = useState(""),
        [images, setImages] = useState([]),
        [feeles, setFeeles] = useState([]),
        [createFeeles, setCreateFeeles] = useState("");

    const inputTitle = useCallback((event) => {
        setTitle(event.target.value)
    }, [setTitle])

    const inputArticle = useCallback((event) => {
        setArticle(event.target.value)
    }, [setArticle])


    const inputCreateFeeles = useCallback((event) => {
        setCreateFeeles(event.target.value)
    }, [setCreateFeeles])
    
    return (
        <div className="text-filed-container">
            <div className="text-center title-sample">投稿</div>
            <div className="space-l" />
            <div className="text-left">
                <TextInput
                    fullWidth={false}// 幅の指定
                    label={"feel"}
                    margin="dense"
                    multiline={false}// 複数行の入力
                    required={true}// 必須か
                    rows={1}// 行数
                    value={createFeeles}
                    type={"text"}
                    onChange={inputCreateFeeles}
                />
                <ButtonModel onClick={() =>
                    dispatch(newFeel(createFeeles))
                }
                    label={"追加"} />
            </div>
            <div>
                {saveFeeles.length > 0 && (
                    saveFeeles.map(createFeels => (
                        <FeelList key={createFeels.id} feels={createFeels} />
                    ))
                )}
            </div>

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
                <ButtonModel onClick={() => dispatch(newArticle(title, article, images))}
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