export function ReviewTile() {
    return (
        <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full overflow-hidden bg-slate-200">
                    <img alt="Sarah J." data-alt="Portrait of a woman with dark hair"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQGPxq5HmwHSxVLfrfGJjixXnuMGLKTleY67SIcdYPmfFCZGSW9utEop3r1Ic7FDmhrCRC_U0S_vqD-vr2k5HgelEpRt4CXgDx69wRchoY2blgb5P6aXmAZVXiGVscTvh7gwKnge1dIkHl8S_7vw7xZ33mvjNsr34sEdtg3vSKTb07NRtibmLrPLeO23P7eSzYjlUuHo1W2Z5Km4MrXcO5MijdXr4Mc1JLPI1jcL-oYI_pziMDZ8PtpDtK6yqiVtOEHZJRNfeYIM" />
                </div>
                <div>
                    <h4 className="font-bold">Sarah Jenkins</h4>
                    <p className="text-xs text-slate-500">Level 4 Foodie • 42 reviews</p>
                </div>
                <div className="ml-auto flex text-primary text-sm">
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                    <span className="material-symbols-outlined fill-1">star</span>
                </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
                The Truffle Tagliatelle was life-changing. Service was impeccable—they noticed
                it was our anniversary and surprised us with a complimentary dessert.
            </p>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
                <img alt="Pasta dish" className="size-24 rounded-lg object-cover flex-shrink-0"
                    data-alt="Creamy pasta with herbs and mushrooms"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXj4UpgT_JmJi3xHnSu3e7GIKUWNwN7i5B5LHUYGAHEUhO2Q1SyjCotKW1i3uy7ovEtUG7D37QF_B2R9ktzYSntgUHwkbu4f6SplKGNZlEgvFyf-zkwv9PvFsP6wKhFJ7cv-OwPoKww9IcP2bpBr9b3yYqjWSYCzew1oNsr1p6UAVl03uu6DyLz8uIlc4aNbwZ2Fo4ATZAEUVoOs_K-f9rH_znpjMAxy3Ahvz7v_fwO_eNfbjljGRfuIAWjSiHfJhj7W9y0n2O2Tk" />
                <img alt="Cocktail" className="size-24 rounded-lg object-cover flex-shrink-0"
                    data-alt="Refreshing citrus cocktail on a marble table"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Bi_MxHb73_pbyb1Se8MkK9A61a3y6tYIuFgqQcM1IF4ARiEQbWJX2j5LwFrww0RGi29YR9F7uR4yAAReBb3_6YN6BUULOBQ6c5ZD2L92qEaNvLOrbIhPPkjW-RTbqrfOjpQFDHP-QTAT47bbWonmDPNjUVe3wlgyVYDVPlC9_Alne9b1V4WyWQjNYGMZV1uAMf6_aRVYnxxtrzMiY7LE7r0oftNexh83tpY2K2kdN-aA6hLlabm5nsyOG1wRZVde3BBeB0SqQnA" />
            </div>
            <div className="mt-4 flex gap-4 text-xs font-bold text-slate-500">
                <button className="flex items-center gap-1 hover:text-primary"><span
                    className="material-symbols-outlined text-sm">thumb_up</span> Helpful
                    (12)</button>
                <button className="flex items-center gap-1 hover:text-primary"><span
                    className="material-symbols-outlined text-sm">comment</span> Reply</button>
            </div>
        </div>
    )
}