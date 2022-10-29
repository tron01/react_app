import Card from './components/card';
import Form from './components/form';


function App() {
  const onFormSubmit = (a) => {
    console.log(a);
  }
  return (
    <div>
      <Card />
      <Form onFormSubmit={onFormSubmit} />
    </div>
  );
}

export default App;
