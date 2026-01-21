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
            <div className="flex justify-between mb-7">
                <h2 className="font-semibold">Recent Jobs</h2>
                <button className="text-[#FBB040] text-sm">View All</button>
            </div>

            <div className="space-y-3">
                {jobs.map((job, i) => (
                    <div
                        key={i}
                        className="flex justify-between items-center bg-[#1F1F1F] border border-[#374151] rounded-2xl p-6"
                    >
                        <div className="flex gap-4">
                            <div>
                                <p className="font-medium mb-2">{job.title}</p>
                                <p className="text-sm text-gray-400">
                                    {job.company} • {job.location}
                                </p>
                            </div>
                            <div className="text-[14px] text-[#4CAF50] bg-green-500/20 w-fit px-2 py-1 rounded-2xl h-fit">Open</div>
                        </div>

                        <div className="text-right">
                            <p className="text-[#FBB040] font-semibold mb-2">{job.rate}</p>
                            <span className="text-xs text-[#6B7280] flex items-center gap-1 justify-end">
                                Jan 12
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
