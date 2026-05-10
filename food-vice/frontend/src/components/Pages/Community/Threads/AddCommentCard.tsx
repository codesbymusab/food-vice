import { useState, useRef, type ChangeEvent } from "react"
import { addComment } from "../../../../apis/community"
import ReactMarkdown from "react-markdown"

export function AddCommentCard({ threadId, onCommentAdded }: { threadId: string, onCommentAdded: () => void }) {
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)
    const [mediaFiles, setMediaFiles] = useState<File[]>([])
    const [mediaPreviews, setMediaPreviews] = useState<string[]>([])
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleMediaChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        setMediaFiles(prev => [...prev, ...files])

        files.forEach(file => {
            const reader = new FileReader()
            reader.onloadend = () => {
                setMediaPreviews(prev => [...prev, reader.result as string])
            }
            reader.readAsDataURL(file)
        })
    }

    const insertFormatting = (type: 'bold' | 'italic' | 'link' | 'list' | 'heading' | 'quote' | 'code') => {
        if (!textareaRef.current) return;

        const textarea = textareaRef.current;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = content.slice(start, end);

        let formatted = selectedText;
        switch (type) {
            case 'bold':
                formatted = `**${selectedText || 'bold text'}**`;
                break;
            case 'italic':
                formatted = `_${selectedText || 'italic text'}_`;
                break;
            case 'link':
                formatted = selectedText ? `[${selectedText}](https://example.com)` : `[link text](https://example.com)`;
                break;
            case 'list':
                formatted = `- ${selectedText || 'list item'}\n`;
                break;
            case 'heading':
                formatted = `# ${selectedText || 'Heading'}\n`;
                break;
            case 'quote':
                formatted = `> ${selectedText || 'quote'}\n`;
                break;
            case 'code':
                formatted = `\`${selectedText || 'inline code'}\``;
                break;
        }

        const newContent = `${content.slice(0, start)}${formatted}${content.slice(end)}`;
        setContent(newContent);

        requestAnimationFrame(() => {
            textarea.focus();
            const cursorPosition = start + formatted.length;
            textarea.setSelectionRange(cursorPosition, cursorPosition);
        });
    };

    const handleImageButton = () => {
        fileInputRef.current?.click()
    }

    const removeMedia = (index: number) => {
        setMediaFiles(prev => prev.filter((_, i) => i !== index))
        setMediaPreviews(prev => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = async () => {
        if (!content.trim()) return
        setLoading(true)
        try {
            await addComment(threadId, content, mediaFiles)
            setContent('')
            setMediaFiles([])
            setMediaPreviews([])
            onCommentAdded()
        } catch (error) {
            console.error('Error posting comment:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div
            className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Add a comment</h3>
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div
                    className="flex items-center gap-1 px-3 py-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" onClick={() => insertFormatting('bold')}><span
                        className="material-symbols-outlined text-lg">format_bold</span></button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" onClick={() => insertFormatting('italic')}><span
                        className="material-symbols-outlined text-lg">format_italic</span></button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" onClick={() => insertFormatting('link')}><span
                        className="material-symbols-outlined text-lg">link</span></button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" onClick={() => insertFormatting('list')}><span
                        className="material-symbols-outlined text-lg">format_list_bulleted</span></button>
                    <button type="button" className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded" onClick={handleImageButton}><span
                        className="material-symbols-outlined text-lg">image</span></button>
                </div>
                <div className="bg-white dark:bg-slate-900/50 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">

                    {/* Input */}
                    <textarea
                        ref={textareaRef}
                        className="w-full p-4 bg-transparent border-none focus:ring-0 min-h-[120px] text-slate-900 dark:text-slate-100 placeholder-slate-400"
                        placeholder="What are your thoughts?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>

                    {/* Live Markdown Preview */}
                    <div className="mt-4 p-3 border rounded bg-slate-50 dark:bg-slate-800 prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown >{content}</ReactMarkdown>
                    </div>
                </div>


                {/* Media upload */}
                <div className="px-4 pb-4 border-t border-slate-200 dark:border-slate-700">
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*,video/*"
                        onChange={handleMediaChange}
                        className="w-full mt-4 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                    />

                    {/* Media previews */}
                    {mediaPreviews.length > 0 && (
                        <div className="grid grid-cols-3 gap-2 mt-4">
                            {mediaPreviews.map((preview, index) => (
                                <div key={index} className="relative group">
                                    {mediaFiles[index]?.type.startsWith('image/') ? (
                                        <img
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-20 object-cover rounded border border-slate-200"
                                        />
                                    ) : (
                                        <video
                                            src={preview}
                                            className="w-full h-20 object-cover rounded border border-slate-200"
                                        />
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => removeMedia(index)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    className="px-6 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20 disabled:opacity-50"
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? 'Posting...' : 'Post Comment'}
                </button>
            </div>
        </div>
    )
}