import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Body"
import History from './pages/History'
import Comic from './pages/Comic'
import Artwork from './pages/Artwork'
// import PlayNow from './pages/Playnow'
import Login from './pages/Login'
import Help from './pages/Help'

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            {/* Because there is a / in the parent route we dont need one in the beginning ot he other child routes */}
            <Route path="/" element={<Index/>} ></Route>
            <Route path="/history" element={<History/>}></Route>
            <Route path="/comic" element={<Comic/>} />
            <Route path="/artwork" element={<Artwork/>} />
            {/* <Route path="/playnow" element={<PlayNow/>} /> */}
            <Route path="/login" element={<Login/>} />
            <Route path="/help" element={<Help/>} />
        </Route>
    </>
))

export default router