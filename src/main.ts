import "./assets/unmoderated-test.css";
import "./assets/widget.css";
import { initCrowdPrompt } from "./components/unmoderated-test";
import { initCrowdFeedbackWidget } from "./components/widget";
import { addWebEvaluation } from "./components/web-evaluation";
initCrowdPrompt();
initCrowdFeedbackWidget();
addWebEvaluation();
