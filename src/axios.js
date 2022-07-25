import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
   //baseURL: "https://us-central1-my-project-3d62b.cloudfunctions.net/api"
    baseURL: "http://localhost:5001/my-project-3d62b/us-central1/api"
});

export default instance;

////(http://localhost:5001/my-project-3d62b/us-central1/api).