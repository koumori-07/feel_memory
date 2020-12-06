import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    "button": {
        background: '#9ad29c',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
})
const ButtonModel = (props) => {
    const classes = useStyles();
    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
    )
}
export default ButtonModel