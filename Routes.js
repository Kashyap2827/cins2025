import Home from "./Pages/Home";
import Members from "./Pages/Members";

const routes = [
    {
        path : "/",
        element : <Home></Home>
    },
    {
        path : "/members",
        element : <Members></Members>
    }
]

export default routes;