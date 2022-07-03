import React from 'react'
import { Card, Typography, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@mui/material"
import useStyles from "./styles"

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://w7.pngwing.com/pngs/150/410/png-transparent-newspaper-computer-icons-journalist-news-corporation-business-text-people-logo.png'} />
                <div className={classes.details}>
                    <Typography variant='body2' color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color="textSecondary">{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;