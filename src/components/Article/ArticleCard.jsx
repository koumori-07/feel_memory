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


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 5
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const ArticleCard = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const title = props.article.title;
    const article = props.article.article;
    const items = props.article.items;


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>

                </Typography>
                <Typography variant="h5" component="h2">
                    title:{title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    article:{article}
                </Typography>
                <div>
                    {items.length > 0 && (
                        items.map((items, index) => (
                            <Typography key={index}>
                                {items}
                            </Typography>
                        ))
                    )}
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            <button onClick={() => dispatch(deleteAricle(props.article.id))}>削除</button>
        </Card>
    );
}
export default ArticleCard