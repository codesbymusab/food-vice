export function ReelCard() {
    return (
        <div className="max-w-[500px] mx-auto my-12 snap-start">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center opacity-90"
                    data-alt="Close up of sizzling steak in a pan"
                    style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4vOmvxpHMr3BUjgaCvCTQ-VuEypXfuUjf3S8L4zwabLdS7NPRWWq2R9KcUo413ap_CEQaQi985kQU-ss3jfIUcvQ7RRs8H_5XMj1VwDm5RsTZKudyqW0mBYhFFlT6bsNCj1F7bkvuHFFzL7PuZIvrX1jEe-NIAT6pUFpezacNhocTpYXh90XXPHhA3Jz7AbPtie-1i0dzfqbyH3Sumzi3EEbLB0ncQ99GBzxFmkPEY_m4gjgcJFcvi4BQEKyTR77NAfEO060YApY')"}}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60">
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                        className="bg-accent-cyan text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">New</span>
                    <span
                        className="bg-black/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px] fill-current">visibility</span>
                        42.1k
                    </span>
                </div>
                <button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl fill-current">play_arrow</span>
                </button>
                <div className="absolute right-4 bottom-24 flex flex-col gap-6 text-white">
                    <div className="flex flex-col items-center gap-1">
                        <button
                            className="size-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl">favorite</span>
                        </button>
                        <span className="text-xs font-bold">12.4k</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <button
                            className="size-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:text-accent-cyan transition-colors">
                            <span className="material-symbols-outlined text-2xl">chat</span>
                        </button>
                        <span className="text-xs font-bold">856</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <button
                            className="size-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-2xl">share</span>
                        </button>
                        <span className="text-xs font-bold">2.1k</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <button
                            className="size-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:text-accent-cyan transition-colors">
                            <span className="material-symbols-outlined text-2xl">bookmark</span>
                        </button>
                        <span className="text-xs font-bold">450</span>
                    </div>
                </div>
                <div className="absolute bottom-4 inset-x-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full border-2 border-primary bg-white overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="User profile picture"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMO0m4uU1T3WWUHTgRIwGnu8pSGnDDo9RGBCHTx0df02_268vTmL9RDbRNWu5J0HJIWPcrgM0o1cr6tCMCVejHiWfC3UFVn0GcyW7kE134hmUmPnYB6M_r3D5JcvtHckBNf3-3XZHSAR7C7SNAXmOwQbtY7Ld74SYvwJ4MQVWMVBVhegFUIbbrTcLcSvmhNWL77WaEDneR2TNRn8tQ57l14FFQ27QstcYtY1qJW9FqV_-qQMpp7gWrCFbHcX_FXXYUqPw5c-4jc1Y" />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-white font-bold text-sm">DeliciouslySimple <span
                                className="text-accent-cyan text-xs ml-1">· Follow</span></h3>
                            <p className="text-white/80 text-xs line-clamp-1">30-Minute Pan Seared Ribeye with
                                Garlic Butter Sauce 🥩 #steak #dinner</p>
                        </div>
                    </div>
                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden mt-2">
                        <div className="bg-primary w-1/3 h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}