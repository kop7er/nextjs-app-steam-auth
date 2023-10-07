import { type NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { getSteamUserIdentifier } from "@/utils/auth/steam";

export async function GET(request: NextRequest) {

    const identifier = await getSteamUserIdentifier(request);

    const urlRedirect = new URL(request.nextUrl.origin);

    urlRedirect.searchParams.set("steamId", identifier);

    redirect(urlRedirect.href);

}
