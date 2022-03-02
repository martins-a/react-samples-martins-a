import './App.css';
import FormikSimpleForm from './components/formik-simple-samples/FormikSimpleForm';
import FormikWithHooks from './components/formik-simple-samples/FormikWithHooks';
import FormikWithHooks2 from './components/formik-simple-samples/FormikWithHooks2';
import VanillaForm from './components/vanilla-approach/VanillaForm';
import FormikWithCustomFields from './components/formik-with-custom-fields/FormikWithCustomFields';
import FormikWithMaterial from './components/formik-with-material/FormikWithMaterial';

function App() {
  return (
    <div className="App">
      {/* <VanillaForm /> */}
      {/* <FormikSimpleForm /> */}
      {/* <FormikWithHooks /> */}
      {/* <FormikWithHooks2 /> */}
      {/* <FormikWithCustomFields /> */}
      <FormikWithMaterial />
    </div>
  );
}

export default App;
