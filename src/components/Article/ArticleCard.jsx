import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { deleteAricle } from '../../reducks/article/operation';
import Chip from '@material-ui/core/Chip';
import ImageSwiper from '../UIkit/ImageSwiper';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { push } from 'connected-react-router';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 5,
        height: "15%",
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
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
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
        marginRight:"1vw",
        '&:hover': {
            background: "#c5e1a5",
            borderRadius: "30px",
            fontSize:"40px"
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

    const dateToString = (data) => {
        return data.getFullYear() + '/'
            + ('00' + (data.getMonth() + 1)).slice(-2) + '/'
            + ('00' + data.getDate()).slice(-2) + ' '
            + ('00' + data.getHours()).slice(-2) + ':'
            + ('00' + data.getMinutes()).slice(-2)
    };
    const timestamp = dateToString(props.article.update_at.toDate())

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className="text-left">
                <div className="container">
                    <div className="container_left">
                        <Typography variant="h5" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <div className="article">
                            {article}
                        </div>
                        <div className="item-list">
                            {items.length > 0 && (
                                items.map((items, index) => (
                                    <span key={index} className="space-left-s">
                                        <Chip
                                            icon={<LocalOfferIcon />}
                                            label={items}
                                            className={classes.tag}
                                            variant="outlined"
                                            onClick={()=>console.log(items)}
                                        />
                                    </span>
                                ))
                            )}
                        </div>
                        <CardActions className="space-between">
                            <div>
                                <DeleteForeverIcon
                                    className={classes.icon}
                                    onClick={() => dispatch(deleteAricle(props.article.id))}
                                />
                                <VisibilityIcon
                                    className={classes.icon}
                                    onClick={() => dispatch(push('/article/' + props.article.id))}
                                />
                                <EditIcon
                                    className={classes.icon}
                                    onClick={() => dispatch(push('/new/' + props.article.id))}
                                />
                            </div>
                            <span className="day-space">
                                {timestamp}
                            </span>
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