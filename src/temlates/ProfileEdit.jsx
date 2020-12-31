import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonModel, TextInput } from '../components/UIkit';
import { getUserName, getUserId } from '../reducks/users/selector';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spot from '../components/Spot';
import Header from '../components/Header/Header';
import { profileAdd } from '../reducks/users/operation';
import { db } from '../firebase';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ProfileEdit = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const userName = getUserName(selector)
    const uId = getUserId(selector)
    const classes = useStyles();
    const [goal, setGoal] = useState("");
    const [spot, setSpot] = useState("");

    const inputGoal = useCallback((event) => {
        setGoal(event.target.value)
    }, [setGoal])

    const inputSpot = useCallback((event) => {
        setSpot(event.target.value)
    }, [setSpot])

    useEffect(() => {
        db.collection("users").doc(uId).get().then(snapshot => {
            const user = snapshot.data()
            if (user.spot !== "" || user.goal !== "") {
                setSpot(user.spot)
                setGoal(user.goal)
            } else if (user.spot !== "" && user.goal === "") {
                setSpot(user.spot)
                setGoal("")
            } else if (user.spot === "" && user.goal !== "") {
                setSpot("")
                setGoal(user.goal)
            } else {
                setSpot("")
                setGoal("")
            }
            console.log(snapshot.data())
        })
    }, [])
    return (
        <>
            <Header />
            <div className="text-filed-container">
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Spot</InputLabel>
                    <Spot spot={spot} inputSpot={inputSpot} />
                </FormControl>
                <TextInput
                    fullWidth={true}
                    label={"目標"}
                    multiline={true}
                    rewuired={false}
                    rows={8}
                    value={goal}
                    type={"text"}
                    onChange={inputGoal}
                />
                <div className="space-l" />
                <div className="text-center">
                    <ButtonModel
                        onClick={() => dispatch(profileAdd(uId, spot, goal))}
                        label={"送信"}
                    />
                </div>
            </div>
        </>
    )
}
export default ProfileEdit