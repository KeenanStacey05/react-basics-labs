import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Wash the dishes and put them away." />
      <Task title="Laundry" deadline="Tomorrow" description="Don't forget to separate colors and whites!" />
      <Task title="Tidy" deadline="Today" description="Organize your workspace and clear any clutter." />
    </div>
  );
}

export default App;
