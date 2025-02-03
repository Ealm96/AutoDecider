import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormPage } from './Pages/FormPage';
import DisplayPage from './Pages/DisplayPage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/AutoDecider/" index element={<FormPage />} />
        <Route path='DisplayPage' element={<DisplayPage />} />
      </Routes>
    </BrowserRouter>
  )
}
