import Home from 'containers/pages/Home';
import Error404 from 'containers/errors/Error404';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Polls from 'containers/pages/polls/Polls';
import PollsQuestion from 'containers/pages/polls/PollsQuestion'
import PollsCategory from 'containers/pages/polls/category/PollsCategory';

import Search from 'containers/pages/Search';
import Categories from 'containers/pages/category/Categories';
import About from 'containers/pages/About';
import PollsQuestionResult from 'containers/pages/polls/PollsQuestionResult';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error display */}
          <Route path="*" element={<Error404 />} />

          {/* Home display */}
          <Route path="/" element={<Home />} />

          <Route path="/polls" element={<Polls/>} />
          <Route path="/polls/question/:slug" element={<PollsQuestion />} />
          <Route path="/polls/question/:slug/results" element={<PollsQuestionResult />} />
          <Route path="/polls/categories/:category_id" element={<PollsCategory />} />
          <Route path="/search/:term" element={<Search />}/>

          <Route path="/polls/categories" element={<Categories />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
