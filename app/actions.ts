import { redirect } from "next/navigation";
import { getGameUrl } from "./lib/gameState";

/**
 * Server action to end a game session
 * Called when the player hits the back button on the play page.
 */
export async function endGame(page: string) {
  redirect(page);
}

/**
 * Server action to get the game URL
 * Called by the game page to load the iframe
 */
export async function getGameStreamUrl() {
  return getGameUrl();
}

/**
 * Server action to start a hard coded game
 * Redirects to the game page if successful
 */
export async function startGame() {
  redirect("/play-cyberpunk");
}