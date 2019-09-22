import axios from "axios";

export default function AxiosSearchCall(keyword) {
  axios
    .get(
      `http://back-end-dev.us-west-1.elasticbeanstalk.com/keyword?key=${keyword}`
    )
    .then(res => {
      //console.log(res.data.links);
      //console.log(res.data.links[0]);
      //console.log(cnnLinks[0]);

      const arrLinks = res.data.links[0];
      const cnnLinks = arrLinks.CNN;
      return cnnLinks;
    });
}
