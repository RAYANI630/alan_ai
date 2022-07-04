import React from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./components/NewsCards/Cards";
import useStyles from "./styles";


const alanKey = '99c57d7f632c1906ce3c27fffccad7092e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {

  const [newsArticles, setnewsArticles] = useState([]);
  const [activeArticle, setactiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {


    alanBtn({

      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setnewsArticles(articles);
          setactiveArticle(-1);
        }
        else if (command === 'highlight') {
          setactiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
        else if (command === 'open') {

          if (number > articles.length) {
            alert("out of bounds. Try opening different article.");
          }
          else {
            window.open(articles[number - 1].url, '_blank');
          }
        }
      }
    })


  }, [])


  return (
    <div className="App">
      <div className={classes.logoContainer}>
        <img src="https://miro.medium.com/max/600/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" alt="logo" className={classes.alanLogo} />
        <div className={classes.ins}>
          <h3 style={{textAlign:'center'}}>General Instructions:</h3>
          <ul>
            <li>Try starting with "What is this app for?"</li>
            <li>You can say "Go back" to return to the homepage from the headlines page.</li>
          </ul>
        </div>
      </div>
      <Cards
        articles={newsArticles}
        activeArticle={activeArticle}
      />
    </div>
  );
}

export default App;
