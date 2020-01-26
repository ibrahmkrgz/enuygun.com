import { PATHS } from '../../constants/routePaths';
import { HomePage, AboutPage, MovieDetailPage, NotFoundPage } from '../../pages';

const routes = {
  homePage: {
    path: PATHS.HOME_PAGE,
    component: HomePage,
  },
  MovieDetailPage: {
    path: PATHS.MOVIE_DETAIL_PAGE,
    component: MovieDetailPage,
  },
  aboutPage: {
    path: PATHS.ABOUT_PAGE,
    component: AboutPage,
  },
  notFound: {
    path: PATHS.NOT_FOUND,
    component: NotFoundPage,
  },
};

export default routes;
