import { ADD_NOVEL_WORD, SUBTRACT_NOVEL_WORD } from "@/redux/actionTypes/novel";

export const addNovelWord = (payload: any): object => ({
  type: ADD_NOVEL_WORD,
  payload,
});

export const subtractNovelWord = (payload: any): object => ({
  type: SUBTRACT_NOVEL_WORD,
  payload,
});
