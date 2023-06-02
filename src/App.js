import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./pages/Shared/style.css";
import Route from "./pages/Route/Route";
import { Toaster } from "react-hot-toast";
import OrderContext from "./ContextApi/OrderContext";

function App() {
  return (
    <div className="sm:max-w-[300px] md:max-w-screen-xl mx-auto overflow-hidden">
      <OrderContext>
        <RouterProvider router={Route}></RouterProvider>
      </OrderContext>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
