import Nullstack, { NullstackClientContext } from "nullstack";

import Application from "./src/Application";
import axios from "axios";

const context = Nullstack.start(Application) as NullstackClientContext;

context.start = async function start() {
  console.log("Iniciando o projeto");
  // https://nullstack.app/application-startup
};
context.api = axios.create({
  baseURL: "https://nekos.best/api/v2",
});
export default context;
