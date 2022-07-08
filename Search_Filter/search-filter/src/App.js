import TicketsFilter from './components/TicketsFilter';

function App() {
  function findTicketsHandler(searchTerm) {
    // Todo
  }

  function changeStatusHandler(newStatus) {
    // Todo
  }

  function changeAssigneeHandler(newAssignee) {
    // Todo
  }

  return (
    <main>
      {/* Missing: List of tickets */}
      <TicketsFilter
        onChangeStatus={changeStatusHandler}
        onChangeAssignee={changeAssigneeHandler}
        onSearch={findTicketsHandler}
      />
    </main>
  );
}

export default App;
