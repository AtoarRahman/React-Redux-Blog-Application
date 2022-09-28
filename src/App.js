import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import store from "./redux/store";
import Search from './components/post/Search';
import PostList from './components/post/PostList';

function App() {
    return (
        <Provider store={store}>
            <>
                <Navbar />
                <Search/>
                <PostList/>
                <Footer/>
            </>
        </Provider>
    );
}

export default App;
