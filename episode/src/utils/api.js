import * as Api from "api/Api";

export async function getEpisodes(url) {
  return await Api.getEpisodes(url);
}

export function getBaseEpisodeUrl() {
  return Api.getBaseEpisodeUrl();
}
