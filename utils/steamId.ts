export default function isValidSteamId(steamId: string | number): boolean {

    const steamIdNumber = Number(steamId);

    if (isNaN(steamIdNumber)) return false;

    return steamIdNumber > 76561190000000000;

}
