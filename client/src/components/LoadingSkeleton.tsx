export function AppHeaderSkeleton() {
  return (
    <div className="bg-white px-4 py-5 border-b border-gray-200 animate-pulse">
      <div className="flex gap-4">
        <div className="w-24 h-24 bg-gray-300 rounded-3xl flex-shrink-0"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="h-3 bg-gray-300 rounded w-2/3 mb-3"></div>
          <div className="flex gap-3">
            <div className="h-4 bg-gray-300 rounded w-12"></div>
            <div className="h-4 bg-gray-300 rounded w-16"></div>
            <div className="h-5 bg-gray-300 rounded w-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ButtonSkeleton() {
  return (
    <div className="bg-white px-4 py-4 border-b border-gray-200 animate-pulse">
      <div className="h-12 bg-gray-300 rounded-full mb-3"></div>
      <div className="flex gap-3">
        <div className="flex-1 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex-1 h-10 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
}

export function CarouselSkeleton() {
  return (
    <div className="bg-white px-4 py-6 border-b border-gray-200 animate-pulse">
      <div className="flex gap-3 overflow-hidden pb-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex-shrink-0 w-40 h-72 bg-gray-300 rounded-2xl"></div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
        ))}
      </div>
    </div>
  );
}

export function ReviewSkeleton() {
  return (
    <div className="bg-white px-4 py-4 border-b border-gray-200 animate-pulse">
      <div className="flex gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
          <div className="flex gap-1 mb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-4 h-4 bg-gray-300 rounded"></div>
            ))}
          </div>
          <div className="h-3 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export function TextSkeleton() {
  return (
    <div className="bg-white px-4 py-6 border-b border-gray-200 animate-pulse">
      <div className="h-5 bg-gray-300 rounded w-1/3 mb-3"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
        <div className="h-3 bg-gray-300 rounded w-4/5"></div>
      </div>
    </div>
  );
}
