import "./assets/unmoderated-test.css";
import "./assets/widget.css";
import { initCrowdPrompt } from "./unmoderated-test";
import { initCrowdWidget } from "./feedback-widget";

console.log(import.meta.env.DEV);
initCrowdPrompt();
initCrowdWidget();
