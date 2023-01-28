// import Normal from './normal';
import { Routes, Route } from "react-router-dom";
import Innerlayout from './innerlayout';
import Scientific from './scientific';
const Home = () => {
    return (
        <>
            <div class="col-12 border text-center">
                <h1>Welcome in mycalculator.com </h1>
                <Routes>
                    <Route path="/" element={<Innerlayout />}>

                    </Route>
                    
                </Routes>


            </div>



        </>

    );
}
export default Home;