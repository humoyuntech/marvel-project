import { createRoot } from "react-dom/client";
import App from "./components/app/App";
import MarvelService from './services/MarvelService'
import "./style/style.scss";

const marvelService  = new MarvelService(); 

marvelService.getAllCharacters(1011052).then(res => res.data.results.forEach(item=>console.log(item.name)));

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
