import { Users, Briefcase, DollarSign } from "lucide-react";
import Card from "./Card";

export default function StatsRow() {
    const stats = [
        {
            title: "Total Users",
            value: "2,847",
            change: "+12% from last month",
            icon: Users,
            textColor: "#F59E0B",
            bgColor: "rgba(251, 176, 64, 0.10)",
        },
        {
            title: "Active Workers",
            value: "1,532",
            change: "+8% from last month",
            icon: Users,
            textColor: "#A3E635",
            bgColor: "#232D23",
        },
        {
            title: "Open Jobs",
            value: "156",
            change: "23 new this week",
            icon: Briefcase,
            textColor: "#F59E0B",
            bgColor: "rgba(251, 176, 64, 0.10)",
        },
        {
            title: "Revenue",
            value: "$126K",
            change: "+15.2% growth",
            icon: DollarSign,
            textColor: "#000",
            bgColor: "#D1D5DB",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <Card key={stat.title} className="px-5 py-2.5">
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400">
                                {stat.title}
                            </p>

                            <div
                                className="p-2 rounded-lg"
                                style={{ backgroundColor: stat.bgColor }}
                            >
                                <Icon
                                    size={18}
                                    style={{ color: stat.textColor }}
                                />
                            </div>
                        </div>

                        <p className="text-2xl font-semibold mt-2">
                            {stat.value}
                        </p>

                        <p className="text-xs text-[#4CAF50] mt-2">
                            {stat.change}
                        </p>
                    </Card>
                );
            })}
        </div>
    );
}
