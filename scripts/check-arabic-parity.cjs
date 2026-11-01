// Release check: fails if an Arabic string has no Arabic letters, or is identical to English,
// unless it is on the allowlist below. Run: node scripts/check-arabic-parity.cjs
const fs = require("fs");
const en = JSON.parse(fs.readFileSync("messages/en.json", "utf8"));
const ar = JSON.parse(fs.readFileSync("messages/ar.json", "utf8"));

// Latin by nature: emails, phone numbers, placeholders, codes, brand/partner names.
// "English" is the language-switcher label, written in its own language by design.
const LATIN_OK_VALUE = /^(RCS Arabia|SA|DXB|GCC|HCIS|ITIL v4|English|Frontline Solutions|Info Services|AppHelix|Techdata|Sectona|BeyondTrust|ARCON|name@organi[sz]ation\.com|\+966 5X XXX XXXX|[\w.+-]+@rcsarabia\.sa|[\d\s+\-().,%/&|·]+|https?:\/\/\S+)$/i;

// Pending client decisions: left in Latin on purpose until the client answers.
// See the client questions list (Arabic brand name, leadership names, eyebrow).
const PENDING_CLIENT = new Set([
  "who_we_are_hero.eyebrow_secondary", // "Reliance Comprehensive Solutions": expansion of the brand name
  "leadership.person1_name",
  "leadership.person2_name",
]);

const hasArabic = (s) => /[\u0600-\u06FF]/.test(s);
const findings = [];
const pending = [];

function check(path, av, ev) {
  const v = av.trim();
  if (!v || LATIN_OK_VALUE.test(v)) return;
  const noArabic = !hasArabic(v);
  const sameAsEn = typeof ev === "string" && av === ev && av.length > 12;
  if (!noArabic && !sameAsEn) return;
  (PENDING_CLIENT.has(path) ? pending : findings).push(`${noArabic ? "NO-ARABIC " : "SAME-AS-EN"} ${path} => ${av}`);
}

(function walk(a, e, p) {
  for (const k of Object.keys(a)) {
    const av = a[k], ev = e ? e[k] : undefined, path = p ? `${p}.${k}` : k;
    if (typeof av === "string") check(path, av, ev);
    else if (Array.isArray(av)) av.forEach((x, i) => {
      if (typeof x === "string") check(`${path}.${i}`, x, ev && ev[i]);
      else if (x && typeof x === "object") walk(x, ev && ev[i], `${path}.${i}`);
    });
    else if (av && typeof av === "object") walk(av, ev, path);
  }
})(ar, en, "");

if (pending.length) console.log("Pending client decision (allowed for now):\n  " + pending.join("\n  "));
if (findings.length) {
  console.error("\nUntranslated Arabic strings:\n  " + findings.join("\n  "));
  process.exit(1);
}
console.log(`\nArabic parity check passed (${pending.length} pending client decision(s)).`);
