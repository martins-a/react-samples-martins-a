import './App.css';
import FormikSimpleForm from './components/formik-simple-samples/FormikSimpleForm';
import FormikWithHooks from './components/formik-simple-samples/FormikWithHooks';
import FormikWithHooks2 from './components/formik-simple-samples/FormikWithHooks2';
import VanillaForm from './components/vanilla-approach/VanillaForm';

function App() {
  return (
    <div className="App">
      {/* <VanillaForm /> */}
      {/* <FormikSimpleForm /> */}
      {/* <FormikWithHooks /> */}
      <FormikWithHooks2 />
    </div>
  );
}

export default App;
