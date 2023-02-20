import HomePage from "./pages/HomePage"
import NewCommentPage from "./pages/NewCommentPage"
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    {path : "/new-component", component: NewCommentPage},
    {path : "/", component: HomePage , exact: true},
    {path : "*", component: NotFoundPage},
];

export default routes;