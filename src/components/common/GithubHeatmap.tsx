import { useEffect, useState } from "react";

export default function GithubHeatmap() {
  const [calendar, setCalendar] = useState<any>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        console.log("GitHub Data:", data);
        setCalendar(data);
      })
      .catch(console.error);
  }, []);

  if (!calendar) {
    return (
      <div className="text-center text-white">
        Loading GitHub Activity...
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="mx-auto min-w-max rounded-2xl border border-white/10 bg-zinc-950 p-6">

        <h2 className="mb-6 text-2xl font-bold text-white">
          {calendar.totalContributions} Contributions in the last year
        </h2>

        <div className="flex gap-[3px]">
          {calendar.weeks.map((week: any, weekIndex: number) => (
            <div
              key={weekIndex}
              className="flex flex-col gap-[3px]"
            >
              {week.contributionDays.map((day: any) => (
                <div
                  key={day.date}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                  className="h-[11px] w-[11px] rounded-[2px]"
                  style={{
                    backgroundColor:
                      day.contributionCount > 0
                        ? day.color
                        : "#161b22",
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-end gap-2 text-xs text-zinc-400">
          <span>Less</span>

          <div className="h-3 w-3 rounded-[2px] bg-[#161b22]" />
          <div className="h-3 w-3 rounded-[2px] bg-[#0e4429]" />
          <div className="h-3 w-3 rounded-[2px] bg-[#006d32]" />
          <div className="h-3 w-3 rounded-[2px] bg-[#26a641]" />
          <div className="h-3 w-3 rounded-[2px] bg-[#39d353]" />

          <span>More</span>
        </div>
      </div>
    </div>
  );
}