import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const FloatingTextBar = () => {
    const [headlineList, setHeadlineList] = useState([]);

    //Fetch headlines from backend and populate the headlines array
    const getHeadlines = async () => {
        let headlines = []

        let url = "https://behiqfeed.azurewebsites.net/latest";
        let response = await fetch(url, {
            mode: 'cors',
          });
        let responseAsJson = await response.json();
        for (let i = 0; i < responseAsJson.length; i++) {
            headlines.push(responseAsJson[i]);
          }
          setHeadlineList(headlines);
    }

    useEffect(() => {
        getHeadlines();
      }, []);

    return (
        <Marquee className="floating-text" gradient={false} speed="10">
            {headlineList.map((headline) => (
                <>
                {headline.containsKeyword 
                    ? 
                    <p className="headline-important" key={headline.id}>{headline.title}</p> 
                    :
                    <p className="headline" key={headline.id}>{headline.title}</p>
                }
                <p>&nbsp;&nbsp;{"|"}&nbsp;&nbsp;</p>
                </>
            ))}
        </Marquee>
    )
}

export default FloatingTextBar;