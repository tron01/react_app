import Card from './components/card';
import Form from './components/form';
import List from './components/list';


function App() {
  const onFormSubmit = (a) => {

  }
  return (
    <div>
      <Card />
      <Form onFormSubmit={onFormSubmit} />
      <List />
    </div>
  );
}

export default App;
