import Header from "../Components/Header";
import Footer from "../Components/Footer";

function renderError() {
    localStorage.clear("trackit");
    return <h1>VOCÊ NÃO É AUTORIZADO</h1>;
}

export default function PrivatePage({ children }) {

    const auth = JSON.parse(localStorage.getItem("trackit"));

    if (!auth) {
        return renderError();
    }

    return (
        <>
            <Header />
            <>
                {children}
            </>
            <Footer />
        </>
    );
    
}

