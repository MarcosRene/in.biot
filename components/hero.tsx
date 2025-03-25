import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="h-full flex pt-6">
      <div className="w-full flex flex-col gap-2 mt-[35vh]">
        <h1 className="text-5xl font-bold text-white leading-16 animate-shine">
          Sues projetos e redes sociais em um único link.
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projeto e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com o Analytics de cliques
        </h2>
        <div className="flex items-center gap-2 w-full -mt-[10vh]">
          <span className="text-white text-xl">inbiot.com</span>
          <form action="">
            <input type="text" />
            <Button>Criar agora</Button>
          </form>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB80,#4B2DBB40,transparent_75%)]">
        <div className="relative">
          <div className="absolute -bottom-[7%] -right-[45%]"></div>
          <div className="absolute top-[20%] -left-[45%] -z-10"></div>
          <div className="absolute -top-[5%] -left-[55%] -z-10"></div>
        </div>
      </div>
    </section>
  )
}
