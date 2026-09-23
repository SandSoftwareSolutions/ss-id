const DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function createId(length = 12, alphabet = DEFAULT_ALPHABET) {
  if (!Number.isSafeInteger(length) || length < 1) throw new TypeError("length must be a positive integer");
  if (typeof alphabet !== "string" || alphabet.length < 2) throw new TypeError("alphabet must contain at least two characters");
  const bytes = globalThis.crypto?.getRandomValues
    ? globalThis.crypto.getRandomValues(new Uint32Array(length))
    : Array.from({ length }, () => Math.floor(Math.random() * 2 ** 32));
  return Array.from(bytes, (value) => alphabet[value % alphabet.length]).join("");
}

export function createPrefixedId(prefix, length = 12, alphabet = DEFAULT_ALPHABET) {
  if (typeof prefix !== "string" || !prefix.trim()) throw new TypeError("prefix must be a non-empty string");
  return `${prefix}_${createId(length, alphabet)}`;
}
