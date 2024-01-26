'use client';

import Image from 'next/image';

export const Footer = () => <footer className="bg-grayLight relative overflow-hidden">
  <Image
    className='opacity-80 hidden lg:flex absolute w-[100%] left-[-50%] top-0'
    src='/FooterBackground-1.svg'
    alt="background"
    width={2000}
    height={2000}
  />
  <Image
    className='opacity-80 hidden absolute lg:flex w-[100%] left-[20%] bottom-[-10%] rotate-[-7deg] object-contain'
    src='/FooterBackground-2.svg'
    alt="background"
    width={2000}
    height={2000}
    />
  <div
    className=' items-center justify-center w-fullpy-2 md:hidden flex'
  >
    <Image
      src={'/Logo.svg'}
      alt="Logo"
      width={200}
      height={200}
    />
  </div>
<div className="container grid grid-cols-1 mx-auto p-6 gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
  <div className="flex flex-col space-y-4">
    <h2 className="font-medium text-primary">Go - Goiânia</h2>
    <div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
      <p
        className='text-textPrimary font-medium'
      >
        (00) 0000-0000 <br/> 
        contato@bipshow.com.br
      </p>
      <p
        className='text-textTertiary text-sm tracking-tighter'
      >
      Av Jamel Cecílio, 2690 Ed. Metropolitan Tokyo. <br/>
      Salas 606 e 607, Jd Goiás 74810-000
      </p>
    </div>
  </div>
  <div className="flex flex-col space-y-4">
    <h2 className="font-medium text-primary">Acesso rápido</h2>
    <div className="flex flex-col space-y-2 text-sm text-textPrimary font-normal pl-6">
      <a rel="noopener noreferrer" className='list-item' href="#">Início</a>
      <a rel="noopener noreferrer" className='list-item' href="#">Meus Ingressos</a>
      <a rel="noopener noreferrer" className='list-item' href="#">Para produtores</a>
      <a rel="noopener noreferrer" className='list-item' href="#">Central de dúvidas</a>
      <a rel="noopener noreferrer" className='list-item' href="#">Institucional</a>
      <a rel="noopener noreferrer" className='list-item' href="#">Lei de meia-entrada</a>
    </div>
  </div>
  <div className="flex flex-col space-y-4">
    <h2 className="font-medium text-primary">Redes sociais</h2>
    <div className="flex flex-col space-y-2 text-sm text-textPrimary font-normal">
      <a rel="noopener noreferrer" href="https://instagram/usuario" target='_blank' className='flex gap-1 items-center'>
        <Image
          src={'/Instagram.svg'}
          alt="Logo"
          width={20}
          height={20}
        />
        Instagram
      </a>
      <a rel="noopener noreferrer" href="https://facebook/usuario" target='_blank' className='flex gap-1 items-center'>
        <Image
          src={'/Facebook.svg'}
          alt="Logo"
          width={20}
          height={20}
        />
        Facebook
      </a>
      <a rel="noopener noreferrer" href="https://linkedin/usuario" target='_blank' className='flex gap-1 items-center'>
        <Image
          src={'/Linkedin.svg'}
          alt="Logo"
          width={20}
          height={20}
        />
        <span
          className='mt-[3px]'
        >
          Linkedin
        </span>
      </a>
      <a rel="noopener noreferrer" href="https://twitter/usuario" target='_blank' className='flex gap-1 items-center'>
        <Image
          src={'/Twitter.svg'}
          alt="Logo"
          width={20}
          height={20}
        />
        Twitter
      </a>
      <a rel="noopener noreferrer" href="https://youtube/usuario" target='_blank' className='flex gap-1 items-center'>
        <Image
          src={'/YouTube.svg'}
          alt="Logo"
          width={20}
          height={20}
        />
        YouTube
      </a>
    </div>
  </div>
  <div className="flex flex-col space-y-4">
    <h2 className="font-medium text-primary">Baixe o aplicativo</h2>
    <div className="flex flex-col space-y-4 text-sm dark:text-gray-400">
      <a
        href="https://play.google.com/store/apps/details?id=com.bipshow"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Image
          src={'/GooglePlay.svg'}
          alt="Logo"
          width={150}
          height={55}
        /> */}
      </a>
      <a
        href="https://apps.apple.com/br/app/bipshow/id1540471895"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <Image
          src={'/AppStore.svg'}
          alt="Logo"
          width={150}
          height={55}
        /> */}
      </a>
    </div>
  </div>
</div>
<div className="flex items-center w-full relative z-[2] bg-green justify-center px-6 py-6 text-sm">
  <span className="text-background">Uzer Tecnologia ME - 24.027.271/0001-07 ® UzerTICKET É UMA marca registrada com os direitos reservados.</span>
</div>
</footer>