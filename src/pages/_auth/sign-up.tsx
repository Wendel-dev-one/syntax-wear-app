import { createFileRoute, Link } from "@tanstack/react-router";
import { RegisterForm } from "../../components/RegisterForm";
import { Logo } from "../../components/Logo";
import { Separator } from "../../components/Separator";
import GoogleIcon from "@/assets/images/google-icon.png";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Cadastre-se - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-surface p-5">
      <div className="w-112.5 bg-background rounded-2xl p-5 flex flex-col">
        <Logo />
        <RegisterForm />
        <Separator />

        <button className="w-full flex items-center justify-center gap-2 border border-border rounded-md py-3 hover:bg-surface-alt transition cursor-pointer">
          <img src={GoogleIcon} className="w-5 h-5" alt="Logar com o Google" />
          <span className="text-sm font-medium text-text">
            Continuar com Google
          </span>
        </button>

        <p className="text-sm text-text-secondary mt-6 text-center">
          Já tem uma conta?{" "}
          <Link to="/sign-in" className="text-accent hover:underline">
            Entrar
          </Link>
        </p>
      </div>
    </section>
  );
}
