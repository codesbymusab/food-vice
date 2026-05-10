import type { AISummary } from '../../../apis/ai';

export function AIVerdictCard({ summary }: { summary: AISummary }) {
  return (
    <>
     <h3 className="text-xl font-bold mb-4">AI Verdict</h3>
      <p className="text-slate-700 dark:text-slate-300 mb-4">{summary.verdict}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-black mb-2">Pros</h4>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
            {summary.pros.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-black mb-2">Cons</h4>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300">
            {summary.cons.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
