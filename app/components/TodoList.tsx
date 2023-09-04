import { ITask } from "@/types/tasks";
import Task from "./Task";
interface TodoListProps {
  tasks: ITask[];
}
const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <>
      {tasks.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table flex justify-around">
            {/* head */}
            <thead className="bg-white">
              <tr>
                <th></th>
                <th className="text-left">Tarefa</th>

                <th className="text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              )).reverse()}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h2">Nenhuma Tarefa Registrada!</div>
      )}
    </>
  );
};
export default TodoList;
