import Navigation from "../components/Navigation/Navigation";

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
}

export default Layout;