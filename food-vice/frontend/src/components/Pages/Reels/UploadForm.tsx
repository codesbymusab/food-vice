import React, { useState } from "react";

export function UploadReelForm({ onSubmit, setShowReelForm }: {
  onSubmit: (formData: FormData) => void,
  setShowReelForm: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  
  const [newTag, setNewTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!video) return alert("Please upload a video");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", video);
    formData.append("tags", JSON.stringify(tags));

    onSubmit(formData);
  };

  function handleVideoChange(file: File | null) {
    setVideo(file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setVideoPreview(previewUrl);
    } else {
      setVideoPreview(null);
    }
  };

  return (
    <div className="bg-white my-6 mx-auto w-2/4 g-white rounded-2xl p-8 md:p-12 shadow-sm border border-outline/50">
      <div className="mb-10">
        <h2 className="text-xl font-black text-tertiary mb-2 font-headline tracking-tight uppercase">
          Upload a Reel
        </h2>
        <p className="text-on-surface-variant">
          Share your creative video content with the community.
        </p>
      </div>

      <form className="space-y-12" onSubmit={handleSubmit}>

        <div className="flex flex-col gap-8 bg-surface-container-low p-2 rounded-2xl">
          <div className="space-y-3">
            <label className="block text-xs font-black uppercase tracking-widest text-on-surface-variant">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full rounded-xl border-outline ring-2 ring-gray-200 bg-slate-100 p-4 text-on-surface focus:border-primary focus:ring-4 focus:ring-primary/35 transition-all outline-none font-body"
              placeholder="Enter reel title"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-xs font-black uppercase tracking-widest text-on-surface-variant">
              Description
            </label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="w-full rounded-xl border-outline ring-2 ring-gray-200 bg-slate-100 p-4 text-on-surface focus:border-primary focus:ring-4 focus:ring-primary/35 transition-all outline-none font-body resize-none"
              placeholder="Describe your reel..."
              rows={4}
            />
          </div>
        </div>

        {videoPreview ? (
          <div className="w-full  mt-4">
            <video
              src={videoPreview}
              controls
              className="rounded-xl shadow-md"
            />
          </div>)
          
          :
          <div className="space-y-4">
            <label className="block text-sm font-black uppercase tracking-widest text-tertiary">
              Upload Video
            </label>
            <div className="border-4 border-dashed border-outline-variant rounded-2xl p-12 flex flex-col items-center justify-center bg-slate-100 hover:border-primary/50 hover:bg-surface-container-low transition-colors cursor-pointer group">
              <input
                type="file"
                accept="video/*"
                onChange={e => handleVideoChange(e.target.files?.[0] || null)}
                className="hidden"
                id="video-upload"
              />
              <label htmlFor="video-upload" className="cursor-pointer flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-secondary text-4xl">
                    video_file
                  </span>
                </div>
                <h4 className="text-xl font-bold text-tertiary mb-1">Drag and drop your video</h4>
                <p className="text-on-surface-variant text-sm mb-6">Or click to browse from your device</p>
                <div className="flex gap-4">
                  <div className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant">MP4, WebM</div>
                  <div className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant">Max 50MB</div>
                </div>
              </label>
            </div>
          </div>
        }

        <div className="space-y-4">
          <label className="block text-sm font-black uppercase tracking-widest text-tertiary">
            Tags
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              className="flex-1 rounded-xl border-outline ring-2 ring-gray-200 p-4 text-on-surface focus:border-primary focus:ring-4 focus:ring-primary/35 transition-all outline-none font-body bg-slate-100"
              placeholder="Add a tag"
            />
            <button
              type="button"
              onClick={() => {
                if (newTag.trim()) {
                  setTags([...tags, newTag.trim()]);
                  setNewTag("");
                }
              }}
              className="px-6 py-3 rounded-xl bg-primary text-white font-bold uppercase tracking-widest text-xs shadow-md hover:scale-[1.02] active:scale-95 transition-all"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-surface-container-high px-4 py-2 rounded-full text-xs font-bold text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>


        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-primary text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
          >
            Upload Reel
          </button>
          <button
            type="button"
            className="w-full py-4 rounded-xl border-2 border-stone-100 text-stone-500 font-black uppercase tracking-widest text-xs hover:bg-red-200/70 transition-all"
            onClick={() => setShowReelForm(prev => !prev)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
