import { Users, Briefcase, DollarSign } from "lucide-react";
import Card from "./Card";


export default function StatsRow() {
    const stats = [
        {
            title: "Total Users",
            value: "2,847",
            change: "+12% from last month",
            icon: Users,
            color: "text-yellow-400",
        },
        {
            title: "Active Workers",
            value: "1,532",
            change: "+8% from last month",
            icon: Users,
            color: "text-green-400",
        },
        {
            title: "Open Jobs",
            value: "156",
            change: "23 new this week",
            icon: Briefcase,
            color: "text-orange-400",
        },
        {
            title: "Revenue",
            value: "$126K",
            change: "+15.2% growth",
            icon: DollarSign,
            color: "text-green-400",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((s) => (
                <Card key={s.title} className="p-4">
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">{s.title}</p>
                        <s.icon size={18} className={s.color} />
                    </div>
                    <p className="text-2xl font-semibold mt-2">{s.value}</p>
                    <p className="text-xs text-green-400 mt-1">{s.change}</p>
                </Card>
            ))}
        </div>
    );
}
