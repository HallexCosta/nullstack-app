import Nullstack, { NullstackServerContext } from "nullstack";

import Application from "./src/Application";
import axios, { AxiosInstance } from "axios";

const context = Nullstack.start(Application) as NullstackServerContext & {
  api?: AxiosInstance;
};

context.start = async function start() {
  console.log("Inciando servidor nullstack");
  // https://nullstack.app/application-startup
};
context.api = axios.create({
  baseURL: "https://nekos.best/api/v2",
});
export default context;
