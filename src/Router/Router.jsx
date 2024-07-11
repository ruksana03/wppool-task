import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TabOne from "../Components/IndexDemoTabs/TabOne/TabOne";
import TabTwo from "../Components/IndexDemoTabs/TabTwo";
import TabThree from "../Components/IndexDemoTabs/TabThree";
import TabFour from "../Components/IndexDemoTabs/TabFour";
import TabFive from "../Components/IndexDemoTabs/TabFive";


const Router = createBrowserRouter([
{
    path:'/',
    element:<App/>,
    children:[
        {
            path:'/',
            element:<TabOne/>
        },
        {
            path:'/tab2',
            element:<TabTwo/>
        },
        {
            path:'/tab3',
            element:<TabThree/>
        },
        {
            path:'/tab4',
            element:<TabFour/>
        },
        {
            path:'/tab5',
            element:<TabFive/>
        }
    ]
}
])

export default Router;