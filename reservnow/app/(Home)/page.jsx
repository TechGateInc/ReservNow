"use client";

import CentreGallery from "@/components/CentreGallery/CentreGallery";
import store, { persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CentreGallery />
      </PersistGate>
    </Provider>
  );
}
