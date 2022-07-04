import React, { useState, useEffect, createRef } from 'react'
import { Card, Typography, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@mui/material"
import useStyles from "./styles"
import classNames from "classnames";

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {

    const classes = useStyles();
    const [elRefs, setelRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

    useEffect(() => {
        setelRefs((refs) => Array(40).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {

        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }

    }, [i, activeArticle, elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, (activeArticle === i) ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://w7.pngwing.com/pngs/150/410/png-transparent-newspaper-computer-icons-journalist-news-corporation-business-text-people-logo.png'} />
                <div className={classes.just}>
                    <div className={classes.details}>
                        <Typography variant='subtitle2' color="textSecondary" component="h6" lineHeight={0.9}>{(new Date(publishedAt)).toDateString()}</Typography>
                        <Typography variant='subtitle2' color="textSecondary" component="h6" lineHeight={0.9}>{source.name}</Typography>
                    </div>
                    <Typography className={classes.title} variant='subtitle1' letterSpacing={0.2} lineHeight={1}><strong>{title}</strong></Typography>
                    <CardContent>
                        <Typography fontSize='12px' color="textSecondary" component="h6">{description}</Typography>
                    </CardContent>
                </div>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>To open the article say: Open article number</Button>
                <Typography variant='h5' color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;