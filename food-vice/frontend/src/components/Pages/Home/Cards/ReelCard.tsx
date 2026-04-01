import { useNavigate } from "react-router"

export function ReelCard() {
    const navigate=useNavigate()
    return (
        <div className="aspect-[9/16] relative rounded-2xl overflow-hidden group cursor-pointer" onClick={()=>navigate('/reels')}>
            <img className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" data-alt="Coffee pouring into a cup in slow motion" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9eyLypt7sJqZsNXxARH3MYsMmd3vTihkShrymzVDLnRO0YgfsLIVU6PmLSGVN6Ov4ijsabzoBJOKbP1zYividxfnpjzDNjYtuNZsh0Qes9IVdrTcM6WHG-tPgKhZozaCiBS9fTyWuSpdgpS5I7TKOXw19iHKqlABDDK7U8IEOzB1a9tUax8qZRdpVIJDwtktHuzfSzqc-kY4FRKo0pneI-FABdwokK2hkDDC0raS8rTL9ZCSMffJ1rGk1hJDWolsO53DSC-1cx0s" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-4 text-xs font-medium">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">favorite</span> 12k</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 45k</span>
                </div>
            </div>
        </div>
    )
} 