import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Cart } from "./pages/Cart";
import { Home } from "./pages/Home";
import { Summary } from "./pages/Summary";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/carrinho" element={<Cart />} />
                <Route path="/summary" element={<Summary />} />
            </Route>
        </Routes>
    )
}