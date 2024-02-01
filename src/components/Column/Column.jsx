import { Draggable, Droppable } from 'react-beautiful-dnd';
import TaskItem from '../TaskItem/TaskItem';

const Column = ({ id, box, name }) => {
  return (
    <div className="bg-slate-100 p-[10px] rounded-s-lg">
      <Droppable droppableId={id} type="group">
        {(provided, snapshot) => (
          <div
            className={`flex flex-col gap-[10px] p-[15px] min-h-[200px] m-[5px] border-[2px] border-slate-300 rounded-lg`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <h2 className="text-center text-lg font-semibold">{name}</h2>

            {box?.map((task, index) => {
              return (
                <Draggable
                  draggableId={task.id.toString()}
                  key={task.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      className="bg-violet-200 py-[15px] px-[5px] shadow-sm rounded-lg border-[3px] border-violet-300"
                      isDragging={snapshot.isDragging}
                    >
                      <TaskItem key={index} task={task} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
