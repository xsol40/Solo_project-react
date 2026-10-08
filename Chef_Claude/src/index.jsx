import {createRoot} from 'react-dom/client';
import App from "./App"

const domNod = document.getElementById('root')
const root = createRoot(domNod);

root.render(
    <App />
)