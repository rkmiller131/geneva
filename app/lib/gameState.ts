import { GAME_URL } from "./constants/game.constants";

interface GameUrlResult {
  success: boolean;
  url: string;
}

export async function getGameUrl(): Promise<GameUrlResult> {
  const url = GAME_URL || "";
  return {
    success: true,
    url
  };
}