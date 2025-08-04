import { NavLink, Outlet } from "react-router";
import './data.css';

export default function DataLayout() {
    return (
        <>
            <header>
                <h1>This is header</h1>
                <nav>
                    <ul>
                        <li><NavLink to="/data/products">Products</NavLink></li>
                        <li><NavLink to="/data/sellers">Sellers</NavLink></li>
                        <li><NavLink to="/data/customers">Customers</NavLink></li>
                        <li><NavLink to={{
                            pathname: "/data/products",
                            search: "?category=shoes",
                            hash: "#top"
                        }}>Products</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>This is footer</p>
            </footer>
        </>
    );
}