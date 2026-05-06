import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useParams } from "react-router";
import { createReview } from "../../../apis/reviews";

export function AddReviewForm( { setShowReviewForm,fetchRestaurant,location }: { setShowReviewForm: React.Dispatch<React.SetStateAction<boolean>>,fetchRestaurant:(location: [number, number] | null) => Promise<void>,location:[number,number] | null }) {
  const [food, setFood] = useState(0);
  const [service, setService] = useState(0);
  const [ambience, setAmbience] = useState(0);
  const [price, setPrice] = useState(0);
  const [text, setText] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const {user}=useAuth()
  const params=useParams()
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("userId", `${user?.userId}`); 
      formData.append("restaurantId", `${params.id}`);
      formData.append("text", text);
      formData.append("rating", JSON.stringify({ food, service, ambience, price, overall: (food+service+ambience+price)/4 }));

      files.forEach(file => formData.append("files", file));

      await createReview(formData);
      await fetchRestaurant(location);

      setShowReviewForm(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-outline/50">
      <form className="space-y-12" onSubmit={handleSubmit}>
        {/* Ratings UI (replace stars with interactive handlers) */}
        {/* Example: */}
        <div>
          <label>Food Quality</label>
          <input type="number" value={food} onChange={e => setFood(Number(e.target.value))} min={1} max={5} />
        </div>

        <div>
          <label>Service</label>
          <input type="number" value={service} onChange={e => setService(Number(e.target.value))} min={1} max={5} />
        </div>

        <div>
          <label>Ambience</label>
          <input type="number" value={ambience} onChange={e => setAmbience(Number(e.target.value))} min={1} max={5} />
        </div>

        <div>
          <label>Value for Money</label>
          <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} min={1} max={5} />
        </div>

        {/* Review text */}
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Describe your dining experience..."
          rows={6}
          className="w-full rounded-2xl border p-4"
        />

        {/* File upload */}
        <input type="file" multiple accept="image/*" onChange={e => setFiles(Array.from(e.target.files || []))} />

        {/* Buttons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
          <button
            type="button"
            className="w-full py-4 rounded-xl border-2 border-stone-100 text-stone-500 font-black uppercase tracking-widest text-xs hover:bg-red-200/70 transition-all"
            onClick={() => setShowReviewForm(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
