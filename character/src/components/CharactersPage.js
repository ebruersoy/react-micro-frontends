import React, { useReducer, useEffect, useState } from "react";
import { default as Button } from "./Button";
import CharacterList from "./CharacterList";
import * as api from "../utils/api";

export default function CharactersPage(props) {
  const initialState = {
    characters: [],
    loading: false,
    page: 0,
    nextPage: false,
    charactersPerPage: 6,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [characterIds, setCharacterIds] = useState(props.characterIds);

  useEffect(() => {
    dispatch({ type: "fetchCharacters" });
  }, []);
  const { page, nextPage, loading } = state;

  const fetchData = async (ids, newArray) => {
    const results = await api.getMultipleCharacters(ids);
    setCharacterIds(newArray);

    dispatch({
      type: "addCharacters",
      payload: {
        nextPage: newArray.length > 0,
        results: results,
      },
    });
  };

  useEffect(() => {
    if (page > 0 && characterIds.length > 0) {
      const newArray = [...characterIds];
      const ids = newArray.splice(
        0,
        newArray.length < initialState.charactersPerPage
          ? newArray.length
          : initialState.charactersPerPage
      );
      fetchData(ids, newArray);
    }
  }, [page]);
  return (
    <div>
      <CharacterList {...state} />
      {nextPage ? (
        <Button
          disabled={loading || !nextPage}
          loading={loading}
          onClick={() => {
            dispatch({ type: "fetchCharacters" });
          }}
        >
          Load More
        </Button>
      ) : null}
    </div>
  );
}
function reducer(state, action) {
  const newState = { ...state };
  switch (action.type) {
    case "addCharacters":
      const { payload } = action;
      newState.loading = false;
      newState.nextPage = payload.nextPage;
      newState.characters = [...newState.characters, ...payload.results];
      return newState;
    case "fetchCharacters":
      newState.loading = true;
      newState.page = newState.page + 1;
      return newState;
    default:
      return state;
  }
}
