export function Hero(){
    return (
        <section className="relative flex min-h-[500px] flex-col items-center justify-center px-4 py-20 text-center lg:min-h-[600px] overflow-hidden">

            <div className="absolute rounded-2xl inset-0 -z-15 bg-cover bg-center mb-6" style={{
                backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBYBmBasRKQlMWbwS3g0l75ZbiJ5iRrdq8lk8Eepj8OUpKdC0g4H7lY4Tbm8nfU31xYP0FdW-pzgn_2ECOQ75pJJEF4vYAxvmURCyDXac_62O4WKjK_HvYLsCFBntTI_xJh8oFj2ofKcLY-1tbAh-q9YrF8PNrdvy8boI-dpz3zYfTYlUbD4QHvRhanLIBfs7CHcYsEubKPDsZkN5Cy6TckaONwI89EJJD9pDZUdCctt--EwsmzHzzE7dBBg5QnUkNrgojaexIsoM')"
            }}></div>
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="mb-6 text-4xl font-black text-white lg:text-7xl leading-tight">
                    Find Your Next <br /><span className="text-primary">Favorite Meal</span>
                </h2>
                <p className="mb-10 max-w-2xl mx-auto text-lg text-slate-100/90 lg:text-xl">
                    Discover the best food places, trending reels, and top-rated restaurants near you.
                </p>

                <div className="flex flex-col md:flex-row gap-3 p-2 rounded-2xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
                    <div className="flex-1 flex items-center px-4 gap-2">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                        <input className="pl-2 w-full h-full border-none border-none bg-transparent focus:ring-0 text-white placeholder-slate-300" placeholder="Use my location" type="text" />
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined">search</span> Search
                    </button>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <span className="text-sm font-medium text-slate-200 uppercase tracking-wider self-center mr-2">Popular:</span>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-primary text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Burgers</a>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-accent-cyan text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Pizza</a>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-primary text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Sushi</a>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-accent-cyan text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Cafes</a>
                </div>
            </div>
        </section>
    )
}