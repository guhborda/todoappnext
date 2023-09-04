export default async function Login() {
  const handleLogin = async () => {};
  return (
    <main className="flex min-h-screen flex-col items-center w-full  md:w-10/12 sm:max-w-full mx-auto px-8 md:p-24">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h1 className="card-title">Entrar</h1>
          <h3 className="card-subtitle">Entre para ver suas tarefas!</h3>

          <input
            type="text"
            placeholder="Digite seu e-mail"
            className="input w-full max-w-xs"
          />
          <div className="form-control w-full flex gap-5">
            <input
              type="password"
              placeholder="Digite sua senha"
              className="input w-full max-w-xs input-bordered -mb-3"
            />
            <label className="label mt-0 p-0 justify-end hover:text-white">
              
            <a className="hover:text-white label-text-alt text-white"><span className="">Esqueceu a senha?</span></a>
            </label>
          </div>
          <div className="card-actions justify-end ">
            <button className="btn btn-primary">Entrar</button>
            <button className="btn btn-ghost">Registre-se</button>
          </div>
        </div>
      </div>
    </main>
  );
}
