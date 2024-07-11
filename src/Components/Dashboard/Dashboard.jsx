import { Outlet } from "react-router-dom";
import LogoBlack from "../Logo/LogoBlack";
import Dashboardbtn from "./Dashboardbtn";
import Sidebar from "./Sidebar/Sidebar";



const Dashboard = () => {
    return (
        <div className="min-h-screen bg-white mt-16 w-11/12 mx-auto p-6">
            <div className="flex flex-col md:flex-row justify-between bg-[#ededed] px-6 py-3 rounded-md">
                <LogoBlack />
                <Dashboardbtn />
            </div>

            <div className="grid grid-cols-12 mt-4">
                <div className="col-span-3 bg-[#EFF3F6] min-h-[602px] rounded-md">
                    <Sidebar />
                </div>
                <div className="col-span-9 p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;