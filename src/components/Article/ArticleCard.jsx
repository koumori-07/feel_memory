import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { deleteAricle } from '../../reducks/article/operation';
import Chip from '@material-ui/core/Chip';
import ImageSwiper from '../UIkit/ImageSwiper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 5,
        height: '35%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontFamily: "klee,sans-serif",
        height: "25%"
    },
    pos: {
        marginBottom: 12,


    },
    tag: {
        background: "#c7f7d4"
    },
    icon: {
        color: "green",
        marginTop: "10px",
        '&:hover': {
            background: "#c5e1a5",
            borderRadius: "30px",
            height: "35px",
            width: "35px"
        },
    }
});
const ArticleCard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const title = props.article.title;
    const article = props.article.article;
    const items = props.article.items;
    const images = props.article.images;
    const timestamp = props.article.update_at.toDate()

    console.log(timestamp)
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className="text-left">
                <div className="container">


                    <div className="container_left">
                        <Typography variant="h5" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <div className="space-s" />
                        <div className="article">
                            {article}
                        </div>
                        <div className="day-space">
                          {timestamp.seconds}
                            </div>
                        <div className="item-list">
                            {items.length > 0 && (
                                items.map((items, index) => (
                                    <span key={index} className="space-right">
                                        <Chip
                                            label={items}
                                            className={classes.tag}
                                            variant="outlined"
                                        />
                                    </span>
                                ))
                            )}
                        </div>
                        <CardActions>
                            <DeleteForeverIcon
                                className={classes.icon}
                                onClick={() => dispatch(deleteAricle(props.article.id))}
                            />
                        </CardActions>
                    </div>



                    <div className="container_right">
                        <ImageSwiper images={images} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
export default ArticleCard