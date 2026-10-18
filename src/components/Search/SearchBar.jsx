function SearchBar({
  value,
  onChange,
  placeholder = "Search queries and FAQs...",
}) {
  return (
    <label className="mb-5 flex h-11 items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 text-slate-400 shadow-sm shadow-slate-900/[0.02] focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
      <span aria-hidden="true" className="text-base">
        ⌕
      </span>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
      />
    </label>
  );
}

export default SearchBar;
