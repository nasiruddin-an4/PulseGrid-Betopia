export default function KeyStatistics() {
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "98%", label: "Customer Satisfaction Rate" },
    { value: "90%", label: "Average Electricity Bill Reduction" },
    { value: "10+ MW", label: "Total Capacity Installed" }
  ];

  return (
    <div className="w-full bg-heading-3 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {stats.map((s, idx) => (
            <div key={idx} className="pt-8 md:pt-0 first:pt-0 flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                {s.value}
              </h3>
              <p className="text-white/70 text-xs md:text-sm uppercase tracking-wider font-medium max-w-[200px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
