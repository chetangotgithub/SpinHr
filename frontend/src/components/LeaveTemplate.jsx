import React from 'react';

const LeaveTemplate = ({ leave, setleave, handelSubmit }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '300px',
          margin: '0 auto',
        }}
      >
        <label htmlFor="reason">Reason:</label>
        <input
          type="text"
          value={leave.reason}
          onChange={(e) => setleave({ ...leave, reason: e.target.value })}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />

        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          value={formatDate(leave.startDate)}
          onChange={(e) => setleave({ ...leave, startDate: e.target.value })}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />

        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          value={formatDate(leave.endDate)}
          onChange={(e) => setleave({ ...leave, endDate: e.target.value })}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />

        <button
          onClick={handelSubmit}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeaveTemplate;
