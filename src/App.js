function App() {
  return (
    <div className="App">
      <AppBar
        title={'My title'}
        subtitle={'My subtitle'}
        author={'Daniela Liendo'}
      />
    </div>
  );
}

export const AppBar = ({ title, subtitle, author }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <hr />
      <h2>Author: {author}</h2>
    </>
  )
}

export default App;
