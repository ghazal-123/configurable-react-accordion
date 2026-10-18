function AddQuestionForm({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.035]"
    >
      <div className="border-b border-slate-100 px-5 py-4">
        <h2 className="m-0 text-sm font-semibold text-slate-900">
          Add Question
        </h2>
      </div>

      <div className="space-y-4 px-5 py-5">
        <label className="block">
          <span className="mb-2 block text-xs font-medium text-slate-600">
            Question
          </span>
          <input
            type="text"
            name="question"
            value={value.question}
            onChange={onChange}
            className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
            placeholder="Enter question"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium text-slate-600">
            Answer
          </span>
          <textarea
            name="answer"
            value={value.answer}
            onChange={onChange}
            rows="4"
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
            placeholder="Enter answer"
          />
        </label>

        <button
          type="submit"
          className="w-full rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-700"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default AddQuestionForm;
