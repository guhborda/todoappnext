"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { addNewTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const Addtask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const randomid = Math.random();
    await addNewTodo({ id: uuidv4(), text: newTaskValue,checked:false });
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div className="w-full">
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full flex justify-between"
      >
        <div className="d-sl-none"></div>
        <div className="flex text-center justify-center">adicionar tarefa</div>
        <AiOutlinePlus className="mr-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmitNewTodo} className="w-full mx-auto">
          <h3 className="font-bold text-lg mb-2">Adicionar Tarefa</h3>
          <div className="w-full flex flex-col gap-4">
            <div className="form-control w-full mx-auto">
              <input
                value={newTaskValue}
                onChange={(e) => setNewTaskValue(e.target.value)}
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
    </div>
  );
};
export default Addtask;
