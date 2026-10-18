function SidebarControls({ title = "Controls", rows = [] }) {
  return (
    <aside className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.035]">
      <div className="border-b border-slate-100 px-5 py-4">
        <h2 className="m-0 text-sm font-semibold text-slate-900">{title}</h2>
      </div>

      <div className="space-y-3 px-5 py-5">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-md bg-slate-50 px-3 py-2 text-sm text-slate-600"
          >
            <span>{row.label}</span>
            <strong className="text-slate-900">{row.value}</strong>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default SidebarControls;
