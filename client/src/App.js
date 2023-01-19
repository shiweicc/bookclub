import React from 'react';
import './App.css';
import BookForm from './components/BookForm.js';
import NameForm from './components/NameForm.js';

function App() {
  const [name, setName] = React.useState(null);
  const userName = !name ? 'there' : name;

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((name) => setname(name.message));
  // }, []);

  const updateName = (name) => {
    setName(name);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1> 👋 Hello {userName}, welcome to your bookshelf📚!</h1>
      </header>
      {/* <NameForm updateName={updateName}/> */}
      <BookForm />
    </div>
  );
}

export default App;
