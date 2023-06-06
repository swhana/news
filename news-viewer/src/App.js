import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './NewsPage';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsPage />} />
        <Route path="/:category" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;