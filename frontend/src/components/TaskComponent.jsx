import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Sample data for projects and tasks
const projectData = {
  ProjectA: [
    { taskName: 'Task 1', timeRemaining: 3 },
    { taskName: 'Task 2', timeRemaining: 5 },
    { taskName: 'Task 3', timeRemaining: 2 },
  ],
  ProjectB: [
    { taskName: 'Task 1', timeRemaining: 4 },
    { taskName: 'Task 2', timeRemaining: 1 },
  ],
  ProjectC: [
    { taskName: 'Task 1', timeRemaining: 6 },
    { taskName: 'Task 2', timeRemaining: 2 },
    { taskName: 'Task 3', timeRemaining: 3 },
    { taskName: 'Task 4', timeRemaining: 2 },
  ],
  ProjectF: [
    { taskName: 'Task 1', timeRemaining: 6 },
    { taskName: 'Task 2', timeRemaining: 2 },
    { taskName: 'Task 3', timeRemaining: 3 },
    { taskName: 'Task 4', timeRemaining: 2 },
  ],
  ProjectD: [
    { taskName: 'Task 1', timeRemaining: 6 },
    { taskName: 'Task 2', timeRemaining: 2 },
    { taskName: 'Task 3', timeRemaining: 3 },
    { taskName: 'Task 4', timeRemaining: 2 },
  ],
  ProjectE: [
    { taskName: 'Task 1', timeRemaining: 6 },
    { taskName: 'Task 2', timeRemaining: 2 },
    { taskName: 'Task 3', timeRemaining: 3 },
    { taskName: 'Task 4', timeRemaining: 2 },
  ],
};

// Prepare data for the bar chart
const chartData = Object.keys(projectData).map((projectName) => ({
  projectName,
  totalTimeRemaining: projectData[projectName].reduce(
    (acc, task) => acc + task.timeRemaining,
    0
  ),
  taskCount: projectData[projectName].length,
}));

const TaskComponent = () => {
  return (
    <div style={{ width: '80%', height: 300 }}>
      <h2 style={{ textAlign: 'center' }}>Pending Work by Project</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            dataKey="totalTimeRemaining"
            label={{
              value: 'Hours Remaining',
              position: 'insideBottomRight',
              offset: 0,
            }}
          />
          <YAxis type="category" dataKey="projectName" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="totalTimeRemaining"
            fill="#8884d8"
            name="Total Time Remaining (hrs)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskComponent;
