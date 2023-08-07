import AppRouter  from './providers/router/ui/AppRouter';
import './styles/index.scss';
import Star from 'shared/assets/images/add-circle-svgrepo-com.svg';
import { Main } from 'pages/Main/ui/Main';

const App = () => {
    return (
        <div className="app">
            <h1>title</h1>
            <AppRouter /> 
        </div>
    );
};

export default App;