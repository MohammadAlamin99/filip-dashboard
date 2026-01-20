import { ArrowRight, CheckCircle, Building2 } from "lucide-react";

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
        <div className="grid grid-cols-3 gap-7">
            {cards.map((card, index) => {
                const isCompleted = card.type === "completed";

                return (
                    <div
                        key={index}
                        className={`rounded-2xl px-5 py-7 flex justify-between items-center
              ${isCompleted
                                ? "bg-[#4CAF50]"
                                : "bg-[#1F1F1F]"
                            }
            `}
                    >
                        <div>
                            <p
                                className={`text-sm ${isCompleted ? "text-white" : "text-gray-400 mb-1.5"
                                    }`}
                            >
                                {card.title}
                            </p>
                            <h2
                                className={`text-3xl font-bold ${isCompleted ? "text-white" : "text-white"
                                    }`}
                            >
                                {card.value}
                            </h2>
                        </div>

                        {/* Right-side action / icon */}
                        {card.type === "pending" && (
                            <button className="flex items-center gap-1 bg-[#FBB040] text-black text-sm px-3 py-2 rounded-lg">
                                Review
                                <ArrowRight size={16} />
                            </button>
                        )}

                        {card.type === "completed" && (
                            <CheckCircle size={28} color="#A3E635" />
                        )}

                        {card.type === "active" && (
                            <Building2 size={28} color="#F59E0B" />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
