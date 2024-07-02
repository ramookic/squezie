"use client";

import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE } from "./config";
import { useActions } from "./actions";
import { imageCompressorReducer } from "./reducer";

const ImageCompressorContext = createContext();

export function ImageCompressorProvider({ children }) {
  const [state, dispatch] = useReducer(imageCompressorReducer, INITIAL_STATE);
  const contextValues = useActions(state, dispatch);

  const progress =
    (state.compressedFiles.length / state.uploadedFiles.length) * 100;

  return (
    <ImageCompressorContext.Provider
      value={{ state, progress, ...contextValues }}
    >
      {children}
    </ImageCompressorContext.Provider>
  );
}

export function useImageCompressor() {
  const context = useContext(ImageCompressorContext);
  if (context === undefined) {
    throw new Error(
      "ImageCompressorContext was used outside ImageCompressorProvider"
    );
  }
  return context;
}
