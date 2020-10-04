import { createContext } from "react";
import { Creature } from "../types/creature";

export type CreaturesContextValue = {
  creatures: Creature[] ;
  setUser: (creatures:Creature[] ) => void;
};

export const CreaturesContext = createContext<CreaturesContextValue>({
  creatures: undefined,
  setCreature: () => {},
});