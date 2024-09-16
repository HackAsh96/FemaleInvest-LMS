import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { RootStoreState } from "../../redux/types";

/**
 * This utility function add types to the useDispatch hook to avoid repetition across the app.
 */
export const useAppDispatch = (): ThunkDispatch<RootStoreState, void, Action> =>
  useDispatch<ThunkDispatch<RootStoreState, void, Action>>();