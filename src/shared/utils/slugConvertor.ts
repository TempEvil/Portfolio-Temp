export const slugConvertor = (value: unknown): string => {
  const s = String(value ?? "").trim();
  if (!s) return "";

  // already a clean slug => return as-is
  if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s)) return s;

  return s
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};
