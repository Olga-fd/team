import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, persistedState } from "./store/store";
import { Registration } from "./shared/Forms/Registration/Registration";
import { DisplayOfCard } from "./shared/DisplayOfCard/DisplayOfCard";
import { Authorization } from "./shared/Forms/Authorization/Authorization";
import { CardOfPartner } from "./shared/CardOfPartner/CardOfPartner";
import { StartDisplay } from "./shared/StartDisplay/StartDisplay";
import "./styles/normalize.min.css";
import "./styles/main.css";

const store = createStore(rootReducer, persistedState, composeWithDevTools());

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartDisplay />} />
          <Route path="/regist" element={<Registration />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/team" element={<DisplayOfCard />} />
          <Route path="/participant/:id" element={<CardOfPartner />} />
          <Route path="/dist/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
