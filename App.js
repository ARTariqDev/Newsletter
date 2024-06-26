import * as React from "react";
import { StatusBar } from "react-native";
import RootNavigator from "./navigators/RootNavigator";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
    </>
  );
}
