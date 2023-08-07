import AppRouter  from './providers/router/ui/AppRouter';
import './styles/index.scss';

const App = () => {
    return (
        <div className="app">
            <AppRouter /> 
        </div>
    );
};

export default App;