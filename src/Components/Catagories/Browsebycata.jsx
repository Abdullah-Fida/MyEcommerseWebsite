import { useRef } from "react";

export default function Browsebycata() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;
    const scrollAmount = 220;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const categories = [
    { name: "Phones", svg: (<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="18" r="0.8" fill="currentColor"/></svg>) },
    { name: "Computers", svg: (<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M8 20H16" strokeLinecap="round"/><path d="M12 16V20" strokeLinecap="round"/></svg>) },
    { name: "SmartWatch", svg: (<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="7" y="4" width="10" height="16" rx="3"/><circle cx="12" cy="12" r="2"/></svg>) },
    { name: "Camera", active: true, svg: (<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3.5" y="7" width="17" height="11" rx="1.2"/><path d="M8 7L10 4H14L16 7" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12.5" r="3"/></svg>) },
    { name: "HeadPhones", svg: (<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 13v2a2 2 0 0 0 2 2h0a1 1 0 0 0 1-1v-3a5 5 0 0 1 10 0v3a1 1 0 0 0 1 1h0a2 2 0 0 0 2-2v-2" strokeLinecap="round"/><path d="M3 13a9 9 0 0 1 18 0" strokeLinecap="round"/></svg>) },
    { name: "Gaming", svg: (<svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3.5" y="7.5" width="17" height="9" rx="3"/><path d="M8 11h.01M11 11h2M15 10v2M9 15c1 1 3 1 4 0" strokeLinecap="round"/></svg>) },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6">
        <span className="text-red-500 font-semibold text-sm">Categories</span>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Browse By Category</h2>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="bg-white border rounded-full p-2 shadow hover:bg-gray-100 transition"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div ref={containerRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`min-w-[150px] border rounded-xl p-6 flex flex-col items-center transition-all duration-200 cursor-pointer ${
              cat.active
                ? "bg-red-500 text-white shadow-lg"
                : "bg-white hover:shadow-md hover:border-red-500"
            }`}
          >
            {cat.svg}
            <span className="font-medium text-lg mt-2">{cat.name}</span>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-gray-200 mt-15"></div>

    </div>
  );
}
