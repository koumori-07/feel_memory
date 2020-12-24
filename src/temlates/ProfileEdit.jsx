import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { ButtonModel, TextInput } from '../components/UIkit';
import { getUserName } from '../reducks/users/selector';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Spot from '../components/Spot';

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
    const selector = useSelector((state) => state);
    const userName = getUserName(selector)
    const classes = useStyles();
    const [goal, setGoal] = useState("");
    const [spot, setSpot] = useState("");

    const inputGoal = useCallback((event) => {
        setGoal(event.target.value)
    }, [setGoal])

    const inputSpot = useCallback((event) => {
        setSpot(event.target.value)
    }, [setSpot])
    return (
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
                rows={5}
                value={goal}
                type={"text"}
                onChange={inputGoal}
            />
            <div className="space-l" />
            <div className="text-center">
                <ButtonModel
                    onClick={() => console.log(spot, goal)}
                    label={"送信"}
                />
            </div>
        </div>
    )
}
export default ProfileEdit