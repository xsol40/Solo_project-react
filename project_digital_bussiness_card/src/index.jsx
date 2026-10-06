import { createRoot } from 'react-dom/client';
import './index.css';

import Profile from './components/Profile'
import About from './components/About'
import Intrest from './components/Intrest'
import Links from './components/Links'

const element = document.getElementById('root');
const root = createRoot(element)

root.render(
    <div className="card">
        <Profile />
        <About />
        <Intrest />
        <Links />       
    </div>
)

console.log(<h1>Hello world</h1>)
