import { Link, useLocation } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pages = [
  { path: "/", number: 1 },
  { path: "/page-2", number: 2 },
  { path: "/page-3", number: 3 },
];

export function Navigation() {
  const location = useLocation();
  const currentIndex = pages.findIndex((page) => page.path === location.pathname);
  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-[#2a2a2a] px-6 py-4 rounded-full shadow-lg">
      {prevPage ? (
        <Link
          to={prevPage.path}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ChevronLeft className="size-5" />
          <span className="text-sm">Previous</span>
        </Link>
      ) : (
        <div className="w-20" />
      )}

      <div className="flex items-center gap-2">
        {pages.map((page, index) => (
          <Link
            key={page.path}
            to={page.path}
            className={`size-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-[#4dd4d4] w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {nextPage ? (
        <Link
          to={nextPage.path}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm">Next</span>
          <ChevronRight className="size-5" />
        </Link>
      ) : (
        <div className="w-20" />
      )}
    </div>
  );
}
