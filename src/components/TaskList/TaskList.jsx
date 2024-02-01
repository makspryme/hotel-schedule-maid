import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../Column/Column';
import DeleteTask from '../DeleteTask/DeleteTask';

const TaskList = ({ tasks, setTasks }) => {
  const [jesica, setJesica] = useState([]);
  const [victoria, setVictoria] = useState([]);
  const [lola, setLola] = useState([]);

  const handlerDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (source?.droppableId === null || destination?.droppableId === null)
      return;

    if (source?.droppableId === destination?.droppableId) return;

    if (source.droppableId === '1') {
      setTasks(removeItemById(draggableId, tasks));
    } else if (source.droppableId === '2') {
      setJesica(removeItemById(draggableId, jesica));
    } else if (source.droppableId === '3') {
      setVictoria(removeItemById(draggableId, victoria));
    } else if (source.droppableId === '4') {
      setLola(removeItemById(draggableId, lola));
    }

    const task = findItemById(draggableId, [
      ...tasks,
      ...jesica,
      ...victoria,
      ...lola,
    ]);

    if (destination?.droppableId === '1') {
      setTasks([{ ...task }, ...tasks]);
    } else if (destination?.droppableId === '2') {
      setJesica([{ ...task }, ...jesica]);
    } else if (destination?.droppableId === '3') {
      setVictoria([{ ...task }, ...victoria]);
    } else if (destination?.droppableId === '4') {
      setLola([{ ...task }, ...lola]);
    }

    function findItemById(id, array) {
      return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
      return array.filter((item) => {
        return item.id != id;
      });
    }
  };

  return (
    <>
      <DragDropContext onDragEnd={handlerDragEnd}>
        <div className="flex justify-center gap-[15px] ">
          <div className="overflow-y-scroll h-[max-content] max-h-[600px] w-1/3 ">
            <Column id={'1'} box={tasks} name={'Tasks'} />
          </div>

          <div className="flex flex-col overflow-y-scroll max-h-[600px] w-1/3">
            <Column id={'2'} box={jesica} name={'Jesica'} />

            <Column id={'3'} box={victoria} name={'Victoria'} />

            <Column id={'4'} box={lola} name={'Lola'} />
          </div>
          <DeleteTask id={'delete'} />
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskList;
