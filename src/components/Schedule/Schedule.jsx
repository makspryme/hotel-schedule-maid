import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';

const Schedule = () => {
  const [tasks, setTasks] = useState([
    {
      name: 'Hotel 1',
      duration: 2,
      deadline: '15:30',
      room: 126,
      id: Math.random(),
    },
    {
      name: 'Hotel 2',
      duration: 1,
      deadline: '18:00',
      room: 89,
      id: Math.random(),
    },
    {
      name: 'Hotel 1',
      duration: 1.5,
      deadline: '17:30',
      room: 42,
      id: Math.random().toString(),
    },
  ]);
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState(null);
  const [deadline, setDeadline] = useState('');
  const [room, setRoom] = useState('');

  const addTask = () => {
    const newTask = {
      name: taskName,
      duration,
      deadline,
      room,
      id: Math.random(),
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setDuration(null);
    setDeadline('');
    setRoom('');
  };

  return (
    <>
      <h2
        className="text-center text-[46px] text-blue-300 mb-[15px]"
        style={{ textShadow: '0px 0px 4px rgba(0, 0, 0, 1)' }}
      >
        SCHEDULE
      </h2>
      <div className="flex items-center">
        <div className="flex flex-col items-center gap-[15px] mb-[50px] mr-auto ml-auto border-[2px] rounded-lg bg-white p-[15px]">
          <div className="flex flex-col gap-[15px]">
            <div className="flex flex-col">
              <label className="mr-[5px] font-semibold">Task</label>
              <input
                type="text"
                className="p-[10px] rounded-lg"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Hotel 1"
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-[5px] font-semibold">Duration</label>
              <input
                type="number"
                className="p-[10px] rounded-lg"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="2"
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-[5px] font-semibold">Deadline</label>
              <input
                type="time"
                className="p-[10px] rounded-lg"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-[5px] font-semibold">Room</label>
              <input
                type="text"
                className="p-[10px] rounded-lg"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder="128"
              />
            </div>
          </div>
          <button
            onClick={addTask}
            className="bg-violet-200 hover:bg-violet-400 font-semibold transition-bg ease-in-out duration-150 p-[10px] rounded-lg w-full"
          >
            Add
          </button>
        </div>
        <div className="flex-1">
          <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
};

export default Schedule;
