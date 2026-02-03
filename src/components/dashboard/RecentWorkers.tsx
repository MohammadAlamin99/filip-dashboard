import { Star, MapPin } from "lucide-react";
import Card from "./Card";

export default function RecentWorkers() {
    const workers = [
        { 
            name: "Esra Zakaria", 
            email: "Michelevang@Yahoo.Com",
            location: "New York, NY",
            skills: ["Bartending", "Event Service", "Fine Dining"],
            rating: 4.9,
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
        },
        { 
            name: "Dina Nia", 
            email: "Owhite@Gmail.Com",
            location: "New York, NY",
            skills: ["Bartending", "Event Service", "Fine Dining"],
            rating: 4.9,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
        },
        { 
            name: "Marco Aurora", 
            email: "Felicia81@Yahoo.Com",
            location: "New York, NY",
            skills: ["Bartending", "Event Service", "Fine Dining"],
            rating: 4.9,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        },
    ];

    return (
        <Card className="p-4 sm:p-5">
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-semibold text-base">Recent workers</h2>
                <button className="text-[#FBB040] text-sm hover:underline">View All</button>
            </div>

            <div className="space-y-4">
                {workers.map((w) => (
                    <div key={w.name} className="flex justify-between items-start gap-3">
                        <div className="flex gap-3 min-w-0">
                            <img 
                                src={w.avatar} 
                                alt={w.name}
                                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                            />
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <p className="font-medium text-sm">{w.name}</p>
                                    <span className="text-xs text-[#4CAF50] bg-[#4CAF50]/20 px-2 py-0.5 rounded-full">
                                        Active
                                    </span>
                                </div>
                                <p className="text-xs text-gray-400 truncate">{w.email}</p>
                                <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                    <MapPin size={10} />
                                    {w.location}
                                </p>
                                <div className="flex flex-wrap gap-1.5 mt-2">
                                    {w.skills.map((skill) => (
                                        <span 
                                            key={skill} 
                                            className="text-xs text-gray-300 bg-[#2a2a2a] px-2 py-0.5 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 text-[#FBB040] bg-[#FBB040]/10 px-2 py-1 rounded flex-shrink-0">
                            <Star size={12} fill="#FBB040" />
                            <span className="text-sm font-medium">{w.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
