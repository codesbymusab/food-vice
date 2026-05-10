import { useState } from 'react';
import { fetchAIChat, type AIChatMessage } from '../../../apis/ai';

export function ExploreChatBot({
  location,
  userId,
}: {
  location: [number, number] | null;
  userId?: string;
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<AIChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSend() {
    if (!input.trim()) return;
    const userMessage: AIChatMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
    setError(null);

    const response = await fetchAIChat({ messages: updatedMessages, location, userId });
    if (!response) {
      setError('Unable to get chat response.');
      setLoading(false);
      return;
    }

    setMessages((current) => [...current, { role: 'assistant', content: response }]);
    setLoading(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[320px] rounded-3xl border border-slate-200 bg-white shadow-2xl p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-bold">FoodVice Chat</p>
              <p className="text-xs text-slate-500">Ask about nearby restaurants</p>
            </div>
            <button className="text-slate-500 hover:text-primary" onClick={() => setOpen(false)}>
              close
            </button>
          </div>

          <div className="max-h-72 space-y-3 overflow-y-auto border-b border-slate-200 pb-3 mb-3 dark:border-slate-800">
            {messages.length === 0 ? (
              <p className="text-sm text-slate-500">Start a chat about nearby food options.</p>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`rounded-2xl p-3 ${message.role === 'assistant' ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100' : 'bg-primary text-white'}`}>
                  <p className="text-xs uppercase tracking-[0.15em] mb-1">{message.role}</p>
                  <p className="text-sm leading-6">{message.content}</p>
                </div>
              ))
            )}
          </div>

          {error ? <p className="text-xs text-red-500 mb-2">{error}</p> : null}

          <div className="flex gap-2">
            <input
              className="flex-1 rounded-2xl border border-slate-200 px-3 py-2 text-sm focus:border-primary focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              placeholder="Ask the bot..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  void handleSend();
                }
              }}
            />
            <button
              onClick={() => void handleSend()}
              className="rounded-2xl bg-primary px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      ) : null}

      <button
        className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-white shadow-xl shadow-primary/30 hover:bg-primary-dark transition-all"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="material-symbols-outlined">chat</span>
        Chat bot
      </button>
    </div>
  );
}
