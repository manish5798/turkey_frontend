import axios from "axios";
import { smartsightAPI } from "../Components/constants/defaultValues";

export default axios.create({
  baseURL: smartsightAPI,
});
