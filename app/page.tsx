import Image from "next/image";
import Addtask from "./components/Addtask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api";


export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);
  return (
    <main className="flex min-h-screen flex-col items-center w-full  md:w-10/12 sm:max-w-full mx-auto px-8 md:p-24">
      <div className="text-center w-full my-5 flex flex-col justify-center gap-4">
        <h1>Tarefas</h1>
        <Addtask />
        
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
