import { push } from 'connected-react-router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import { fetchaddProfile } from '../reducks/profile/operation';
import { fetchProfile } from '../reducks/users/operation';
import { getUserName, getCreatedAt, getUserId, getSpot, getGoal } from '../reducks/users/selector';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    icon: {
        color: "green",
        marginTop: "10px",
        marginRight: "1vw",
        '&:hover': {
            background: "#c5e1a5",
            borderRadius: "30px",
            fontSize: "40px"
        },
        article: {
            margin: "0 auto",
            marginBottom: "3vh",
            marginTop: "3vh",
            fontFamily: 'Yu Mincho Light,YuMincho,Yu Mincho,游明朝体',
        }
    },
})
const Profile = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const uId = getUserId(selector)
    const uName = getUserName(selector);
    const spot = getSpot(selector);
    const goal = getGoal(selector);
    const classes = useStyles();
    const styles = { whiteSpace: 'pre-line' };

    useEffect(() => {
        dispatch(fetchProfile(uId))
    },[dispatch])
    return (
        <>
            <Header />
            <div className="main-container">
            <Card>
                <CardContent >
                <div className="text-center title-sample">{uName}</div>
                <div className="text-left" style={styles}>{goal}</div>
                        <EditIcon className={classes.icon}onClick={() => dispatch(push('/user/new/' + uId))}/>
                    </CardContent>
                </Card>
                </div>
        </>
    )
}
export default Profile