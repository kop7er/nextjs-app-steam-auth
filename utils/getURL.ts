export default function getURL(trailingSlash = true): string {

    let url = process.env.NEXT_PUBLIC_VERCEL_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000/";

    url = url.includes("http") ? url : `https://${url}`;

    if (trailingSlash && !url.endsWith("/")) {

        url += "/";

    } else if (!trailingSlash && url.endsWith("/")) {

        url = url.slice(0, -1);

    }

    return url;

}
