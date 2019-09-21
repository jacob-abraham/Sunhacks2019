import React, { Fragment } from "react";
import RelevantStories from "./RelevantStories";
import BreakingNews from "./BreakingNews";
import BiasSection from "./BiasSection";
import "../../App.css";

function Home() {
  return (
    <Fragment>
      <section class="container">
        <BreakingNews />
        <RelevantStories />
        <BiasSection />
      </section>
    </Fragment>
  );
}
export default Home;
