import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import { Calendar, Clock, MapPin } from "lucide-react";

const weekDays = [
    { day: "Sun", date: 4, available: 29 },
    { day: "Mon", date: 5, available: 54, isActive: true },
    { day: "Tue", date: 6, available: 47 },
    { day: "Wed", date: 7, available: 37 },
    { day: "Thu", date: 8, available: 38 },
    { day: "Fri", date: 9, available: 64 },
    { day: "Sat", date: 10, available: 29 },
];

const availableNow = [
    { name: "Sarah Johnson", location: "New York, NY", rate: "€25", experience: "5+ years" },
    { name: "Emily Rodriguez", location: "New York, NY", rate: "€25", experience: "2+ years" },
];

const currentlyWorking = [
    { name: "Marcus Chen", workplace: "At: Sky Longue Resturant", until: "Until 11:00 PM" },
];

const skillAvailability = [
    { skill: "Bartending", count: 45 },
    { skill: "Waiting Tables", count: 89 },
    { skill: "Event Service", count: 67 },
    { skill: "Catering", count: 34 },
    { skill: "Hostess", count: 23 },
    { skill: "Fine Dining", count: 56 },
];

export default function Availability() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState(1);

    return (
        <div className="flex min-h-screen bg-[#141414] text-gray-100">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-w-0">
                <Header onMenuClick={() => setSidebarOpen(true)} 
                title="Availability" subtitle="Track worker availability in real-time" />
                <main className="p-4 md:p-6 space-y-5 overflow-x-hidden">
                    {/* Week Overview */}
                    <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4 sm:p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Calendar size={18} className="text-gray-400" />
                            <h3 className="font-semibold">Week Overview</h3>
                        </div>
                        <div className="grid grid-cols-7 gap-2 sm:gap-3">
                            {weekDays.map((item, index) => (
                                <button
                                    key={item.day}
                                    onClick={() => setSelectedDay(index)}
                                    className={`p-2 sm:p-3 rounded-xl text-center transition-colors ${
                                        selectedDay === index
                                            ? "bg-[#FBB040] text-black"
                                            : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
                                    }`}
                                >
                                    <p className="text-xs sm:text-sm">{item.day}</p>
                                    <p className="text-lg sm:text-2xl font-bold my-1">{item.date}</p>
                                    <p className={`text-[8px] lg:text-xs ${selectedDay === index ? "text-black/70" : "text-[#4CAF50]"}`}>
                                        {item.available} available
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Available Now & Currently Working */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Available Now */}
                        <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4 sm:p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#4CAF50]" />
                                    <h3 className="font-semibold">Available Now</h3>
                                </div>
                                <span className="text-xs bg-[#4CAF50]/20 text-[#4CAF50] px-3 py-1 rounded-full">
                                    2 Workers
                                </span>
                            </div>
                            <div className="space-y-3">
                                {availableNow.map((worker, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-[#2a2a2a]/50 rounded-lg border-l-2 border-[#4CAF50]">
                                        <div>
                                            <p className="font-medium text-sm">{worker.name}</p>
                                            <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                                                <MapPin size={10} /> {worker.location}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[#4CAF50] font-semibold text-sm">{worker.rate}<span className="text-xs text-gray-400">/Hr</span></p>
                                            <p className="text-xs text-gray-400">{worker.experience}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Currently Working */}
                        <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4 sm:p-5">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-[#FBB040]" />
                                    <h3 className="font-semibold">Currently Working</h3>
                                </div>
                                <span className="text-xs bg-[#FBB040]/20 text-[#FBB040] px-3 py-1 rounded-full">
                                    2 Workers
                                </span>
                            </div>
                            <div className="space-y-3">
                                {currentlyWorking.map((worker, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-[#2a2a2a]/50 rounded-lg border-l-2 border-[#4CAF50]">
                                        <div>
                                            <p className="font-medium text-sm">{worker.name}</p>
                                            <p className="text-xs text-gray-400 mt-1">{worker.workplace}</p>
                                        </div>
                                        <span className="text-xs bg-[#2a2a2a] text-gray-300 px-3 py-1.5 rounded-full">
                                            {worker.until}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Skill Availability */}
                    <div className="bg-[#1f1f1f] border border-[#2a2a2a] rounded-xl p-4 sm:p-5">
                        <h3 className="font-semibold mb-4">Skill Availability</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                            {skillAvailability.map((item) => (
                                <div key={item.skill} className="bg-[#2a2a2a]/50 border border-[#3a3a3a] rounded-xl p-4 text-center">
                                    <p className="text-2xl sm:text-3xl font-bold text-white">{item.count}</p>
                                    <p className="text-xs text-gray-400 mt-1">{item.skill}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
