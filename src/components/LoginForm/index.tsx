export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-3.5">
      <input className="border rounded-[1px] border-border w-full text-text p-3" type="email" placeholder="E-mail" />
      <button className="bg-heading w-full p-3.5 rounded-[1px] cursor-pointer text-white hover:bg-black-hover transition">Continuar</button>
    </form>
  )
}