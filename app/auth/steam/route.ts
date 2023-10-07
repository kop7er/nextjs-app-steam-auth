import { redirect } from "next/navigation";
import { getSteamAuthenticationURL } from "@/utils/auth/steam";

export async function GET() {

    const authenticationURL = await getSteamAuthenticationURL();

    redirect(authenticationURL);

}
