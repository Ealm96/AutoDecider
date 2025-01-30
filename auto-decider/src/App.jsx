import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormPage } from './Pages/FormPage';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  )
}
