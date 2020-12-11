import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop:5
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
    const bull = <span className={classes.bullet}>•</span>;

    const title = props.article.title;
    const article = props.article.article;
    const images = props.article.images

    const seconds =props.article.update_at.seconds
    const nanoseconds = props.article.update_at.nanoseconds
    const nano= seconds

    console.log(new Date(nanoseconds).toString())
    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                {new Date(seconds).toString()}
   
                </Typography>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {article}
                </Typography>
                <Typography variant="body2" component="p">
                    <br />
                    {/* {images.length > 0 &&(
                        images.map(image=>(
                            <div key={image.id}>{image}</div>
                        ))
                    )} */}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
export default ArticleCard