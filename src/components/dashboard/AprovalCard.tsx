import {
    ArrowRight,
    Clock,
    CheckCircle,
    XCircle,
} from "lucide-react";

const approvalData = [
    {
        title: "Pending Approvals",
        count: 12,
        bgColor: "bg-yellow-400/20",
        btnColor: "bg-yellow-400",
        icon: Clock,
    },
    {
        title: "Approved Requests",
        count: 8,
        bgColor: "bg-green-400/20",
        btnColor: "bg-green-400",
        icon: CheckCircle,
    },
    {
        title: "Rejected Requests",
        count: 3,
        bgColor: "bg-red-400/20",
        btnColor: "bg-red-400",
        icon: XCircle,
    },
];

export default function ApprovalCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approvalData.map((item, index) => {
                const Icon = item.icon;

                return (
                    <div
                        key={index}
                        className={`px-5 py-7 rounded-2xl flex justify-between items-center transition-transform duration-200 hover:-translate-y-1 ${item.bgColor}`}
                    >
                        {/* Left Content */}
                        <div>
                            <h4 className="text-[#9CA3AF] font-normal text-[20px]">
                                {item.title}
                            </h4>
                            <h2 className="text-[32px] font-bold mt-1">
                                {item.count}
                            </h2>
                        </div>

                        {/* Right Button */}
                        <button
                            className={`p-3 ${item.btnColor} text-black rounded-lg cursor-pointer flex items-center gap-2 hover:opacity-90 transition`}
                        >
                            <Icon size={20} />
                            Review
                            <ArrowRight size={20} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
