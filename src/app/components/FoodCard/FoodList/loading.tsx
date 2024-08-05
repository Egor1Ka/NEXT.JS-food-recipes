export default function Loading() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array(9)
                .fill(0)
                .map((_, index) => (
                    <div key={index} className="m-4 h-64 max-w-lg animate-pulse overflow-hidden rounded-lg border border-gray-200 p-3 shadow-md">
                        <div className="h-40 w-full bg-gray-200"></div>
                        <div className="mt-4 h-6 w-3/4 bg-gray-200"></div>
                        <div className="mt-2 h-4 w-1/2 bg-gray-200"></div>
                    </div>
                ))}
        </div>
    )
}
