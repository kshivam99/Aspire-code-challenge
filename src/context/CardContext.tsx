import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { defaultCards } from "./data";

export interface CardType {
  id: string;
  number: number[];
  frozen: boolean;
  cvv: number;
  expiry: string;
  name: string;
  balance: number;
}

export interface State {
  cards: CardType[];
  visibleCardId: string | null;
}

export type Action =
  | { type: "SET_CARDS"; payload: CardType[] }
  | { type: "SET_VISIBLE_CARD"; payload: string | null }
  | { type: "FREEZE_CARD"; payload: string }
  | { type: "UNFREEZE_CARD"; payload: string }
  | { type: "ADD_CARD"; payload: string }
  | { type: "REMOVE_CARD"; payload: string };

const initialState: State = {
  cards: defaultCards,
  visibleCardId: null,
};

export const CardContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };
    case "SET_VISIBLE_CARD":
      return {
        ...state,
        visibleCardId: action.payload,
      };
    case "FREEZE_CARD":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, frozen: true } : card
        ),
      };
    case "UNFREEZE_CARD":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, frozen: false } : card
        ),
      };
    case "REMOVE_CARD":
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case "ADD_CARD":
      const randomCVV = Math.floor(Math.random() * 1000);
      const randomNumberArray = Array.from({ length: 4 }, () => {
        const randomNum = Math.floor((Math.random() * 0.8 + 0.1) * 10000);
        return randomNum;
      });
      const currentYear = new Date().getFullYear();
      const randomYear = currentYear + Math.floor(Math.random() * 10);
      const randomMonth = Math.floor(Math.random() * 12) + 1;
      const randomExpiry = `${randomMonth}/${randomYear.toString().slice(-2)}`;
      const randomBalance = Math.floor(Math.random()*10000);
      const newCard: CardType = {
        id: Math.random().toString(36).substr(2, 9),
        number: randomNumberArray,
        frozen: false,
        cvv: randomCVV,
        expiry: randomExpiry,
        name: action.payload,
        balance: randomBalance,
      };

      return {
        ...state,
        cards: [...state.cards, newCard],
      };

    default:
      return state;
  }
};

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);
