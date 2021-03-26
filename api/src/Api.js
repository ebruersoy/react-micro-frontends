const baseUrl = "https://rickandmortyapi.com/api/";
const characterPath = "character/";
const episodePath = "episode/";
const locationPath = "location/";

const _fetchData = async (url) => {
  const result = await fetch(`${url}`);
  const body = await result.json();
  return body; //.info.next .results
};

export async function getMultipleCharacters(arrIds) {
  const ids = arrIds.join(",");
  const url = baseUrl + characterPath + ids;
  const result = await _fetchData(url);
  if (!Array.isArray(result)) {
    const arr = [];
    arr.push(result);
    return arr;
  }
  return result;
}

export function getEpisodes(url) {
  return _fetchData(url);
}
export function getLocations(url) {
  return _fetchData(url);
}

export function getBaseEpisodeUrl() {
  return baseUrl + episodePath;
}
export function getBaseLocationUrl() {
  return baseUrl + locationPath;
}
