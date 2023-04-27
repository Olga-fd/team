import React from "react";
import { Header } from "./shared/Header/Header";
import { Layout } from "./shared/Layout/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, persistedState } from "./store/store";
import "./styles/normalize.min.css";
import "./styles/main.css";
import { MainBlock } from "./shared/MainBlock/MainBlock";
import { Form } from "./shared/Form/Form";
const store = createStore(rootReducer, persistedState, composeWithDevTools());

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Header />
        <Layout>
          <MainBlock />
        </Layout> */}
        <Form />
      </BrowserRouter>
    </Provider>
  );
}
