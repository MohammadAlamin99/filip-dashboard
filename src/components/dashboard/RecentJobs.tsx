import { CheckCircle } from "lucide-react";
import Card from "./Card";

export default function RecentJobs() {
    const jobs = [
        {
            title: "Wedding Reception Server",
            company: "Grand Ballroom Events",
            location: "Manhattan, NY",
            rate: "$25/hr",
        },
        {
            title: "Corporate Cocktail Bartender",
            company: "Sky Lounge Restaurant",
            location: "San Francisco, CA",
            rate: "$35/hr",
        },
        {
            title: "Corporate Cocktail Bartender",
            company: "Oceanview Catering",
            location: "Miami Beach, FL",
            rate: "$15/hr",
        },
    ];

    return (
        <Card className="p-5 lg:col-span-2">
            <div className="flex justify-between mb-4">
                <h2 className="font-semibold">Recent Jobs</h2>
                <button className="text-yellow-400 text-sm">View All</button>
            </div>

            <div className="space-y-3">
                {jobs.map((job, i) => (
                    <div
                        key={i}
                        className="flex justify-between items-center bg-[#181818] rounded-lg p-4"
                    >
                        <div>
                            <p className="font-medium">{job.title}</p>
                            <p className="text-sm text-gray-400">
                                {job.company} • {job.location}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-yellow-400 font-semibold">{job.rate}</p>
                            <span className="text-xs text-green-400 flex items-center gap-1 justify-end">
                                <CheckCircle size={12} /> Open
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
