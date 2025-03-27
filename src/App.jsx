import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./routes/routes";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
}

export default App;
