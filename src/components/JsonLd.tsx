/**
 * Renders one or more schema.org JSON-LD objects as a script tag.
 * Server-component friendly (no client hooks). `<` is escaped so string
 * values can never close the script element.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
