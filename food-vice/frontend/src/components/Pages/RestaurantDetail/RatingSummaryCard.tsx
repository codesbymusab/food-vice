export function RatingSummaryCard() {
    return (
        <div className="flex-1 w-full space-y-4">
            <div>
                <div className="flex justify-between text-sm font-bold mb-1">
                    <span>Food</span>
                    <span className="text-primary">4.9</span>
                </div>
                <div
                    className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "98%" }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm font-bold mb-1">
                    <span>Service</span>
                    <span className="text-primary">4.7</span>
                </div>
                <div
                    className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "94%" }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm font-bold mb-1">
                    <span>Ambiance</span>
                    <span className="text-primary">4.8</span>
                </div>
                <div
                    className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "96%" }}></div>
                </div>
            </div>
            <div>
                <div className="flex justify-between text-sm font-bold mb-1">
                    <span>Value</span>
                    <span className="text-primary">4.5</span>
                </div>
                <div
                    className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: "90%" }}></div>
                </div>
            </div>
        </div>
    )
}