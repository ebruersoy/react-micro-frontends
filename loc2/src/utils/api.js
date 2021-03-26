import * as Api from "api/Api";

export async function getLocations(url) {
  return await Api.getEpisodes(url);
}

export function getBaseLocationUrl() {
  return Api.getBaseLocationUrl();
}
