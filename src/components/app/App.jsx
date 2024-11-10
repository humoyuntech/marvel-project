// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// import {MainPage, ComicsPage, Page404, SingleComicPage} from '../pages';
// import AppHeader from "../appHeader/AppHeader";

// const App = () => {
    
//     return (
//         <Router>
//             <div className="app">
//                 <AppHeader/>
//                 <main>
//                     <Switch>
//                         <Route exact path="/">
//                             <MainPage/>
//                         </Route>
//                         <Route exact path="/comics">
//                             <ComicsPage/>
//                         </Route>
//                         <Route exact path="/comics/:comicId">
//                             <SingleComicPage/>
//                         </Route>
//                         <Route path="*">
//                             <Page404/>
//                         </Route>
//                     </Switch>
//                 </main>
//             </div>
//         </Router>
//     )
// }

// export default App;

//=============================================================================================================

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/comics" element={<ComicsPage />} />
                        <Route path="/comics/:comicId" element={<SingleComicPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
