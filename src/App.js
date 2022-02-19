import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import './App.css';
import CarRequestForm from './components/CarRequestForm';

function App() {
  return (
    <div>
      <CssBaseline />
      <Layout>
        <CarRequestForm />
        {/* <CarRequestsList />  */}
      </Layout>
    </div>
  );
}

export default App;
