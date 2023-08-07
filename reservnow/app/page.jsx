import store, { persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function Landing(){
    return(
        <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}></PersistGate>
        </Provider>
    )
}
