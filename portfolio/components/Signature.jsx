// Caption + full-width name used at the bottom of the home page.
// The name is sized with container units (no JS), so it never jumps on load:
// "advaith." in Inter Tight 700 at -0.06em tracking is 3.26× its font size wide
// (3.32 leaves room for the last glyph).
const Signature = ({ caption = "Python & Odoo developer" }) => (
  <div className="pb-4 xl:pb-6">
    <p className="eyebrow pb-3 border-b border-line">{caption}</p>
    <div className="@container overflow-hidden">
      <p
        aria-label="advaith."
        className="signature pt-2 pb-[0.04em] font-bold leading-[0.95] tracking-[-0.06em] whitespace-nowrap"
        style={{ fontSize: "calc(100cqw / 3.32)" }}
      >
        advaith.
      </p>
    </div>
  </div>
);

export default Signature;
