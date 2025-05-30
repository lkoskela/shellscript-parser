export function stringifyCircularJSON(obj: any): string {
    const seen = new WeakSet();
    return JSON.stringify(
        obj,
        (k, v) => {
            if (v !== null && typeof v === "object") {
                if (seen.has(v)) return;
                seen.add(v);
            }
            return v;
        },
        2
    );
}
