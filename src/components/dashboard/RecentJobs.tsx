import Card from "./Card";

export default function RecentJobs() {
    const jobs = [
        {
            title: "Wedding Reception Server",
            company: "Grand Ballroom Events",
            location: "Manhattan, NY",
            rate: "€25",
            date: "Jan 15",
        },
        {
            title: "Corporate Cocktail Bartender",
            company: "Sky Lounge Restaurant",
            location: "San Francisco, CA",
            rate: "€35",
            date: "Jan 12",
        },
        {
            title: "Corporate Cocktail Bartender",
            company: "Oceanview Catering",
            location: "Miami Beach, FL",
            rate: "€15",
            date: "Jan 20",
        },
    ];

    return (
        <Card className="p-4 sm:p-5">
            <div className="flex justify-between items-center mb-5">
                <h2 className="font-semibold text-base">Recent Jobs</h2>
                <button className="text-[#FBB040] text-sm hover:underline">View All</button>
            </div>

            <div className="space-y-3">
                {jobs.map((job, i) => (
                    <div
                        key={i}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4"
                    >
                        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 min-w-0">
                            <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <p className="font-medium text-sm sm:text-base">{job.title}</p>
                                    <span className="text-xs text-[#4CAF50] bg-[#4CAF50]/20 px-2 py-0.5 rounded-full">
                                        Open
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                                    {job.company} • {job.location}
                                </p>
                            </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:text-right flex-shrink-0">
                            <p className="text-[#FBB040] font-semibold text-sm sm:text-base">{job.rate}<span className="text-xs text-[#FBB040]">/Hr</span></p>
                            <span className="text-xs text-gray-500">
                                {job.date}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
