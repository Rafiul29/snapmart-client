import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";
import { StoreProvider } from "./context/StoreContext";

function App() {
  return (
    <>
      <AuthProvider>
        <StoreProvider>
          <RouterProvider router={router} />
        </StoreProvider>
      </AuthProvider>
    </>
  );
}

export default App;
