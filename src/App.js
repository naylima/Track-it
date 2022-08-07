import { BrowserRouter, Routes, Route } from "react-router-dom";

import Progress from "./Common/Progress";
import PrivatePage from "./Common/PrivatePage";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Habits from "./Components/Habits";
import Today from "./Components/Today";
import History from "./Components/History";

function App () {
    return (
        <BrowserRouter>
            <Progress>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Registration />} />
                    <Route 
                        path="/habitos" 
                        element={
                            <PrivatePage>
                                <Habits />
                            </PrivatePage>
                        }/>
                    <Route 
                        path="/hoje" 
                        element={
                            <PrivatePage>
                                <Today />
                            </PrivatePage>
                        }/>
                    <Route 
                        path="/historico" 
                        element={
                            <PrivatePage>
                                <History />
                            </PrivatePage>
                        }/>
                </Routes>
            </Progress>
        </BrowserRouter>
    )
}

export default App;