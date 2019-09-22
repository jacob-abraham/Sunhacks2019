import React, { Fragment } from "react";
import RelevantStories from "./RelevantStories";
import BreakingNews from "./BreakingNews";
import BiasSection from "./BiasSection";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../../App.css";

class Home extends React.Component {
  state = {
    breakingArticles: null,
    relevantArticles: null,
    loading: false,
    dataLoaded: false
  };

  UNSAFE_componentWillMount() {
    this.loadBreakingNewsData();
  }

  //make axios call when component mounts
  loadBreakingNewsData = async keyword => {
    this.setState({ loading: true });
    /**General get request to retrieve breaking news **/
    const res = await axios.get(
      `http://back-end-dev.us-west-1.elasticbeanstalk.com/keyword`
    );

    const data = await res.data;
    let dataArr = data.data; //JSON.parse(data); //an array of objects, each with a link and a src
    const breakingNewsArr = dataArr.slice(0, 5); //get the first 5 for the breaking news
    const relevantNewsArr = dataArr.slice(5, 11); //get the next 6 for the relevant news

    this.setState({
      breakingArticles: breakingNewsArr,
      relevantArticles: relevantNewsArr,
      loading: false,
      dataLoaded: true
    });
  };

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
