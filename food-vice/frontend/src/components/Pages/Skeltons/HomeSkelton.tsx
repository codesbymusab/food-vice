export function HomeSkelton() {
    return (





        <main className="pt-4 origin-top h-full overflow-clip">


            <section className="my-6 mx-20 relative flex min-h-[500px] flex-col items-center justify-center px-4 py-20 text-center lg:min-h-[600px] overflow-hidden">

                {/* Background skeleton */}
                <div className="absolute inset-0 rounded-2xl skeleton shadow-2xl"></div>

                {/* Foreground content skeleton */}
                <div className="relative z-10 w-full mx-auto flex flex-col items-center">
                    {/* Title (matches lg:text-7xl width) */}
                    <div className="w-[80%] h-12 lg:h-20 skeleton-dark opacity-60 mb-6 rounded-lg"></div>
                    {/* Subtitle (matches max-w-2xl) */}
                    <div className="w-[60%] h-6 lg:h-8 skeleton-dark mb-10 rounded-md opacity-60"></div>

                    {/* Search bar skeleton */}
                    <div className="flex flex-col md:flex-row gap-3 p-4 rounded-2xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl w-full max-w-2xl">
                        <div className="flex-1 h-12 skeleton-dark rounded-md"></div>
                        <div className="w-32 h-12 skeleton-dark rounded-md"></div>
                    </div>

                    {/* Popular tags skeleton */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <div className="w-20 h-8 skeleton-dark rounded-full"></div>
                        <div className="w-24 h-8 skeleton-dark rounded-full opacity-50"></div>
                        <div className="w-24 h-8 skeleton-dark rounded-full opacity-50"></div>
                        <div className="w-24 h-8 skeleton-dark rounded-full opacity-50"></div>
                    </div>
                </div>
            </section>



            <section className="px-6 py-12 max-w-7xl mx-auto overflow-hidden">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <div className="w-64 h-10 skeleton mb-2 rounded-md"></div>
                        <div className="w-40 h-4 skeleton rounded-md opacity-50"></div>
                    </div>
                    <div className="w-24 h-6 skeleton rounded-md"></div>
                </div>
                <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">

                    <div className="min-w-[320px] bg-surface rounded-2xl overflow-hidden shadow-lg">
                        <div className="w-full h-48 skeleton"></div>
                        <div className="p-6">
                            <div className="w-3/4 h-6 skeleton mb-3 rounded-md"></div>
                            <div className="flex gap-2 mb-4">
                                <div className="w-16 h-4 skeleton rounded-md"></div>
                                <div className="w-12 h-4 skeleton rounded-md"></div>
                            </div>
                            <div className="w-full h-4 skeleton rounded-md opacity-40"></div>
                        </div>
                    </div>

                    <div className="min-w-[320px] bg-surface rounded-2xl overflow-hidden shadow-lg">
                        <div className="w-full h-48 skeleton"></div>
                        <div className="p-6">
                            <div className="w-3/4 h-6 skeleton mb-3 rounded-md"></div>
                            <div className="flex gap-2 mb-4">
                                <div className="w-16 h-4 skeleton rounded-md"></div>
                                <div className="w-12 h-4 skeleton rounded-md"></div>
                            </div>
                            <div className="w-full h-4 skeleton rounded-md opacity-40"></div>
                        </div>
                    </div>

                    <div className="min-w-[320px] bg-surface rounded-2xl overflow-hidden shadow-lg">
                        <div className="w-full h-48 skeleton"></div>
                        <div className="p-6">
                            <div className="w-3/4 h-6 skeleton mb-3 rounded-md"></div>
                            <div className="flex gap-2 mb-4">
                                <div className="w-16 h-4 skeleton rounded-md"></div>
                                <div className="w-12 h-4 skeleton rounded-md"></div>
                            </div>
                            <div className="w-full h-4 skeleton rounded-md opacity-40"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-surface-container-highest py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-8 h-8 rounded-full skeleton-dark"></div>
                        <div className="w-48 h-10 skeleton-dark rounded-md"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:grid-cols-5">

                        <div className="aspect-[9/16] rounded-2xl skeleton-dark opacity-40 relative">
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="w-1/2 h-4 skeleton-dark rounded-md mb-2"></div>
                                <div className="w-3/4 h-3 skeleton-dark rounded-md opacity-50"></div>
                            </div>
                        </div>
                        <div className="aspect-[9/16] rounded-2xl skeleton-dark opacity-40"></div>
                        <div className="aspect-[9/16] rounded-2xl skeleton-dark opacity-40"></div>
                        <div className="aspect-[9/16] rounded-2xl skeleton-dark opacity-40"></div>
                        <div className="aspect-[9/16] rounded-2xl skeleton-dark opacity-40 hidden lg:block"></div>
                        <div className="aspect-[9/16] rounded-2xl skeleton-dark opacity-40 hidden lg:block"></div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8"><h3 className="text-2xl font-bold mb-6"><div className="w-64 h-8 skeleton rounded-md"></div></h3><div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 dark:border-slate-800 pb-4"><div className="w-20 h-8 skeleton rounded-full"></div><div className="w-24 h-8 skeleton rounded-full opacity-50"></div><div className="w-24 h-8 skeleton rounded-full opacity-50"></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"><div className="w-24 h-24 rounded-xl skeleton shrink-0"></div><div className="flex-1"><div className="flex justify-between items-start mb-2"><div className="w-3/4 h-5 skeleton rounded-md"></div><div className="w-8 h-5 skeleton rounded-md"></div></div><div className="w-1/2 h-3 skeleton mb-4 rounded-md opacity-50"></div><div className="w-24 h-4 skeleton rounded-md opacity-30"></div></div></div><div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"><div className="w-24 h-24 rounded-xl skeleton shrink-0"></div><div className="flex-1"><div className="flex justify-between items-start mb-2"><div className="w-3/4 h-5 skeleton rounded-md"></div><div className="w-8 h-5 skeleton rounded-md"></div></div><div className="w-1/2 h-3 skeleton mb-4 rounded-md opacity-50"></div><div className="w-24 h-4 skeleton rounded-md opacity-30"></div></div></div><div className="flex gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm"><div className="w-24 h-24 rounded-xl skeleton shrink-0"></div><div className="flex-1"><div className="flex justify-between items-start mb-2"><div className="w-3/4 h-5 skeleton rounded-md"></div><div className="w-8 h-5 skeleton rounded-md"></div></div><div className="w-1/2 h-3 skeleton mb-4 rounded-md opacity-50"></div><div className="w-24 h-4 skeleton rounded-md opacity-30"></div></div></div></div></section>

            <section className="px-4 mb-16 max-w-7xl mx-auto"><h3 className="text-2xl font-bold mb-6"><div className="w-56 h-8 skeleton rounded-md"></div></h3><div className="flex flex-col lg:flex-row gap-6 h-[500px]"><div className="flex-1 space-y-4"><div className="p-4 bg-white dark:bg-slate-800 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800 shadow-sm"><div className="w-20 h-20 rounded-xl skeleton shrink-0"></div><div className="flex-1"><div className="w-3/4 h-5 skeleton mb-2 rounded-md"></div><div className="w-1/2 h-4 skeleton mb-3 rounded-md opacity-50"></div><div className="w-24 h-3 skeleton rounded-md opacity-30"></div></div></div><div className="p-4 bg-white dark:bg-slate-800 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800 shadow-sm"><div className="w-20 h-20 rounded-xl skeleton shrink-0"></div><div className="flex-1"><div className="w-3/4 h-5 skeleton mb-2 rounded-md"></div><div className="w-1/2 h-4 skeleton mb-3 rounded-md opacity-50"></div><div className="w-24 h-3 skeleton rounded-md opacity-30"></div></div></div><div className="p-4 bg-white dark:bg-slate-800 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800 shadow-sm"><div className="w-20 h-20 rounded-xl skeleton shrink-0"></div><div className="flex-1"><div className="w-3/4 h-5 skeleton mb-2 rounded-md"></div><div className="w-1/2 h-4 skeleton mb-3 rounded-md opacity-50"></div><div className="w-24 h-3 skeleton rounded-md opacity-30"></div></div></div></div><div className="flex-[1.5] rounded-3xl skeleton opacity-30 relative min-h-[300px]"><div className="absolute bottom-4 left-4 w-48 h-16 skeleton-dark rounded-xl opacity-60"></div></div></div></section><section className="px-4 mb-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"><div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800"><div className="flex items-center justify-between mb-8"><div className="w-48 h-8 skeleton rounded-md"></div><div className="w-16 h-4 skeleton rounded-md opacity-50"></div></div><div className="space-y-8"><div className="pb-6 border-b border-slate-100 dark:border-slate-700"><div className="w-full h-6 skeleton mb-3 rounded-md"></div><div className="w-3/4 h-4 skeleton mb-4 rounded-md opacity-40"></div><div className="w-32 h-3 skeleton rounded-md opacity-30"></div></div><div className="pb-6 border-b border-slate-100 dark:border-slate-700"><div className="w-full h-6 skeleton mb-3 rounded-md"></div><div className="w-3/4 h-4 skeleton mb-4 rounded-md opacity-40"></div><div className="w-32 h-3 skeleton rounded-md opacity-30"></div></div><div><div className="w-full h-6 skeleton mb-3 rounded-md"></div><div className="w-3/4 h-4 skeleton mb-4 rounded-md opacity-40"></div><div className="w-32 h-3 skeleton rounded-md opacity-30"></div></div></div></div><div className="bg-primary p-8 rounded-3xl shadow-xl text-white opacity-90"><div className="w-64 h-8 skeleton-dark mb-8 rounded-md opacity-60"></div><div className="space-y-4"><div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl"><div className="w-8 h-8 skeleton-dark rounded-md opacity-40"></div><div className="w-12 h-12 skeleton-dark rounded-full opacity-60"></div><div className="flex-1"><div className="w-32 h-4 skeleton-dark mb-2 rounded-md"></div><div className="w-24 h-3 skeleton-dark rounded-md opacity-30"></div></div></div><div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl"><div className="w-8 h-8 skeleton-dark rounded-md opacity-40"></div><div className="w-12 h-12 skeleton-dark rounded-full opacity-60"></div><div className="flex-1"><div className="w-32 h-4 skeleton-dark mb-2 rounded-md"></div><div className="w-24 h-3 skeleton-dark rounded-md opacity-30"></div></div></div><div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl"><div className="w-8 h-8 skeleton-dark rounded-md opacity-40"></div><div className="w-12 h-12 skeleton-dark rounded-full opacity-60"></div><div className="flex-1"><div className="w-32 h-4 skeleton-dark mb-2 rounded-md"></div><div className="w-24 h-3 skeleton-dark rounded-md opacity-30"></div></div></div></div><div className="w-full h-12 skeleton-dark mt-6 rounded-xl opacity-80"></div></div></section>
        </main>

    )
}