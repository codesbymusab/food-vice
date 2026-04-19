import { useEffect, useState } from "react";
import { AddReviewForm } from "./AddReviewForm";
import { RatingSummaryCard } from "./RatingSummaryCard";
import { ReviewTile } from "./ReviewTile";

export function RestaurantDeatilPage() {

    
    const [showReviewForm, setShowReviewForm] = useState<boolean>(false)
    useEffect(() => {
        if (!showReviewForm) {
            window.scrollTo(0, 0);
        }
    }, [showReviewForm]);

    return (
        <main className="flex-1">

            <div className="relative h-[400px] w-full @container">
                <div className="absolute inset-0 bg-cover bg-center"
                    data-alt="Elegant restaurant interior with warm lighting and wooden tables"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvLslAqT3wfDgfn381_3dpcKq_VxCZWPTXdaW2YONEcXNrrUrd-hE_A8Z-hHDzIoCxDi7kfomQRDUmLHb1sXPmTYMKRk6y2WEgJxtokRivIJfiOQKwW3H32YbKrHEdvez69BSVyY9bH5cQbt9gN0dgQ2WFWsNr2_6P5XFpvZ7ltAjWj4LMPqnVIcM0M-zi9EBS3fsOYQCHl-uwQ7QxDlbPlQX52AOJ8_Z7RY7zD8CqJGeHBxHgPaIWW3-0r2coBzAiPkbL2CvfTUI')" }}>
                    <div
                        className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/40 to-transparent">
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full px-4 md:px-10 pb-8">
                    <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <span
                                    className="rounded bg-primary px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-background-dark">Open
                                    Now</span>
                                <span className="text-sm font-medium text-slate-300">Italian • Mediterranean</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">L'Anima Osteria</h1>
                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200">
                                <div className="flex items-center gap-1 text-primary">
                                    <span className="material-symbols-outlined fill-1">star</span>
                                    <span className="text-lg font-bold">4.8</span>
                                    <span className="text-slate-400 font-normal">(1,240 reviews)</span>
                                </div>
                                <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                                <span>$$$ • High-end Dining</span>
                                <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                    <span>0.8 miles away</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <button
                                className="flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined text-lg">bookmark</span> Save
                            </button>
                            <button
                                className="flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-md px-4 py-2 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined text-lg">share</span> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="sticky top-[65px] z-40 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
                <div className="mx-auto max-w-7xl px-4 md:px-10">
                    <div className="flex gap-8 overflow-x-auto no-scrollbar py-4">
                        <a className="tab-active text-sm font-bold whitespace-nowrap" href="#">Overview</a>
                        <a className="text-slate-500 hover:text-primary text-sm font-medium whitespace-nowrap"
                            href="#">Reviews</a>
                        <a className="text-slate-500 hover:text-primary text-sm font-medium whitespace-nowrap"
                            href="#">Photos</a>
                        <a className="text-slate-500 hover:text-primary text-sm font-medium whitespace-nowrap"
                            href="#">Reels</a>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 md:px-10 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-10">

                        <section>
                            <h3 className="text-xl font-bold mb-4">About the Restaurant</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                Experience authentic Italian cuisine in a modern, sun-drenched setting. L'Anima Osteria
                                brings the heart of the Mediterranean to the city, featuring hand-pressed pastas,
                                locally-sourced seafood, and an extensive award-winning wine cellar. Our open kitchen
                                allows diners to witness the artistry of our chefs.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div
                                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary">wifi</span>
                                    <span className="text-sm font-medium">Free WiFi</span>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary">deck</span>
                                    <span className="text-sm font-medium">Outdoor Seating</span>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary">local_parking</span>
                                    <span className="text-sm font-medium">Valet Parking</span>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary">wine_bar</span>
                                    <span className="text-sm font-medium">Full Bar</span>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary">accessible</span>
                                    <span className="text-sm font-medium">Accessible</span>
                                </div>
                                <div
                                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                                    <span className="material-symbols-outlined text-primary">calendar_today</span>
                                    <span className="text-sm font-medium">Reservations</span>
                                </div>
                            </div>
                        </section>

                        <section
                            className="p-6 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="text-center md:border-r border-slate-200 dark:border-slate-800 md:pr-12">
                                    <div className="text-5xl font-bold text-primary mb-1">4.8</div>
                                    <div className="flex justify-center text-primary mb-2">
                                        <span className="material-symbols-outlined fill-1">star</span>
                                        <span className="material-symbols-outlined fill-1">star</span>
                                        <span className="material-symbols-outlined fill-1">star</span>
                                        <span className="material-symbols-outlined fill-1">star</span>
                                        <span className="material-symbols-outlined fill-1">star_half</span>
                                    </div>
                                    <p className="text-xs font-bold uppercase text-slate-500">Global Score</p>
                                </div>
                                <RatingSummaryCard />
                            </div>
                        </section>

                        <section>

                            {showReviewForm ? <AddReviewForm setShowReviewForm={setShowReviewForm} />

                                : (<>
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-xl font-bold">Recent Reviews</h3>
                                        <button className="flex items-center justify-center gap-2 text-primary font-bold text-sm hover:scale-110" onClick={() => { setShowReviewForm((prev) => !prev) }}>
                                            <span className="material-symbols-outlined text-lg">edit</span> <span className="hover:underline underline-offset-4">Write a Review</span>
                                        </button>
                                    </div>


                                    <div className="space-y-8">

                                        <ReviewTile />
                                        <ReviewTile />

                                    </div>
                                </>
                                )
                            }
                        </section>
                    </div>

                    <aside className="space-y-8">

                        <div
                            className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
                            <div className="h-48 bg-slate-200 relative">
                                <img className="w-full h-full object-cover" data-alt="Street map of downtown area"
                                    data-location="Chicago"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA_WfyTfpjKD8O2xwJ-eCxhxSGuNiy10OFVBYkRGpg_KYKzht7im6_JFUkJZ-Obad51e2v6eXJX8cXriuNwimXtE_pFDS6lHNXQE5JVVRM8J732fJmfkY3k99xf3CIwMk_sVQDuhsJwm6s0umlVq_Gs5Kslo2oRqUaCYQkLb_kgb5z5kmSTVn_NOSq0D054Wd1rZQFpxFBLVOSosjbz7uqKl7-8VxbPAxVJrq9pUGT7ef9FsfHmMiXS14C_t1yKwJ8qP2GAS1ZQlw" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                        className="material-symbols-outlined text-primary text-4xl drop-shadow-md">location_on</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start gap-3 mb-4">
                                    <span className="material-symbols-outlined text-primary mt-1">pin_drop</span>
                                    <div>
                                        <p className="font-bold">123 Culinary Ave</p>
                                        <p className="text-sm text-slate-500">Downtown District, CHI 60601</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 mb-4">
                                    <span className="material-symbols-outlined text-primary mt-1">call</span>
                                    <p className="font-medium text-slate-900 dark:text-slate-100">+1 (312) 555-0198</p>
                                </div>
                                <div className="flex items-start gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary mt-1">language</span>
                                    <a className="font-medium text-accent-cyan hover:underline"
                                        href="#">lanima-osteria.com</a>
                                </div>
                                <button
                                    className="w-full py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Get
                                    Directions</button>
                            </div>
                        </div>

                        <div
                            className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">schedule</span> Hours
                            </h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between font-bold text-primary">
                                    <span>Monday</span>
                                    <span>11:30 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tuesday</span>
                                    <span>11:30 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Wednesday</span>
                                    <span>11:30 AM - 10:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Thursday</span>
                                    <span>11:30 AM - 11:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Friday</span>
                                    <span>11:30 AM - 12:00 AM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span>10:00 AM - 12:00 AM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span>10:00 AM - 09:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4">People Also Liked</h4>
                            <div className="space-y-4">

                                <a className="flex gap-4 group" href="#">
                                    <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Restaurant 1"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                            data-alt="Sushi platter with fresh tuna and salmon"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP1wSTQ1nPm47MK2M0TfsULTTJ4ioznryTAe3Qe7e0xi3imuvqrsLT9z4bbdNw46-hXFIFHMOduCqZfV4ps0EER-ENCcD8nuITg2vkSfEUhXbVrFwazuZkUm4wxV5EDOBl8IeXzEl3RqgFB3x7GwpLStaea5PIPoD5x6q66TzLHa9xCTXOWbY1fjVn7dn7eXCEzmickCO4-lnQYjjU-33cVb9ehYSkAkrvr90iu76m034Qd7MQNW1-iCeCW_JJtQV5NQLNpsdlXfo" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-bold group-hover:text-primary transition-colors">Yuzu Zen Garden
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-primary">
                                            <span className="material-symbols-outlined text-xs fill-1">star</span> 4.7 •
                                            Japanese
                                        </div>
                                        <p className="text-xs text-slate-500">1.2 miles away</p>
                                    </div>
                                </a>

                                <a className="flex gap-4 group" href="#">
                                    <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Restaurant 2"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                            data-alt="Grilled steak with chimichurri sauce"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa7EOUJEi8vUwhTjkPtzRA_Xe-qJjVny_bP-7Ci5SJSxWkSI09NvFuXM4a6w39qeGCkqTC83iL5UatCNefqnY5dl3Z8KUmE5iRKSe2P9ZrFRzDKANyq77lbmVbv_UUAyPQQrjSCotsUrPjR908Ys8VGIhm0bYrtcbZtS-SkuETjEVi2FkGiXD7tx8EKfrT_l7aseAWYLX4UNk2WqavKXc7KQ2D6bCeHHHOGpjk5iy-VSRwhxL3ngxHJaeVwHLRpuMHdfh2R1WrP9I" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-bold group-hover:text-primary transition-colors">The Rustic
                                            Butcher</p>
                                        <div className="flex items-center gap-1 text-xs text-primary">
                                            <span className="material-symbols-outlined text-xs fill-1">star</span> 4.9 •
                                            Steakhouse
                                        </div>
                                        <p className="text-xs text-slate-500">0.5 miles away</p>
                                    </div>
                                </a>

                                <a className="flex gap-4 group" href="#">
                                    <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                                        <img alt="Restaurant 3"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                            data-alt="Colorful mediterranean salad bowl"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlxEHW6M31ze21LW3-Q6YDNjz1HXqevnKrQv6GhOznJxbV84cor7ZhIcP-Fwkhk_RXJbhxS8eF3BVBLpunRQpYAnudRRztBetpIVpAaubG9b2ZhFvVot44nsHd6pv3PoQu598Ix6VHYkazfwtnbphlfukFYybrjyEm6nEiI4NEHH2sUwGIu09QUF7sj0Abgft0-1eWjMdy1EDBSkRcDIMXFA2j7G5c9xXwXuaa9vm8ojoC2RPw5jvEiW_o1mKFvvfCFRL0au_Clrc" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-bold group-hover:text-primary transition-colors">Green Harvest
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-primary">
                                            <span className="material-symbols-outlined text-xs fill-1">star</span> 4.6 •
                                            Healthy
                                        </div>
                                        <p className="text-xs text-slate-500">2.1 miles away</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}