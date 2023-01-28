import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './layout';
import About from './about';
import Normal from './normal_calculator';
import Home from './home';
import Nopage from './nopage';
import Scientific from './scientific';
import Standard from './standard';



const App = () => {
    return (
        <>
            <Router>

                <Routes>
                    <Route path="/" element={<Layout />} >
                        <Route index element={<Home />} />
                        <Route path="/about1" element={<About />} />
                        <Route path="/normal" element={<Normal />} />
                        <Route path="/scientific" element={<Scientific />} />
                        <Route path="/standard" element={<Standard />} />
                        <Route path="*" element={<Nopage />} />
                    </Route>
                </Routes>

            </Router>
        </>
    );
}
export default App;