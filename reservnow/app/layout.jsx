"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/Context/context";
import {store} from "@/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import {eventCentreApi} from "../features/eventCentreHome/EventCentreSlice"
import {searchCentreApi} from "../features/eventCentreHome/SearchCentreSlice"
import { Providers } from "@/features/eventCentreHome/Providers";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider store={store}>
          <ApiProvider api={eventCentreApi}>
            <div>{children}</div>
          </ApiProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
