import React from "react";
import BiasContainer from "./BiasContainer";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../../App.css";

function InfoPanes() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ padding: "2%", background: "#F5F5DC" }}>
        <BiasContainer />
      </div>

      <div
        style={{ padding: "2%", textAlign: "left", background: "#F5F5DC" }}
      >
        <Paper>
          <Typography style={{ padding: "1%" }} variant="h5">
          <i>What does this mean?</i>
          </Typography>
          <Typography variant="body1" style={{ padding: "2%" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;Your numerical score here represents your bias in news media 
          choices. The higher the number, the more you tend to view 
          biased news sources. The lower your score, the more you look 
          at both sides of the bias spectrum or do a good job of fining 
          generally unbiased sources. The color of your score represents 
          which side (blue for liberal and red for conservative) your bias 
          leans.
          </Typography>
          <Typography variant="body1" style={{ padding: "2%" }}>
          <u>Minimal Bias (0-3):</u> &nbsp;Congratulations! You have done 
          a great job so far giving yourself a wide range of sources 
          to find information from or have found very good sources 
          with minimal bias. Just remember, nothing is without bias, 
          and by figuring out what the bias is you can figure out what 
          information can be trusted.
          </Typography>
          <Typography variant="body1" style={{ padding: "2%" }}>
          <u>General Bias (4-7):</u> &nbsp;Good but not great. 
          You aren’t extremely biased, but you do tend to favor 
          one side. This could lead to untrue conclusions and 
          facts found in your articles. Try and look at articles 
          from your opposing bias to see what facts and statements 
          differ and from their come up with you own conclusions.
          </Typography>
          <Typography variant="body1" style={{ padding: "2%" }}>
          <u>Extreme Bias (8-10):</u> &nbsp;Needs improvement. 
          You seem to only view extremely biased news sources. 
          This can lead to lots of misinformation and biased 
          conclusions. Try and use different sources and make 
          note of the differences. Use our tools to try and avoid 
          extreme (high numbered) news outlets.
          </Typography>
        </Paper>
      </div>
      <div
        style={{ padding: "2%", textAlign: "center", background: "#F5F5DC" }}
      >
        <Paper>
          <Typography style={{ padding: "1%" }} variant="h5">
            Explore Your Bias:
          </Typography>
          <Typography variant="body1" style={{ padding: "2%" }}>
            If you want to find out more about your personal biases,
            check out the site below to take a quiz and see where your
            ideals align with political parties.
          </Typography>
          <Typography variant="h6">
          <a href="https://www.isidewith.com/political-quiz">
            Explore Your Bias
          </a>
        </Typography>
        </Paper>
      </div>
    </div>
  );
}
export default InfoPanes;
