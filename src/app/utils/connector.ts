import axios from "axios";
import { domain } from "../constants";

const connector = axios.create({
  baseURL: domain,
});

export default connector;
