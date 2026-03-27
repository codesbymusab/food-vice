export function ReviewCard() {
    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden" data-alt="Reviewer profile picture">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQKs0TPGMV022LeCTZ4CCIcZz8Wh7DisOKfcjB4snfxy_KfcWaKxbMHXtZTjcPW9sigJMiFNHDn9G-2aeIdyGhczhwr8H33S7zXwhBhtiAz31yeVvRl15eyIHIsBNYRdsa1_lBlwZlimnh_gvE5UBqTMmSBwXqQxOeQK7McRZytLPYVDi6nwME8NFQYMeEMZ0LgZCp3Dh9kRGJ9a-14WbBAChRnYLs2jojw28mqMijAKWetI096yrfd82w1_Atpq-MFo2RsRNb_RI" />
                    </div>
                    <div >
                        <h6 className="font-bold text-sm">Jason Miller</h6>
                        <p className="text-xs text-slate-500">reviewed <span className="text-primary font-bold cursor-pointer">The Burger House</span></p>
                    </div>
                </div>
                <div className="flex gap-0.5">
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-primary fill-current">star</span>
                    <span className="material-symbols-outlined text-sm text-slate-300">star</span>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Solid burger, very juicy. The truffle fries are a must-try! A bit noisy for a first date, but great for a casual lunch.
            </p>
            <div className="rounded-2xl overflow-hidden" data-alt="Close up photo of a gourmet burger">
                <img className="w-full h-64 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwezWAfwjd5H_Br676Vu4prAcNoGm4Dj-1L2hBECAy1AsnDKobdC3zQ6YHG8xEzoa-eu8Kn9nlFlA6XPjlBpKWy8reUg5Cy9K8_F9BbYDCtD5gA6fjUfAbbyGKXO2Z_EjoBU9FQyXgOEOid0p7D3QqBYvw2BO_4CHjn5H9l2KVv33Ikh4nV_9RxfZORvA5OI72mb_VXS9dUKJwe0c0j-AepTUQMQBjb37okGqW8WtKv9BY0mAuAc1AFR06B2fTBk4pUdmY3hVI4BU" />
            </div>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-400">
                    <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">thumb_up</span> 18</button>
                    <button className="flex items-center gap-1 text-xs hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg">chat_bubble</span> 2</button>
                </div>
                <span className="text-xs text-slate-400">1 hour ago</span>
            </div>
        </div>
    )
}