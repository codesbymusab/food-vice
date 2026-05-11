import { useEffect, useState } from 'react';
import { createRestaurant, deleteRestaurant, fetchAdminRestaurants } from '../../../apis/admin';
import type { Restaurant } from '../../../apis/admin';

export function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void loadRestaurants();
  }, []);

  const loadRestaurants = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchAdminRestaurants();
      setRestaurants(data.data || []);
    } catch (err) {
      setError((err as Error).message ?? 'Failed to load restaurants');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    try {
      await createRestaurant({ name });
      setName('');
      await loadRestaurants();
    } catch (err) {
      setError((err as Error).message ?? 'Create failed');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteRestaurant(id);
      await loadRestaurants();
    } catch (err) {
      setError((err as Error).message ?? 'Delete failed');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Restaurant Management</h1>
      <div className="mb-4 flex gap-2">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="New restaurant name" className="rounded-xl border border-slate-300 px-3 py-2 w-full" />
        <button onClick={handleCreate} className="rounded-full bg-primary px-4 py-2 text-white">Create</button>
      </div>
      {error && <p className="text-red-600 mb-3">{error}</p>}
      {loading ? (
        <p>Loading restaurants...</p>
      ) : (
        <div className="space-y-4">
          {restaurants.length === 0 ? (
            <div className="rounded-xl border border-slate-200 p-4">No restaurants yet.</div>
          ) : (
            restaurants.map((restaurant) => (
              <article key={restaurant._id} className="rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between">
                <div>
                  <p className="font-semibold">{restaurant.name}</p>
                  <p className="text-sm text-slate-600">{restaurant.description || 'No description'}</p>
                </div>
                <button onClick={() => void handleDelete(restaurant._id)} className="rounded-full bg-red-500 px-3 py-1 text-white">Delete</button>
              </article>
            ))
          )}
        </div>
      )}
    </main>
  );
}
