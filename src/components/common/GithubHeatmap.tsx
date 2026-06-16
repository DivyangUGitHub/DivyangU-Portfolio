import { useEffect, useState } from "react";

export default function GithubHeatmap() {
  const [calendar, setCalendar] = useState<any>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => setCalendar(data));
  }, []);

  if (!calendar)
    return (
      <div className="text-center text-white">
        Loading...
      </div>
    );

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max">

        <h2 className="mb-6 text-xl font-bold text-white">
          {calendar.totalContributions} Contributions
        </h2>

        <div className="flex gap-[3px]">
          {calendar.weeks.map(
            (week: any, weekIndex: number) => (
              <div
                key={weekIndex}
                className="flex flex-col gap-[3px]"
              >
                {week.contributionDays.map(
                  (day: any) => (
                    <div
                      key={day.date}
                      className="h-[12px] w-[12px] rounded-[2px]"
                      style={{
                        backgroundColor:
                          day.color,
                      }}
                    />
                  )
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}