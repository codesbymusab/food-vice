export async function fetchCuisines() {
    try {
        const res = await fetch('http://localhost:3000/restaurant/cuisines', {
            credentials: 'include',
        });

        if (!res.ok) {
            throw new Error('Failed to load cuisines');
        }

        const data = await res.json();
        return data.result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
