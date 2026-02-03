import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { Search, Users, Clock, ChevronDown, MapPin, Star, MoreVertical } from "lucide-react";

const statsData = [
    { label: "Total Workers", value: 5, icon: Users, iconBg: "rgba(251, 176, 64, 0.15)", iconColor: "#FBB040" },
    { label: "Available", value: 2, icon: () => <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />, iconBg: "transparent", iconColor: "#4CAF50" },
    { label: "Busy", value: 1, icon: Clock, iconBg: "rgba(251, 176, 64, 0.15)", iconColor: "#FBB040" },
    { label: "Offline", value: 2, icon: Users, iconBg: "rgba(107, 114, 128, 0.15)", iconColor: "#6B7280" },
];

const workersData = [
    {
        name: "Sarah Johnson",
        email: "Sarah.J@Email.Com",
        location: "New York, NY",
        status: "Active",
        rating: 4.9,
        skills: ["Bartending", "Event Service", "Fine Dining"],
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Marcus Chen",
        email: "Marcus.C@Email.Com",
        location: "Los Angeles, CA",
        status: "Active",
        rating: 4.9,
        skills: ["Waiting Tables", "Catering", "Setup/Cleanup"],
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Emily Rodriguez",
        email: "Emily.R@Email.Com",
        location: "Miami, FL",
        status: "Pending",
        rating: 4.9,
        skills: ["Hostess", "Event Coordination", "VIP Service"],
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
        name: "Sarah Johnson",
        email: "Sarah.J@Email.Com",
        location: "New York, NY",
        status: "Suspended",
        rating: 4.9,
        skills: ["Bartending", "Event Service", "Fine Dining"],
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
];

export default function Workers() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active": return "bg-[#4CAF50]/20 text-[#4CAF50]";
            case "Pending": return "bg-[#FBB040]/20 text-[#FBB040]";
            case "Suspended": return "bg-red-500/20 text-red-400";
            default: return "bg-gray-500/20 text-gray-400";
        }
    };

    return (
        <div className="flex min-h-screen bg-[#141414] text-gray-100">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-w-0">
                <Header onMenuClick={() => setSidebarOpen(true)} title="Workers" subtitle="Manage worker accounts and availability" />
                <main className="p-4 md:p-6 space-y-5 overflow-x-hidden">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                                placeholder="Search Worker  By Name, Email, Skills..."
                                className="w-full pl-10 pr-4 py-3 bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl text-sm focus:outline-none focus:border-[#FBB040]/50"
                            />
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-3 bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl text-sm">
                                All Status <ChevronDown size={16} />
                            </button>
                            <button className="flex items-center gap-2 px-4 py-3 bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl text-sm">
                                All <ChevronDown size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Worker Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {workersData.map((worker, index) => (
                            <div key={index} className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <img src={worker.avatar} alt={worker.name} className="w-10 h-10 rounded-full object-cover" />
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-medium text-sm">{worker.name}</span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(worker.status)}`}>
                                                    {worker.status}
                                                </span>
                                                <div className="flex items-center gap-1 text-[#FBB040]">
                                                    <span className="text-sm">{worker.rating}</span>
                                                    <Star size={12} fill="#FBB040" />
                                                </div>
                                            </div>
                                            <p className="text-xs text-gray-400">{worker.email}</p>
                                        </div>
                                    </div>
                                    <button className="p-1 hover:bg-[#2a2a2a] rounded">
                                        <MoreVertical size={16} className="text-gray-400" />
                                    </button>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                                    <MapPin size={12} />
                                    {worker.location}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {worker.skills.map((skill) => (
                                        <span key={skill} className="text-xs bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
