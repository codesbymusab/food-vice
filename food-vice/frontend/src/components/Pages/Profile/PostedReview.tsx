export function PostedReview() {
    return (
        <div className="p-8 group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
                <div className="size-12 rounded-full overflow-hidden bg-slate-200">
                    <img alt="Sarah J." data-alt="Portrait of a woman with dark hair"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvLslAqT3wfDgfn381_3dpcKq_VxCZWPTXdaW2YONEcXNrrUrd-hE_A8Z-hHDzIoCxDi7kfomQRDUmLHb1sXPmTYMKRk6y2WEgJxtokRivIJfiOQKwW3H32YbKrHEdvez69BSVyY9bH5cQbt9gN0dgQ2WFWsNr2_6P5XFpvZ7ltAjWj4LMPqnVIcM0M-zi9EBS3fsOYQCHl-uwQ7QxDlbPlQX52AOJ8_Z7RY7zD8CqJGeHBxHgPaIWW3-0r2coBzAiPkbL2CvfTUI" />
                </div>
                <div>
                    <h4 className="font-bold">La Piazza San Francis</h4>
                    <p className="text-xs text-slate-500">Downtown, CA</p>
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
            <div className="mt-4 pt-4 border-t border-slate-50 dark:border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-1 text-xs text-slate-600 transition-colors"><span className="material-symbols-outlined text-lg">thumb_up</span>Likes (18)</div>
                <span className="text-xs font-medium text-slate-400">Posted 3 days ago</span>

            </div>
        </div>
    )
}