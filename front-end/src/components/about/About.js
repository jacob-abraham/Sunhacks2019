import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import biasImage from "../../img/biasDiagram.png"

function About() {
  return (
    <Fragment>
      <div>
        <Typography
          variant="h2"
          style={{
            textAlign: "center",
            marginTop: "7%",
            fontFamily: "Open Sans Condensed , sans-serif"
          }}
        >
          About Us
        </Typography>
      </div>
          <Typography
            variant="h4"
            style={{
              textAlign: "left",
              marginTop: "%5",
              fontStyle: "strong"
            }}
          >
            Misson:
          </Typography>
          <Typography
            variant="b2"
            style={{
              textAlign: "left",
              marginTop: "%5"
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Our mission is to provide a means where people can easily see the
            presence of bias in news sources as well as their own, through which
            they can work on improving their exposure to biased media and reach
            their own conclusions about current events.
          </Typography>
         <div>
          <Typography
            variant="h5"
            style={{
              textAlign: "left",
              marginTop: "%25",
              fontStyle: "italic"
            }}
          >
            How can this website help?
          </Typography>
        </div> 
          <Typography
            variant="b2"
            style={{
              textAlign: "left",
              marginTop: "%5"
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Our website tells users the bias 
            of the news sources they are reading. By doing so, users 
            are able to have an insight into the potential political 
            biases of a given media source. By being observant of 
            other’s as well as your own biases, you can begin to unravel 
            the truths of any given news.
          </Typography>

          
      <Typography
            variant="h4"
            style={{
              textAlign: "center",
              marginTop: "%5",
              fontStyle: "strong"
            }}
          >
            Behind the Scenes:
          </Typography>
          <Typography
            variant="h5"
            style={{
              textAlign: "left",
              marginTop: "%5",
              fontStyle: "italic"
            }}
          >
            How does it work?
          </Typography>
          <Typography
            variant="b2"
            style={{
              textAlign: "left",
              marginTop: "%5"
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;There are two main aspects 
            that make this website unique. The first is the 
            incorporation of media biases. Pulling on sources 
            with years of research in media bias studies, we 
            produced the best suited ranking system to determine 
            biases of news sources. After assigning values for 
            each of the utilized sources, we needed to create a 
            feature to be able to search these media outlets for 
            stories to show users. This is where the creation of 
            our restful application program interface (API) comes 
            in handy. Using this API, we are able to web scrape 
            over a dozen news sources for keywords and breaking 
            news. After our API gathers the necessary information, 
            it is returned as JSON to the front-end part of the 
            website to be displaced in a clean fashion for users.
          </Typography>
          <Typography
            variant="h5"
            style={{
              textAlign: "left",
              marginTop: "%5",
              fontStyle: "italic"
            }}
          >
            Why is it reliable?
          </Typography>
          <Typography
            variant="b2"
            style={{
              textAlign: "left",
              marginTop: "%5"
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;As stated above, we use data 
            pulled from sources who have years of experience. 
            Specifically, we used the information gathered from 
            &nbsp;<u>ad fontes media</u> who is responsible for the Media 
            Bias Chart. Using the most update version (Version 5.0), 
            we used their data as a basis to form our own version 
            best suited for our viewers. You can check out their website 
            and the official Media Bias Chart here:
          </Typography>
          <Typography variant="b2">
            <a href="https://adfontesmedia-demo.ehspook.com/">
              ad fontes media
            </a>
          </Typography>
          <Typography
            variant="h4"
            style={{
              textAlign: "center",
              marginTop: "%5",
              fontStyle: "strong"
            }}
          >
            Where to go from here?
          </Typography>
          <Typography
            variant="h5"
            style={{
              textAlign: "left",
              marginTop: "%5",
              fontStyle: "italic"
            }}
          >
            What's next?
          </Typography>
          <Typography
            variant="b2"
            style={{
              textAlign: "left",
              marginTop: "%5"
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;Given the time restrictions 
            that we had while creating this project, there are 
            many aspects that in the future we would love to add. 
            The main addition that we really wanted to include was 
            a personal bias section. This section can be seen 
            modeled in our Profile tab. Essentially, what would 
            happen is that after signing in, the user can view 
            articles via the website and every view would be cataloged 
            in a database staring all of the user’s history. From there, 
            the average of all news source visits would be calculated 
            and stored in a visual format where the user can see their 
            own bias based upon there viewing preferences.
          </Typography>
    </Fragment>
  );
}

export default About;
