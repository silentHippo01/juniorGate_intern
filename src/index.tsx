import { createRoot } from 'react-dom/client';
import App from "./app/App";
import { StoreProvider } from './app/providers/StoreProvider';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreProvider>
)