export interface RetreatToken {
  retreatId: number;
  retreatName: string;
  retreatPrice: number;
}

/**
 * Encodes retreat data into a UTF-8 safe, Base64 URL token.
 */
export function encodeRetreatToken(data: RetreatToken): string {
  const json = JSON.stringify(data);
  // Safely handle UTF-8 characters (like emojis or special accents)
  const bytes = new TextEncoder().encode(json);
  const binString = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");

  return btoa(binString)
    .replace(/\+/g, "-")  // Make URL-safe
    .replace(/\//g, "_")
    .replace(/=+$/, "");  // Strip padding
}

/**
 * Decodes a URL-safe Base64 token back into retreat data.
 * Returns null if invalid or corrupted.
 */
export function decodeRetreatToken(token: string): RetreatToken | null {
  try {
    let base64 = token.replace(/-/g, "+").replace(/_/g, "/");

    // Restore padding
    const pad = base64.length % 4;
    if (pad) base64 += "=".repeat(4 - pad);

    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (m) => m.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);

    const parsed = JSON.parse(json);

    if (
      typeof parsed?.retreatId !== "number" ||   // ✅ matches encoded type
      !Number.isFinite(parsed.retreatId) ||      // guards against NaN/Infinity from JSON edge cases
      typeof parsed?.retreatName !== "string" ||
      parsed.retreatName.trim().length === 0     // optional: reject empty names
    ) {
      return null;
    }

    return {
      retreatId: parsed.retreatId,
      retreatName: parsed.retreatName,
      retreatPrice: parsed.retreatPrice
    };
  } catch {
    return null;
  }
}