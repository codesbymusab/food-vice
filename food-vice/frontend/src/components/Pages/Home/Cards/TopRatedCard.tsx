export function TopRatedCard() {
    return (
        <div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0" data-alt="Gourmet sushi rolls on a platter">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiXEvJo08CrnUUr1NtWp29gwBctQg_psm9u3Z53ouHshokN8vGrUrC-tApjYKUBMb4bOGq-gbgWaquA6n-h0v2CMxc4Hk9AnEErmLpj5Z5KdQ9glIrwx_6BkWVHee3p50PmmAocEGSe62DEcp69CVB6nXEk64vlsIiX19L1D4z49NafCIEBhfLqVHBqHBfkZUISR7k4OUi5Hp4XB4wVN7uPnxe5Cijpj2pe8QzesrqKMpLpayO2B4xMqjmnYeD5QM24ML00E_FwJM" />
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold">Miso Happy Sushi</h4>
                    <span className="text-primary font-bold text-sm">4.9</span>
                </div>
                <p className="text-xs text-slate-500 mb-2">Japanese • Premium • $$$</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-accent-cyan">
                    <span className="material-symbols-outlined text-sm">verified</span> Verified Quality
                </div>
            </div>
        </div>
    )
}