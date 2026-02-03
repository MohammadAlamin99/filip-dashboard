import { ArrowRight, CheckCircle, Grid3X3 } from "lucide-react";

const cards = [
    {
        title: "Pending Approvals",
        value: 12,
        type: "pending",
    },
    {
        title: "Completed Today",
        value: 28,
        type: "completed",
    },
    {
        title: "Active Employers",
        value: 489,
        type: "active",
    },
];

export default function DashboardCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cards.map((card, index) => {
                const isCompleted = card.type === "completed";
                const isActive = card.type === "active";

                return (
                    <div
                        key={index}
                        className={`rounded-xl p-5 sm:p-6 flex justify-between items-center border
                            ${isCompleted
                                ? "bg-[#4CAF50] border-[#4CAF50]"
                                : "bg-[#1F1F1F] border-[#2a2a2a]"
                            }
                        `}
                    >
                        <div>
                            <p
                                className={`text-sm mb-1 ${isCompleted ? "text-white/90" : "text-gray-400"}`}
                            >
                                {card.title}
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                {card.value}
                            </h2>
                        </div>

                        {/* Right-side action / icon */}
                        {card.type === "pending" && (
                            <button className="flex items-center gap-1.5 bg-[#FBB040] text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-[#f5a623] transition-colors">
                                Review
                                <ArrowRight size={16} />
                            </button>
                        )}

                        {isCompleted && (
                            <CheckCircle size={32} className="text-white/80" strokeWidth={1.5} />
                        )}

                        {isActive && (
                            <Grid3X3 size={32} className="text-[#FBB040]" strokeWidth={1.5} />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
