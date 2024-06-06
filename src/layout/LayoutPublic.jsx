import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const LayoutPublic = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Header/>
            <main >
                {navigation.state === "loading" && (
                    <div >Loading...</div>
                )}
                <Outlet />
            </main>
            <footer ><Footer/></footer>
        </div>
    );
};
export default LayoutPublic;