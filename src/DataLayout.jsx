import { Outlet } from "react-router";

export default function DataLayout() {
    return (
        <>
            <header>
                <h1>This is header</h1>
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