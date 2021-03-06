import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import { db } from '../firebase';
import Chip from '@material-ui/core/Chip';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: "center",
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
    },
    article: {
        margin: "0 auto",
        marginBottom: "3vh",
        marginTop: "3vh",
        fontFamily: 'Yu Mincho Light,YuMincho,Yu Mincho,游明朝体'

    }
}))
const Article = () => {
    const selector = useSelector((state) => state);
    const path = selector.router.location.pathname
    const id = path.split('/article/')[1]
    const classes = useStyles();
    const [article, setArticle] = useState({});
    const [items, setItems] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        db.collection("articles").doc(id).get().then(doc => {
            const data = doc.data()
            setArticle(data)
            setItems(data.items)
            setImages(data.images)
        })
    }, [id])
    return (
        <>
            <Header />
            <div className={classes.container}>
                <div className={classes.title}>
                    {article.title}
                </div>
                <Divider />
                <div className={classes.article}>
                    {article.article}
                </div>
                <div className="article-tag">
                    {items.length > 0 && (
                        items.map((item, index) => {
                            return (
                                <span key={index} className="space-left ">
                                    <Chip
                                        icon={<LocalOfferIcon />}
                                        label={item}
                                        className={classes.chip}
                                    />
                                </span>
                            )
                        }
                        ))}
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