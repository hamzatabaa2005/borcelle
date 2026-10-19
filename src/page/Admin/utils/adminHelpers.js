
export const extractList = (res) => {
    if (Array.isArray(res)) return res;
    const candidates = [res?.data, res?.data?.data, res?.data?.items, res?.items, res?.results, res?.result];
    for (const c of candidates) {
        if (Array.isArray(c)) return c;
    }
    return [];
}

const metaOf = (res) => res?.meta ?? res?.pagination ?? res?.data?.meta ?? (res?.data && !Array.isArray(res.data) ? res.data : null) ?? res;

export const extractLastPage = (res) => {
    const m = metaOf(res);
    return Number(m?.last_page ?? m?.lastPage ?? m?.total_pages ?? 1) || 1;
}

export const extractTotal = (res) => {
    const m = metaOf(res);
    const t = m?.total ?? res?.total;
    return t != null ? Number(t) : extractList(res).length;
}

export const getTr = (item, locale, field = "name") => {
    if (!item) return "";
    const direct = item?.[locale]?.[field];
    if (direct != null) return direct;
    if (Array.isArray(item.translations)) {
        const hit = item.translations.find((t) => (t.locale ?? t.lang) === locale);
        if (hit?.[field] != null) return hit[field];
    } else if (item.translations?.[locale]?.[field] != null) {
        return item.translations[locale][field];
    }
    return locale === "en" ? (item[field] ?? "") : "";
}

export const getName = (item) => item?.name || getTr(item, "en") || getTr(item, "ar") || "-";

export const text = (v) => {
    if (v == null || v === "") return "-";
    if (typeof v === "string" || typeof v === "number") return String(v);
    return v.name ?? v.title ?? v.address ?? v.id ?? "-";
}

export const toNested = (flat) => {
    const out = {};
    Object.entries(flat).forEach(([key, value]) => {
        const parts = key.split(".");
        let cursor = out;
        parts.forEach((p, i) => {
            if (i === parts.length - 1) cursor[p] = value;
            else cursor = cursor[p] = cursor[p] || {};
        });
    });
    return out;
}
