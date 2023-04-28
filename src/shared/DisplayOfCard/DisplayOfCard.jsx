import React from "react";
import { HeaderBasic } from "../HeaderBasic/HeaderBasic";
import { Layout } from "../Layout/Layout";
import { MainBlock } from "../MainBlock/MainBlock";

export function DisplayOfCard() {
  return (
    <>
      <HeaderBasic />
      <Layout>
        <MainBlock />
      </Layout>
    </>
  );
}
