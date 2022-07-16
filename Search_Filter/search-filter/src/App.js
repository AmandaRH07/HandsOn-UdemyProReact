import { useState, useEffect } from 'react';
import TicketsFilter from './components/TicketsFilter';
import TicketsList from './components/TicketsList';
import { dummyTickets } from './data/tickets-data';
 
function App() {
  const [supportTickets, setSupportTickets] = useState(dummyTickets);
  const [statusFilter, setStatusFilter] = useState('all');
  const [assigneeFilter, setAssigneeFilter] = useState('all');
  const [ticketSeachTerm, setTicketSeachTerm] = useState('');
 
  useEffect(function(){
    setSupportTickets(dummyTickets.filter(function(ticket){
      const ticketHasFilteredStatus = statusFilter === 'all' || statusFilter === ticket.status;
      const ticketHasFilteredAssignee = assigneeFilter === 'all' || assigneeFilter === ticket.assignee;
      const normalizedTitle = ticket.title.toLocaleLowerCase();
      const normalizedText = ticket.text.toLocaleLowerCase();
      const normalizedSearchTerm = ticketSeachTerm.toLowerCase();

      const ticketHasSearchTerm = normalizedTitle.includes(normalizedSearchTerm) || normalizedText.includes(normalizedSearchTerm);
    
      return ticketHasFilteredStatus && ticketHasFilteredAssignee && ticketHasSearchTerm
    }))
  }, [statusFilter, assigneeFilter, ticketSeachTerm]);

  function findTicketsHandler(searchTerm) {
    setTicketSeachTerm(searchTerm);
  }

  function changeStatusHandler(newStatus) {
    setStatusFilter(newStatus);
  }

  function changeAssigneeHandler(newAssignee) {
    setAssigneeFilter(newAssignee);
  }

  return (
    <main>
      <TicketsList tickets={supportTickets}/>
      <TicketsFilter
        onChangeStatus={changeStatusHandler}
        onChangeAssignee={changeAssigneeHandler}
        onSearch={findTicketsHandler}
      />
    </main>
  );
}

export default App;
