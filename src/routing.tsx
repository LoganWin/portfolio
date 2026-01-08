import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import ReferencePage from './pages/ReferencePage';

export function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                    <Route path="/reference-page" element={<ReferencePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
