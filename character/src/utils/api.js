import * as Api from "api/Api";

export async function getMultipleCharacters(ids = []) {
  const results = await Api.getMultipleCharacters(ids);
  return results;
}
