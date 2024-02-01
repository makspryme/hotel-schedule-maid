import { Droppable } from 'react-beautiful-dnd';
import Trash from '../../svg/Trash.jsx';

const DeleteTask = ({ id }) => {
  return (
    <div className="flex items-center">
      <Droppable droppableId={id} type="group">
        {(provided, snapshot) => (
          <div
            className={`flex justify-center items-center gap-[10px] p-[15px] w-[100px] h-[100px] bg-red-300 m-[5px] rounded-lg`}
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            <Trash />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DeleteTask;
