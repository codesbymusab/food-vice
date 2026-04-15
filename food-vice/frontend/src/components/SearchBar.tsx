export function SearchBar({placeHolder}:{placeHolder:string}) {
    return (
        <div className="w-full">
            <label className="relative flex flex-col w-full group">
                <span
                    className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                <input
                    className="w-full h-14 pl-12 pr-4 rounded-xl border-none bg-white dark:bg-slate-900 shadow-sm focus:ring-2 focus:ring-primary/50 text-base placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder={placeHolder} type="text"/>
            </label>
        </div>
    )
}