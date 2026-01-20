import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import StatsRow from "../components/dashboard/StatsRow";
import RecentJobs from "../components/dashboard/RecentJobs";
import RecentWorkers from "../components/dashboard/RecentWorkers";
import PlatformActivity from "../components/dashboard/PlatformActivity";
import AprovalCard from "../components/dashboard/AprovalCard";
export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex min-h-screen bg-[#141414] text-gray-100">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main className="p-4 md:p-6 space-y-6">
                    <StatsRow />
                    <AprovalCard />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <RecentJobs />
                        <RecentWorkers />
                    </div>
                    <PlatformActivity />
                </main>
            </div>
        </div>
    );
}
