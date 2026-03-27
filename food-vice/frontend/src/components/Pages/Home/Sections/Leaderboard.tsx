export function Leaderbaord() {
    return (
        <div className="bg-gradient-to-br from-primary to-orange-600 p-8 rounded-3xl shadow-xl shadow-primary/10 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined">military_tech</span> Top Foodies Leaderboard
            </h3>
            <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur p-4 rounded-2xl">
                    <span className="font-black text-2xl italic opacity-50">01</span>
                    <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden" data-alt="Profile photo of top foodie rank 1">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfVglr6hJAXuJOqflEguC87vfnHs7b_PDyZFkMAVabqPUBFZBT7vpxEk0bYqvYungbatZLYU_vCn48BeeTqcIeps4Bx_vsntbYl-_xBQcqfO0T87M4cQ7_eZjevIVDisNb_ismOgMN1bX8IooMgh_hTr14274HgSo7zCqufhzKY9zCooYdj-XAKn-vgntuQLspjOhHtqI6nots7DEoWjV9N1lXBO_I6gBEjDQ9t4tlkHIt-v7iUDY7AiVuaUOcR8VfNrH7i1tZ47g" />
                    </div>
                    <div className="flex-1">
                        <h6 className="font-bold">Marco 'Chef' Rossi</h6>
                        <p className="text-xs opacity-70">1,240 reviews • 45k points</p>
                    </div>
                    <span className="material-symbols-outlined text-yellow-300">verified</span>
                </div>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur p-4 rounded-2xl">
                    <span className="font-black text-2xl italic opacity-50">02</span>
                    <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden" data-alt="Profile photo of top foodie rank 2">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIQre1v8cdFJzoDA-3sfgmjRFixss49S6H4coFJrYikMnsJen5rvcM3BbobjCSDv1b9LqdzsMgd8O2lniIuKeMw_1aAtOJGDieNzUcm7hEBqvLTcRw62J_I1FwLaSsP5Bko26qHZP-YaEE3ERvI_JWReCcUIccuZ_OPn4Sy9VOOdbrxlDtFE4WX6tbeddz5a7KGR58ewFY7T7DJN1RVa6vIjya3dvkxgi7PcHSMLP9x3cnvljsR1dOE6yfqDpXt3ZcoBx9BEucWG4" />
                    </div>
                    <div className="flex-1">
                        <h6 className="font-bold">Sarah Sweettooth</h6>
                        <p className="text-xs opacity-70">890 reviews • 38k points</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur p-4 rounded-2xl">
                    <span className="font-black text-2xl italic opacity-50">03</span>
                    <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden" data-alt="Profile photo of top foodie rank 3">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnPIbkkkGFhC9Vs4f0aq2nEAhyEtxO8JKtEFK2CpUTV8sZwFuD_G2Bmys0tfShcnL1cs5dHDuvZBb-31v60c8WbzKEwYmxI2m6wFeNFbsVtYS9TS28rU_OeSvVHwLQMHBw377_7s4PL41j6b0J1gjqhyHBokHsKi1KCeN04pXJbf1-YEcYTsrgfqM7vQXHWew-Gv46HkhzHsJPcopSDfHTTQxt-DxFZf597d5bDZo4uSdfHLLgj2hADpOqnshlTJnM9ZkRbtHYKrE" />
                    </div>
                    <div className="flex-1">
                        <h6 className="font-bold">The Burger King</h6>
                        <p className="text-xs opacity-70">765 reviews • 31k points</p>
                    </div>
                </div>
            </div>
            <button className="w-full mt-6 bg-white text-primary font-bold py-3 rounded-xl hover:bg-slate-100 transition-colors">Join the Ranking</button>
        </div>
    )
}