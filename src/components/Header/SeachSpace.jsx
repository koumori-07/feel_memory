import { push } from 'connected-react-router'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { db } from '../../firebase'
import { ButtonModel, TextInput } from '../UIkit'

const SeachSpace = () => {
    const dispatch = useDispatch();
    const [feeles, setFeeles] = useState("")
    const [seachFeeles, setSeachFeeles] = useState([])
    
    const inputFeeles = useCallback((event) => {
        setFeeles(event.target.value)
    }, [setFeeles])
    const filterList = (event) => {

    }
    const selectFeel = (event, path) => {
        dispatch(push(path));
    }

    useEffect(() => {
        db.collection('feeles').orderBy("order", "asc").get()
            .then(snapshot => {
                const list = []
                snapshot.forEach(snapshot => {
                    const feel = snapshot.data()
                    list.push({ func: selectFeel, label: feel.feel, id: feel.id, value: `/?feel=${feel.value}` })
                })
                setSeachFeeles(prevState => [...prevState, ...list])
            })
    }, [])
    return (
        <div>
            <TextInput
                fullWidth={false}// 幅の指定
                label={"検索"}
                margin="dense"
                multiline={false}// 複数行の入力
                required={true}// 必須か
                rows={1}// 行数
                value={feeles}
                type={"text"}
                onChange={inputFeeles}
            />
            <ButtonModel
                label={"検索"}
                onClick={()=>console.log("ok")}
            />
        </div>
    )
}
export default SeachSpace