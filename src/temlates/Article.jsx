import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import { db } from '../firebase';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import { getUserId } from '../reducks/users/selector';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: "0 auto",
        padding: "1rem",
        height: "auto",
        width: "calc(100% - 2rem)",
        maxWidth: "400px"
    },
    chip: {
        background: '#8bc34a',
        color: "#c7f7d4",
        fontSize: "20px"
    },
    title: {
        fontSize: "3rem",
        fontFamily: "klee,sans-serif",
        textAlign: "center",
    },
    article: {
        margin: "0 auto",
        marginBottom: "3vh",
        marginTop: "3vh",
        fontFamily: 'Yu Mincho Light,YuMincho,Yu Mincho,游明朝体',
    }
}))
const Article = () => {
    const selector = useSelector((state) => state);
    const uId=getUserId(selector)
    const path = selector.router.location.pathname
    const id = path.split('/article/')[1]
    const classes = useStyles();
    const [article, setArticle] = useState({});
    const [items, setItems] = useState([]);
    const [images, setImages] = useState([]);
    const styles = { whiteSpace: 'pre-line' };

    useEffect(() => {
        db.collection("users").doc(uId).collection("articles").doc(id).get().then(doc => {
            const data = doc.data()
            setArticle(data)
            setItems(data.items)
            setImages(data.images)
        })
    }, [setArticle])
    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.title}>
                    {article.title}
                </div>
                <Divider />
                <div className={classes.article} style={styles}
>                    {article.article}
                </div>
                <div className="item-list">
                            <Chip
                                icon={<LocalOfferIcon />}
                                className={classes.chip}
                                label={items}
                            />
                        </div>
                <div className="list-image-size">
                    {images.length > 0 && (
                        images.map((image, index) => (
                            <span key={index} className="image-size">
                                <img src={image.path} alt="投稿画像"/>
                            </span>
                        )
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default Article 