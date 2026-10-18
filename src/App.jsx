import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Code2,
  Search,
  X,
} from "lucide-react";

const faqItems = [
  {
    id: "shipping",
    title: "How long does shipping take?",
    content:
      "Standard shipping usually arrives within 3 to 5 business days. Express options are available at checkout and arrive in 1 to 2 business days.",
  },
  {
    id: "modify-order",
    title: "Can I modify my order?",
    content:
      "You can update an order within one hour of placing it. Contact our support team as soon as possible and we will do our best to help.",
  },
  {
    id: "payments",
    title: "What payment methods are available?",
    content:
      "We accept all major credit and debit cards, PayPal, Apple Pay, and Google Pay. Your payment details are encrypted at every step.",
  },
  {
    id: "disabled",
    title: "Disabled Item",
    content: "This answer is currently unavailable.",
    disabled: true,
  },
  {
    id: "returns",
    title: "What is your return policy?",
    content:
      "Unused items can be returned within 30 days of delivery. Start a return from your account and we will email you a prepaid label.",
  },
  {
    id: "tracking",
    title: "Where can I track my order?",
    content:
      "Once your order ships, we will send a tracking link by email. You can also find the latest delivery updates in your account.",
  },
  {
    id: "international",
    title: "Do you ship internationally?",
    content:
      "We ship to more than 40 countries. Delivery times and any import fees are shown at checkout before you place your order.",
  },
  {
    id: "invoice",
    title: "How do I get an invoice?",
    content:
      "A receipt is sent automatically after purchase. You can download a VAT invoice from the order details page in your account.",
  },
];

function AccordionIcon({ type, open }) {
  if (type === "plus/minus") {
    return (
      <span aria-hidden="true" className="text-xl leading-none">
        {open ? "-" : "+"}
      </span>
    );
  }
  if (type === "arrow") {
    return (
      <ArrowUpRight
        aria-hidden="true"
        size={17}
        className={`transition-transform ${open ? "rotate-45" : ""}`}
      />
    );
  }
  return (
    <ChevronDown
      aria-hidden="true"
      size={17}
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    />
  );
}

function App() {
  const [itemCount, setItemCount] = useState(6);
  const [variant, setVariant] = useState("separated");
  const [size, setSize] = useState("comfortable");
  const [iconType, setIconType] = useState("chevron");
  const [iconPosition, setIconPosition] = useState("end");
  const [headingLevel, setHeadingLevel] = useState("h3");
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [collapsible, setCollapsible] = useState(true);
  const [animations, setAnimations] = useState(true);
  const [disabledItem, setDisabledItem] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState(["shipping"]);

  const items = useMemo(
    () =>
      faqItems
        .slice(0, itemCount)
        .map((item) =>
          item.id === "disabled" ? { ...item, disabled: disabledItem } : item,
        ),
    [itemCount, disabledItem],
  );
  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return items;
    return items.filter((item) =>
      `${item.title} ${item.content}`.toLowerCase().includes(query),
    );
  }, [items, searchQuery]);
  const expandedCount = items.filter((item) =>
    openItems.includes(item.id),
  ).length;
  const headingStyles = {
    h2: "accordion-heading-h2",
    h3: "accordion-heading-h3",
    h4: "accordion-heading-h4",
  };
  const propDocumentation = [
    [
      "items",
      "FAQItem[]",
      `${itemCount} items`,
      "The content records rendered as accordion rows.",
    ],
    [
      "variant",
      '"separated" | "grouped"',
      variant,
      "Controls whether rows have individual cards or share connected borders.",
    ],
    [
      "size",
      '"compact" | "comfortable" | "spacious"',
      size,
      "Sets row height and internal spacing.",
    ],
    [
      "iconType",
      '"chevron" | "plus/minus" | "arrow"',
      iconType,
      "Selects the disclosure indicator shown on each row.",
    ],
    [
      "iconPosition",
      '"start" | "end"',
      iconPosition,
      "Places the disclosure indicator before or after the question.",
    ],
    [
      "headingLevel",
      '"h2" | "h3" | "h4"',
      headingLevel,
      "Sets each question heading's semantic tag and visual scale.",
    ],
    [
      "disabledItem",
      "boolean",
      String(disabledItem),
      "Disables or enables the sample FAQ row.",
    ],
    [
      "allowMultiple",
      "boolean",
      String(allowMultiple),
      "Allows multiple answers to stay expanded at once.",
    ],
    [
      "collapsible",
      "boolean",
      String(collapsible),
      "Allows the currently expanded answer to close on repeat click.",
    ],
    [
      "animations",
      "boolean",
      String(animations),
      "Enables or removes the open and close transitions.",
    ],
  ];

  function toggleItem(id) {
    setOpenItems((current) => {
      const isOpen = current.includes(id);
      if (isOpen)
        return collapsible
          ? current.filter((itemId) => itemId !== id)
          : current;
      return allowMultiple ? [...current, id] : [id];
    });
  }

  function updateItemCount(event) {
    const nextCount = Number(event.target.value);
    if (Number.isNaN(nextCount)) return;
    const boundedCount = Math.max(1, Math.min(faqItems.length, nextCount));
    setItemCount(boundedCount);
    setOpenItems((current) =>
      current.filter(
        (id) => faqItems.findIndex((item) => item.id === id) < boundedCount,
      ),
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f6f5] text-slate-800">
      <header className="border-b border-slate-200/80 bg-white/85">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#main"
            className="flex items-center gap-3 text-slate-900 no-underline"
          >
            <span className="grid size-9 place-items-center rounded-lg bg-emerald-800 text-white">
              <CircleHelp size={19} />
            </span>
            <span className="text-sm font-semibold tracking-wide">
              NORTHSTAR{" "}
              <span className="font-normal text-slate-400">/ UI LAB</span>
            </span>
          </a>
          <div className="flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800">
            <span className="size-1.5 rounded-full bg-emerald-600" />{" "}
            Interactive playground
          </div>
        </div>
      </header>

      <main
        id="main"
        className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 sm:py-10"
      >
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">
              <span className="h-px w-5 bg-emerald-700" /> Components{" "}
              <ChevronRight size={13} /> Disclosure
            </div>
            <h1 className="m-0 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Accordion
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Explore states, behavior, and presentation for a flexible FAQ
              accordion.
            </p>
          </div>
          <span className="mb-1 inline-flex items-center gap-2 text-sm text-slate-500">
            <Code2 size={16} /> React component
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-8">
          <section aria-label="Accordion preview" className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p
                className="text-sm font-medium text-slate-600"
                aria-live="polite"
              >
                {expandedCount} {expandedCount === 1 ? "item" : "items"}{" "}
                expanded
              </p>
              <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-500">
                Live preview
              </span>
            </div>

            <label className="mb-5 flex h-11 items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 text-slate-400 shadow-sm shadow-slate-900/[0.02] focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/10">
              <Search size={17} aria-hidden="true" />
              <span className="sr-only">Search queries and FAQs</span>
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search queries and FAQs..."
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={15} />
                </button>
              )}
            </label>

            <div
              className={
                variant === "grouped"
                  ? "overflow-hidden rounded-lg border border-slate-200 bg-white"
                  : "space-y-3"
              }
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => {
                  const isOpen = openItems.includes(item.id);
                  const Heading = headingLevel;
                  const rowClass =
                    variant === "grouped"
                      ? `bg-white ${index > 0 ? "border-t border-slate-200" : ""}`
                      : "rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.025]";
                  return (
                    <article key={item.id} className={rowClass}>
                      <Heading className="m-0">
                        <button
                          type="button"
                          id={`accordion-trigger-${item.id}`}
                          aria-expanded={isOpen}
                          aria-controls={`accordion-panel-${item.id}`}
                          aria-disabled={
                            item.disabled ||
                            (!collapsible && isOpen) ||
                            undefined
                          }
                          disabled={item.disabled}
                          onClick={() => toggleItem(item.id)}
                          className={`accordion-size-${size} flex w-full items-center gap-4 text-left sm:px-5 ${headingStyles[headingLevel]} ${iconPosition === "start" ? "flex-row" : "flex-row-reverse"} ${item.disabled ? "cursor-not-allowed text-slate-400" : "text-slate-800 hover:text-emerald-900"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-600`}
                        >
                          <span
                            className={`grid size-7 shrink-0 place-items-center rounded-full ${isOpen ? "bg-emerald-50 text-emerald-800" : "text-slate-400"} ${item.disabled ? "bg-slate-50 text-slate-300" : ""}`}
                          >
                            <AccordionIcon type={iconType} open={isOpen} />
                          </span>
                          <span className="flex min-w-0 flex-1 items-center justify-between gap-3">
                            <span>{item.title}</span>
                            {item.disabled && (
                              <span className="shrink-0 rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                                Disabled
                              </span>
                            )}
                          </span>
                        </button>
                      </Heading>
                      <div
                        id={`accordion-panel-${item.id}`}
                        role="region"
                        aria-labelledby={`accordion-trigger-${item.id}`}
                        aria-hidden={!isOpen}
                        className={`overflow-hidden ${animations ? "transition-[max-height,opacity] duration-300 ease-in-out" : "transition-none"} ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div
                          className={`pb-5 text-sm leading-6 text-slate-500 ${iconPosition === "start" ? "pl-[4.75rem] pr-5" : "pl-5 pr-[4.75rem]"} sm:pb-6`}
                        >
                          {item.content}
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
                  <Search size={20} className="mx-auto mb-3 text-slate-400" />
                  <p className="text-sm font-medium text-slate-700">
                    No matching questions
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Try another search term.
                  </p>
                </div>
              )}
            </div>

            <section
              aria-labelledby="code-preview-title"
              className="mt-8 overflow-hidden rounded-lg bg-[#172420] shadow-lg shadow-slate-900/10"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <Code2 size={15} className="text-emerald-400" />
                  <h2
                    id="code-preview-title"
                    className="m-0 text-xs font-medium"
                  >
                    Component usage
                  </h2>
                </div>
                <span className="rounded bg-white/10 px-2 py-1 font-mono text-[10px] text-slate-400">
                  JSX
                </span>
              </div>
              <pre className="overflow-x-auto px-4 py-5 text-[12px] leading-6 sm:px-5 sm:text-[13px]">
                <code className="font-mono text-slate-200">
                  <span className="text-emerald-300">&lt;Accordion</span>{" "}
                  <span className="text-sky-200">items</span>=
                  <span className="text-amber-200">{"{items}"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">variant</span>=
                  <span className="text-amber-200">"{variant}"</span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">size</span>=
                  <span className="text-amber-200">"{size}"</span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">iconType</span>=
                  <span className="text-amber-200">"{iconType}"</span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">iconPosition</span>=
                  <span className="text-amber-200">"{iconPosition}"</span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">headingLevel</span>=
                  <span className="text-amber-200">"{headingLevel}"</span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">disabledItem</span>=
                  <span className="text-orange-200">
                    {"{" + disabledItem + "}"}
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">allowMultiple</span>=
                  <span className="text-orange-200">
                    {"{" + allowMultiple + "}"}
                  </span>
                  {"  "}
                  <span className="text-sky-200">collapsible</span>=
                  <span className="text-orange-200">
                    {"{" + collapsible + "}"}
                  </span>
                  {"\n"}
                  {"  "}
                  <span className="text-sky-200">animations</span>=
                  <span className="text-orange-200">
                    {"{" + animations + "}"}
                  </span>
                  {"\n"}
                  <span className="text-emerald-300">/&gt;</span>
                </code>
              </pre>
            </section>
          </section>

          <aside aria-label="Accordion controls" className="lg:sticky lg:top-6">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.035]">
              <div className="border-b border-slate-100 px-5 py-4">
                <div className="flex items-center justify-between">
                  <h2 className="m-0 text-sm font-semibold text-slate-900">
                    Props
                  </h2>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                    Configure
                  </span>
                </div>
              </div>

              <div className="space-y-5 px-5 py-5">
                <label className="block">
                  <span className="mb-2 flex items-center justify-between gap-2 text-xs font-medium text-slate-600">
                    <span>Item Count</span>
                    <span className="text-[10px] font-medium text-slate-400">
                      Max 8
                    </span>
                  </span>
                  <input
                    type="number"
                    min="1"
                    max={faqItems.length}
                    value={itemCount}
                    onChange={updateItemCount}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-slate-600">
                      Variant
                    </span>
                    <select
                      value={variant}
                      onChange={(event) => setVariant(event.target.value)}
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-2.5 text-sm text-slate-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                    >
                      <option value="separated">Separated</option>
                      <option value="grouped">Grouped</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-medium text-slate-600">
                      Icon Type
                    </span>
                    <select
                      value={iconType}
                      onChange={(event) => setIconType(event.target.value)}
                      className="h-10 w-full rounded-md border border-slate-200 bg-white px-2.5 text-sm text-slate-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                    >
                      <option value="chevron">Chevron</option>
                      <option value="plus/minus">Plus / minus</option>
                      <option value="arrow">Arrow</option>
                    </select>
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-600">
                    Size
                  </span>
                  <select
                    value={size}
                    onChange={(event) => setSize(event.target.value)}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  >
                    <option value="compact">Compact</option>
                    <option value="comfortable">Comfortable</option>
                    <option value="spacious">Spacious</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-600">
                    Icon Position
                  </span>
                  <div className="grid grid-cols-2 rounded-md border border-slate-200 bg-slate-50 p-1">
                    {[
                      ["start", ArrowLeft],
                      ["end", ArrowRightIcon],
                    ].map(([position, PositionIcon]) => (
                      <button
                        key={position}
                        type="button"
                        onClick={() => setIconPosition(position)}
                        aria-pressed={iconPosition === position}
                        className={`flex h-8 items-center justify-center gap-2 rounded text-xs font-medium capitalize transition ${iconPosition === position ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                      >
                        <PositionIcon size={14} /> {position}
                      </button>
                    ))}
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-medium text-slate-600">
                    Heading Level
                  </span>
                  <select
                    value={headingLevel}
                    onChange={(event) => setHeadingLevel(event.target.value)}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                  >
                    <option value="h2">H2</option>
                    <option value="h3">H3</option>
                    <option value="h4">H4</option>
                  </select>
                  <span className="mt-2 block text-[11px] leading-4 text-slate-400">
                    Preview uses{" "}
                    <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[10px] text-slate-600">
                      &lt;{headingLevel}&gt;
                    </code>{" "}
                    for each question title.
                  </span>
                </label>

                <div className="border-t border-slate-100 pt-4">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Behavior
                  </p>
                  <div className="space-y-3">
                    <Toggle
                      label="Allow Multiple Open"
                      checked={allowMultiple}
                      onChange={(checked) => {
                        setAllowMultiple(checked);
                        if (!checked)
                          setOpenItems((current) => current.slice(0, 1));
                      }}
                    />
                    <Toggle
                      label="Collapsible Toggle"
                      checked={collapsible}
                      onChange={setCollapsible}
                    />
                    <Toggle
                      label="CSS Animations"
                      checked={animations}
                      onChange={setAnimations}
                    />
                    <Toggle
                      label="Disable Sample Item"
                      checked={disabledItem}
                      onChange={setDisabledItem}
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-slate-100 bg-slate-50/70 px-5 py-3 text-[11px] text-slate-500">
                <Check size={14} className="text-emerald-700" /> Changes apply
                instantly
              </div>
            </div>
          </aside>
        </div>

        <section
          aria-labelledby="props-documentation-title"
          className="mt-12 border-t border-slate-200 pt-8"
        >
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">
                API reference
              </p>
              <h2
                id="props-documentation-title"
                className="m-0 text-2xl font-semibold text-slate-900"
              >
                Props documentation
              </h2>
            </div>
            <span className="text-sm text-slate-500">
              Current values update with the controls above
            </span>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.025]">
            <table className="w-full min-w-[1040px] border-collapse text-left text-base">
              <colgroup>
                <col className="w-[17%]" />
                <col className="w-[23%]" />
                <col className="w-[18%]" />
                <col className="w-[42%]" />
              </colgroup>
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold">
                    Prop
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold">
                    Type
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold">
                    Current value
                  </th>
                  <th scope="col" className="px-5 py-4 text-sm font-semibold">
                    Effect
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {propDocumentation.map(([name, type, value, effect]) => (
                  <tr
                    key={name}
                    className="align-top odd:bg-white even:bg-slate-50/40 hover:bg-emerald-50/50"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-5 py-4 font-mono text-base font-semibold text-slate-800"
                    >
                      {name}
                    </th>
                    <td className="whitespace-nowrap px-5 py-4">
                      <code className="rounded-md bg-slate-100 px-2.5 py-1.5 font-mono text-sm text-slate-600">
                        {type}
                      </code>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span className="inline-flex rounded-md border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 font-mono text-sm font-medium text-emerald-800">
                        {value}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-base leading-7 text-slate-600">
                      {effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <ArrowDown {...props} className={`-rotate-90 ${props.className ?? ""}`} />
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 text-xs text-slate-600">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="peer sr-only"
      />
      <span className="relative h-[18px] w-8 shrink-0 rounded-full bg-slate-200 transition-colors after:absolute after:left-[3px] after:top-[3px] after:size-3 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:bg-emerald-700 peer-checked:after:translate-x-3.5 peer-focus-visible:ring-2 peer-focus-visible:ring-emerald-600 peer-focus-visible:ring-offset-2" />
    </label>
  );
}

export default App;
