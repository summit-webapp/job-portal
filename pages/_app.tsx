import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import Layout from "../components/Layout";
import "../styles/bootstrap.css";
import "../styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {() => (
            <div>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </div>
          )}
        </PersistGate>
      </Provider>
    </div>
  );
}
export default MyApp;