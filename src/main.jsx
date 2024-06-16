import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import "./style/style.scss";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);








// import { createRoot } from "react-dom/client";
// import App from "./components/app/App";
// import "./style/style.scss";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// git branch -M main
// git push -u origin main