import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { Search, Users, Clock, ChevronDown, Star, MoreVertical } from "lucide-react";

const statsData = [
    { label: "Total Employers", value: 3, icon: Users, iconBg: "rgba(251, 176, 64, 0.15)", iconColor: "#FBB040" },
    { label: "Active Employers", value: 2, icon: () => <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />, iconBg: "transparent", iconColor: "#4CAF50" },
    { label: "Jobs Posted", value: 1, icon: Clock, iconBg: "rgba(251, 176, 64, 0.15)", iconColor: "#FBB040" },
];

const employersData = [
    {
        name: "Michael Torres",
        initials: "MT",
        email: "Michael@Grandballroom.Com",
        company: "Grand Ballroom Events",
        status: "Active",
        jobsPosted: 145,
        rating: 4.9,
        location: "New York",
    },
    {
        name: "Jennifer Kim",
        initials: "Jk",
        email: "Jen@Skylounge.Com",
        company: "Sky Lounge Restaurant",
        status: "Active",
        jobsPosted: 145,
        rating: 4.9,
        location: "New York",
    },
    {
        name: "Robert Hayes",
        initials: "RH",
        email: "Robert@Oceanview.Com",
        company: "Oceanview Catering",
        status: "Pending",
        jobsPosted: 145,
        rating: 4.9,
        location: "New York",
    },
];

export default function Employers() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-[#4CAF50]/20 text-[#4CAF50]";
            case "Pending": return "bg-[#FBB040]/20 text-[#FBB040]";
            default: return "bg-gray-500/20 text-gray-400";
        }
    };

    return (
        <div className="flex min-h-screen bg-[#141414] text-gray-100">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-w-0">
                <Header onMenuClick={() => setSidebarOpen(true)} title="Employers" subtitle="Manage employer accounts and job postings" />
                <main className="p-4 md:p-6 space-y-5 overflow-x-hidden">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        {statsData.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div key={stat.label} className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4 sm:p-5 flex items-center gap-3">
                                    <div className="p-2 rounded-lg" style={{ backgroundColor: stat.iconBg }}>
                                        {typeof Icon === 'function' && Icon.prototype ? <Icon size={20} style={{ color: stat.iconColor }} /> : <Icon />}
                                    </div>
                                    <div>
                                        <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                                        <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Search and Filters */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-1">
                            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                placeholder="Search Worker  By Name, Email, Or Company..."
                                className="w-full pl-10 pr-4 py-3 bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl text-sm focus:outline-none focus:border-[#FBB040]/50"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-3 bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl text-sm">
                            All Status <ChevronDown size={16} />
                        </button>
                    </div>

                    {/* Employer Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {employersData.map((employer, index) => (
                            <div key={index} className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-sm font-medium text-gray-300">
                                            {employer.initials}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-medium text-sm">{employer.name}</span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(employer.status)}`}>
                                                    {employer.status}
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-400">{employer.email}</p>
                                        </div>
                                    </div>
                                    <button className="p-1 hover:bg-[#2a2a2a] rounded">
                                        <MoreVertical size={16} className="text-gray-400" />
                                    </button>
                                </div>
                                <p className="text-xs text-[#FBB040] mb-4">{employer.company}</p>
                                
                                <div className="flex justify-between items-center pt-3 border-t border-[#2a2a2a]">
                                    <div className="text-center">
                                        <p className="text-lg font-bold">{employer.jobsPosted}</p>
                                        <p className="text-xs text-gray-400">Jobs Posted</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg text-[#FCD34D] font-bold flex items-center justify-center gap-1">
                                            {employer.rating} <Star size={14} fill="#FBB040" className="text-[#FCD34D]" />
                                        </p>
                                        <p className="text-xs text-gray-400">Ratings</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-lg font-bold text-[#FCD34D]">{employer.location}</p>
                                        <p className="text-xs text-gray-400">Location</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
