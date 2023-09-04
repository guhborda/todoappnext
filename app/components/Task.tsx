"use client";
import { ITask } from "@/types/tasks";
import { AiFillEdit } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useState, FormEventHandler } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";

import { deleteTodo, updateTodo } from "@/api";
interface TaskProps {
  task: ITask;
}
const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [isChecked, setChecked] = useState<boolean>(task.checked);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const handleChangeChecked = async () => {
    const newCheckedValue = !isChecked;
    setChecked(newCheckedValue);
    await updateTodo({ id: task.id, text: task.text, checked: newCheckedValue });
    router.refresh();
  };
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const randomid = Math.random();
    await updateTodo({ id: task.id, text: taskToEdit, checked: isChecked });
    setTaskToEdit(taskToEdit);
    setOpenModalEdit(false);
    router.refresh();
  };
  const handleDeletTodo = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={isChecked}
            onChange={handleChangeChecked}
          />
        </label>
      </th>
      <td>{isChecked ? <s>{task.text}</s>: task.text}</td>
      <td className="flex justify-end gap-5">
        <FiEdit
          cursor="pointer"
          onClick={() => setOpenModalEdit(true)}
          className={`text-blue-500`}
          size={20}
        />
        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditTodo} className="w-full mx-auto">
            <h3 className="font-bold text-lg text-center mb-2">
              Editar Tarefa
            </h3>
            <div className="w-full flex flex-col gap-4">
              <div className="form-control w-full mx-auto">
                <input
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                  type="text"
                  placeholder="Digite sua tarefa"
                  className="input input-bordered w-full mx-auto "
                />
              </div>
              <button className="btn btn-primary w-full" type="submit">
                Salvar
              </button>
            </div>
          </form>
        </Modal>

        <FiTrash2
          onClick={() => {
            setOpenModalDeleted(true);
          }}
          cursor="pointer"
          className={`text-red-500`}
          size={20}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h1 className="text-center font-bold">
            Tem certeza que deseja excluir a tarefa?
          </h1>
          <div className="modal-action justify-center">
            <button
              className={`btn btn-green`}
              onClick={() => handleDeletTodo(task.id)}
            >
              Apagar
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                setOpenModalDeleted(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};
export default Task;
