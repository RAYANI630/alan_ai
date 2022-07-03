import React from 'react'
import { Grid, Grow, Typography } from "@mui/material";
import NewsCard from "../NewsCard/Card";
import useStyles from "./styles";

const Cards = ({ articles }) => {

    const classes = useStyles();
    return (

        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (

                    <Grid item xs={12} sm={6} md={4} lg={3} display="flex">
                        <NewsCard article={article} i={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default Cards;