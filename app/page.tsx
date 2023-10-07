import Image from "next/image";
import { BsSteam } from "react-icons/bs";
import isValidSteamId from "@/utils/steamId";

type PageProps = { searchParams?: { steamId?: string } }

async function getPlayerData(steamId: string) {

    const response = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`, {
        next: {
            revalidate: 3600
        }
    });

    if (!response.ok) {

        throw new Error("Failed to fetch player data");

    }

    const data = await response.json();

    return data.response.players[0];

}

export default async function Home({ searchParams }: PageProps) {

    const steamId = searchParams?.steamId;

    if (!steamId || !isValidSteamId(steamId)) {

        return (
            <div className="flex flex-col items-center space-y-4">
                <a href="/auth/steam" className="flex flex-row items-center space-x-4 border border-gray-400 text-white px-8 py-4 rounded-lg">
                    <BsSteam className="text-4xl" />
                    <span className="text-xl font-semibold">Sign in with Steam</span>
                </a>
            </div>
        )

    }

    const accountData = await getPlayerData(steamId);

    return (
        <div className="flex flex-row items-center space-x-6">
            <Image src={accountData.avatarfull} alt="Steam Avatar" width={128} height={128} className="rounded-full" />
            <div className="flex flex-col">
                <div className="mb-2 text-2xl font-bold">{accountData.personaname}</div>
                <div className="text-xl">{accountData.steamid}</div>
            </div>
        </div>
    )

}
