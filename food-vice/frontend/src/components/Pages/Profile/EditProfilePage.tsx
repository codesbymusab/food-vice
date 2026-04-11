import { useNavigate } from "react-router"

export function EditProfilePage() {

    const navigate=useNavigate()

    return (
        <div className="mx-20 my-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <aside className="w-5/6 space-y-8 mx-auto lg:col-span-4">
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-stone-200/50 sticky top-32">
                    <h3 className="text-lg font-black mb-6">Profile Photo</h3>
                    <div className="relative group mx-auto w-48 h-48 mb-2">
                       <div className="mx-auto relative size-40 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="High resolution portrait of Alex Rivera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4cl4m11HMIS8aHWn5BWCaIftOiUW2UbJQM_cMqdtb02Oh4G9hk-uyIziNUlBS92JInrrBd7ydsxcrgI-RvGIZh6f4bsK85wPi07-2yMqf7KbkiPqhzsMDPoptYYZUfhHZAy7H6dm9psx9mw9UNLIzhKTdCp0eTqKF9xTUowbwVpGC4bbs83owtnlhoWC6fj_YCDyCLe7BkK9ZGIqh2WSJ0PB_GLj-7B6JUMM0g7s0lAiliOtD4869BhJoSlNPNGkH54XC_eib6xk" />
                        </div>
                        <button className="bg-slate-50/60 absolute bottom-10 right-5 w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center shadow-lg shadow-secondary/40 hover:scale-110 transition-transform" >
                            <span className="material-symbols-outlined">edit</span>
                        </button>
                    </div>
                    <div className="space-y-4">
                        <p className="text-xs text-on-surface-variant text-center px-4 leading-relaxed">
                            Upload a high-resolution JPG or PNG. Minimum 400x400px.
                        </p>
                        <div className="pt-4 flex flex-col gap-3">
                            <button className="w-full py-4 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                Save All Changes
                            </button>
                            <button className="w-full py-4 rounded-xl border-2 border-stone-100 text-stone-500 font-black uppercase tracking-widest text-xs hover:bg-red-200/70 transition-all" onClick={()=>navigate('/profile/1')}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            <section className="lg:col-span-8 space-y-12">
                <div className="grid grid-cols-1 gap-8">
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50">
                            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg">01</span>
                                Personal Details
                            </h2>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                                        <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 border-primary border-2 transition-all font-medium" type="text" value="Julian Vane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Username</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 font-bold">@</span>
                                            <input className="w-full bg-surface-container-low border-none rounded-xl pl-8 pr-4 py-3 bg-gray-100 focus:ring-2 focus:ring-secondary transition-all font-medium" type="text" value="julian_epicure" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-primary transition-all font-medium" type="email" value="julian.v@saffronhorizon.com" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50">
                            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg">02</span>
                                Security Settings
                            </h2>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Current Password</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-primary transition-all font-medium" placeholder="••••••••••••" type="password" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">New Password</label>
                                        <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-primary transition-all font-medium" type="password" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Confirm Password</label>
                                        <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-primary transition-all font-medium" type="password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-stone-200/50">
                            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg">03</span>
                                About You
                            </h2>
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Country</label>
                                        <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-primary transition-all font-medium appearance-none">
                                            <option value="usa">United States</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="ca">Canada</option>
                                            <option value="fr">France</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">City</label>
                                        <select className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-primary transition-all font-medium appearance-none" >
                                            <option value="new-york">New York</option>
                                            <option value="london">London</option>
                                            <option value="toronto">Toronto</option>
                                            <option value="paris">Paris</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-on-surface-variant ml-1">Culinary Bio</label>
                                    <textarea className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 bg-gray-100 focus:ring-2 focus:ring-primary transition-all font-medium resize-none" aria-rowcount={4}>Passionate home cook and street food enthusiast. On a mission to find the perfect spicy ramen in the city.</textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}