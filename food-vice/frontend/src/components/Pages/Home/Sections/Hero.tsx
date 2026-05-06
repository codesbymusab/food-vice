import { useAppLocation } from '../../../../context/LocationContext'
import { useState, useEffect, useRef } from 'react'

export function Hero() {
    const { setLocation } = useAppLocation();
    const [locationInput, setLocationInput] = useState('');
    const [searching, setSearching] = useState(false);
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Fetch suggestions from Nominatim
    useEffect(() => {
        const controller = new AbortController();

        if (locationInput.trim().length > 2) {
            setSearching(true);
            const timeout = setTimeout(async () => {
                try {
                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(`${locationInput} Lahore`)}&format=json&addressdetails=1&limit=5`,
                        { signal: controller.signal }
                    );
                    const data = await response.json();
                    setSuggestions(data);
                } catch (err) {
                    console.error('Autocomplete error:', err);
                } finally {
                    setSearching(false);
                }
            }, 300); // debounce 300ms

            return () => clearTimeout(timeout);
        } else {
            setSuggestions([]);
        }

        return () => controller.abort();
    }, [locationInput]);

    const handleSelect = (place: any) => {
        setLocation([parseFloat(place.lat), parseFloat(place.lon)]);
        setLocationInput(place.display_name);
        setSuggestions([]);
    };

    const handleLocationSubmit = async () => {
        if (!locationInput.trim()) return;

        setSearching(true);

        // Allow lat,lng direct input
        const parts = locationInput.split(',').map(s => parseFloat(s.trim()));
        if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
            setLocation([parts[0], parts[1]]);
            setSearching(false);
            return;
        }

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationInput)}&format=json&limit=1`
            );
            const data = await response.json();
            if (data?.length > 0) {
                const { lat, lon } = data[0];
                setLocation([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert('Location not found. Please try a different search term.');
            }
        } catch (error) {
            console.error('Geocoding error:', error);
            alert('Failed to search location. Please try again.');
        } finally {
            setSearching(false);
        }
    };

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
                        <input
                        onMouseLeave={()=>setSearching(false)}
                            ref={inputRef}
                            className="pl-2 w-full h-full border-none bg-transparent focus:ring-0 text-white placeholder-slate-300"
                            placeholder="Enter location name or coordinates (lat,lng)"
                            type="text"
                            value={locationInput}
                            onChange={(e) => setLocationInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleLocationSubmit()}
                        />
                        {suggestions.length > 0 && (
                            <ul className="absolute top-full left-0 right-0 bg-white text-black rounded-lg shadow-lg mt-1 z-50 opacity-100">
                                {suggestions.map((s, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
                                        onClick={() => handleSelect(s)}
                                    >
                                        {s.display_name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <button
                        className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-50"
                        onClick={handleLocationSubmit}
                        disabled={searching}
                    >
                        {searching ? (
                            <span className="material-symbols-outlined animate-spin">refresh</span>
                        ) : (
                            <span className="material-symbols-outlined">search</span>
                        )}
                        {searching ? 'Searching...' : 'Search'}
                    </button>
                </div>

                {suggestions.length===0 && <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <span className="text-sm font-medium text-slate-200 uppercase tracking-wider self-center mr-2">Popular:</span>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-primary text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Burgers</a>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-accent-cyan text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Pizza</a>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-primary text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Sushi</a>
                    <a className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-accent-cyan text-white transition-all text-sm font-semibold border border-white/20 backdrop-blur-md" href="#">Cafes</a>
                </div>
}
            </div>
                
        </section>
    )
}