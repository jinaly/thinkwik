import { Provider } from "react-redux";
import RouterProvider from "./navigation/RouterProvider";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider />
      </Provider>
    </div>
  );
}

export default App;
