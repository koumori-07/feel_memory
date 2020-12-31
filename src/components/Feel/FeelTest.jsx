import { FormControl } from '@material-ui/core'
import React, { useCallback, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { getChecked } from '../../reducks/feeles/selector';
import { useDispatch, useSelector } from 'react-redux';
import { TextInput } from '../UIkit';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
})((props) => <Checkbox color="default" {...props} />);

const FeelTest = (props) => {
    const dispacth = useDispatch();
    const feeles = props.feeles
    const checkedItems = props.checkedItems
    const setCheckedItems = props.setCheckedItems
    const inputFeel = props.inputFeel
    const [checked, setChecked] = useState(false);
    const [feel, setFeel] = useState("");

    const handleChange = (event) => {
        const check = event.target.checked
        const id = event.target.id;
        const value = event.target.value;

        setCheckedItems([
            ...checkedItems,
            { id, value, check }
        ]
        )
        if (checkedItems.includes(event.target.value)) {
            setCheckedItems(checkedItems.filter(item => item !== event.target.value))
        } else {
            setCheckedItems([...checkedItems, event.target.value])
        }
    }

    // useEffect(() => {
    //     // checkedItems.forEach(snapshot => {
    //     // if (checkedItems !== "") {
    //     //     console.log(checkedItems)
    //     //     setCheckedItems(checkedItems)
    //     // } else {
    //     //     setChecked(false)

    //     // }
    //     // })
    // }, [checkedItems])
  
    return (
        <FormControl>
            <InputLabel id="demo-simple-select-outlined-label">Feel</InputLabel>
            <Select
                // id={feeles.id}
                value={checkedItems}
                onChange={inputFeel}
                label="feel"
            >
                {feeles.map((feel => {
                    return (
                        <MenuItem key={feel.id}>
                            {feel.feel}
                        </MenuItem>
                    )
                }))}
            </Select>
        </FormControl>
    )
}
export default FeelTest