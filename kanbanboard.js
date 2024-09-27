import React, { useState } from 'react';
import TicketCard from './TicketCard';

function KanbanBoard({ data }) {
  const [grouping, setGrouping] = useState('Status');
  const [sorting, setSorting] = useState(null); // 'Priority' or 'Title'

  const groupedData = groupTickets(data, grouping);
  const sortedData = sortTickets(groupedData, sorting);

  function handleGroupingChange(e) {
    setGrouping(e.target.value);
  }

  function handleSortingChange(e) {
    setSorting(e.target.value);
  }

  return (
    <div className="kanban-board">
      <div className="controls">
        <select value={grouping} onChange={handleGroupingChange}>
          <option value="Status">Group by Status</option>
          <option value="User">Group by User</option>
          <option value="Priority">Group by Priority</option>
        </select>
        <select value={sorting} onChange={handleSortingChange}>
          <option value="">Sort</option>
          <option value="Priority">Priority (High to Low)</option>
          <option value="Title">Title (A to Z)</option>
        </select>
      </div>
      <div className="board-columns">
        {Object.entries(sortedData).map(([group, tickets]) => (
          <div key={group} className="column">
            <h2>{group}</h2>
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function groupTickets(data, grouping) {
  const groups = {};
  data.forEach((ticket) => {
    const groupValue = ticket[grouping.toLowerCase()];
    groups[groupValue] = groups[groupValue] || [];
    groups[groupValue].push(ticket);
  });
  return groups;
}

function sortTickets(data, sorting) {
  if (!sorting) return data;

  const sortedData = {};
  Object.entries(data).forEach(([group, tickets]) => {
    sortedData[group] = tickets.sort((a, b) => {
      if (sorting === 'Priority') {
        return b.priorityLevel - a.priorityLevel; // High to Low
      } else if (sorting === 'Title') {
        return a.title.localeCompare(b.title); // A to Z
      }
      return 0;
    });
  });
  return sortedData;
}

export default KanbanBoard;
