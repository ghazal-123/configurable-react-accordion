function Accordion({
  items = [],
  openItems = [],
  onToggle,
  headingLevel: Heading = "h3",
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.025]"
          >
            <Heading className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                onClick={() => onToggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-slate-800 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
              >
                <span className="font-medium">{item.title}</span>
                <span className="grid size-7 place-items-center rounded-full bg-emerald-50 text-sm text-emerald-700">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            </Heading>

            <div
              id={`accordion-panel-${item.id}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 text-sm leading-6 text-slate-600">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
