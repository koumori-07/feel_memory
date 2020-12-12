import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { deleteFeel } from '../../reducks/feeles/operation';

const useStyles = makeStyles(() => ({
    buttonColor: {
        color: "#618833",
        fontWeight: "bold",
        marginRight: "10px"
    }
}))


const FeelList = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Chip label={props.feels.feel}
                clickable
                className={classes.buttonColor}
                onClick={handleClickOpen}
            />
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">追加</Button>
                    <Button onClick={() => {
                        dispatch(deleteFeel(props.feels.id))
                    }} color="primary" autoFocus>削除</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
export default FeelList