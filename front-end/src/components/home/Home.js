import React, { Fragment } from "react";
import RelevantStories from "./RelevantStories";
import BreakingNews from "./BreakingNews";
import BiasSection from "./BiasSection";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../../App.css";

/** Home Screen that puts everything together and makes the axios call to the backend to retrieve sources **/
class Home extends React.Component {
  //state to hold the received data
  state = {
    breakingArticles: null,
    relevantArticles: null,
    loading: false,
    dataLoaded: false
  };

  //Use this method (unsafe = deprecated) to load the data before the component mounts
  UNSAFE_componentWillMount() {
    this.loadBreakingNewsData();
  }

  /** GET REQUEST to retrieve all sources */
  loadBreakingNewsData = async keyword => {
    this.setState({ loading: true });
    /**General url to retrieve breaking news **/
    const res = await axios.get(
      `http://back-end-dev.us-west-1.elasticbeanstalk.com/keyword`
    );

    const data = await res.data;
    let dataArr = data.data; //an array of objects, each with a link and a src
    const breakingNewsArr = dataArr.slice(0, 5); //get the first 5 for the breaking news
    const relevantNewsArr = dataArr.slice(5, 11); //get the next 6 for the relevant news

    //Set the state so other components can use data as props
    this.setState({
      breakingArticles: breakingNewsArr,
      relevantArticles: relevantNewsArr,
      loading: false,
      dataLoaded: true
    });
  };

  //If the data has not been received, show loading
  render() {
    return (
      <Fragment>
        <section className="container">
          <div style={{ textAlign: "center", margin: "2%" }}>
            {this.state.loading && <CircularProgress color="primary" />}
          </div>
          {this.state.dataLoaded && (
            <div>
              <BreakingNews data={this.state.breakingArticles} />
              <RelevantStories data={this.state.relevantArticles} />
            </div>
          )}
          <BiasSection />
        </section>
      </Fragment>
    );
  }
}
export default Home;
