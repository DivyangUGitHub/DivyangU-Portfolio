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

  const getColor = (count: number) => {
    if (count === 0) return "#161b22";
    if (count <= 2) return "#0e4429";
    if (count <= 5) return "#006d32";
    if (count <= 10) return "#26a641";
    return "#39d353";
  };

<div className="mb-3 ml-8 flex gap-10 text-xs text-zinc-500">
  <span>Jun</span>
  <span>Jul</span>
  <span>Aug</span>
  <span>Sep</span>
  <span>Oct</span>
  <span>Nov</span>
  <span>Dec</span>
  <span>Jan</span>
  <span>Feb</span>
  <span>Mar</span>
  <span>Apr</span>
  <span>May</span>
</div>

  if (!calendar) {
    return (
      <div className="text-center text-white">
        Loading GitHub Activity...
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="w-fit">

        {/* Header */}
        <div className="mb-6 flex items-center gap-3 text-white">
          <svg
            viewBox="0 0 16 16"
            width="22"
            height="22"
            fill="currentColor"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
            -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66
            .07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
            0 0 .67-.21 2.2.82a7.65 7.65 0 012-.27c.68 0 1.36.09 2 .27
            1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12
            .51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95
            .29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2
            0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>

          <h2 className="text-lg font-semibold">
            {calendar.totalContributions} contributions in the last year
          </h2>
        </div>

        {/* Month Labels */}
        <div className="ml-10 mb-3 flex justify-between text-xs text-zinc-500">
          {months.map((month, index) => (
            <span key={index}>{month}</span>
          ))}
        </div>

        <div className="flex">

          {/* Day Labels */}
          <div className="mr-3 flex flex-col justify-between text-xs text-zinc-500">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>

          {/* Heatmap */}
        <div className="inline-flex gap-[3px]">
            {calendar.weeks.map((week: any, weekIndex: number) => (
              <div
                key={weekIndex}
                className="flex flex-col gap-[3px]"
              >
                {week.contributionDays.map((day: any) => (
                  <div
                    key={day.date}
                    title={`${day.contributionCount} contributions on ${day.date}`}
                    className="h-[11px] w-[11px] rounded-[2px] transition-all duration-200 hover:scale-125"
                    style={{
                      backgroundColor: getColor(day.contributionCount),
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-5 flex items-center gap-2">
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