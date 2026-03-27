export function Footer(){
    return(
        <footer className="bg-slate-900 text-slate-400 py-16 px-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-primary mb-6">
<span className="material-symbols-outlined text-3xl font-bold">fastfood</span>
<h1 className="text-2xl font-black tracking-tight text-white">FoodVice</h1>
</div>
<p className="text-sm leading-relaxed mb-6">Discover the best culinary experiences in your city. Community driven reviews and reels for food lovers.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-sm">public</span>
</a>
<a className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-sm">share</span>
</a>
<a className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-sm">play_circle</span>
</a>
</div>
</div>
<div>
<h6 className="text-white font-bold mb-6">Explore</h6>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Restaurants</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Cuisines</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Top Foodies</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Write a Review</a></li>
</ul>
</div>
<div>
<h6 className="text-white font-bold mb-6">Company</h6>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Partner with Us</a></li>
</ul>
</div>
<div>
<h6 className="text-white font-bold mb-6">Legal</h6>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Safety Guidelines</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 text-center text-xs opacity-60">
<p>© 2024 FoodVice Social. All rights reserved.</p>
</div>
</div>
</footer>
    )
}