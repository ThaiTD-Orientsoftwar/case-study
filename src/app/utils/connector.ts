import axios from "axios";
import { domain } from "../constants";

const cors = "https://thingproxy.freeboard.io/fetch";

const connector = axios.create({
  baseURL: domain,
  // baseURL: `${cors}/${domain}`
});

export default connector;
