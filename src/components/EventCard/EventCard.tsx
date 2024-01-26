import { EventCardProps } from '@/types';
import dayjs from 'dayjs';
import Image from 'next/image';
import { Button } from '..';
import ptBr from 'dayjs/locale/pt-br';
import Link from 'next/link';

dayjs.locale(ptBr);

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <Link className='w-[100%] h-[100%]'
      href={event.categoria?.nome ? `/evento-definido/${event.id}` : `/evento/${event.id}`}
    >
      <div className='w-[100%] relative flex flex-col overflow-hidden group'>
        <div
          className='w-[100%] h-[100%] relative z-[1] rounded-xl overflow-hidden'
        >
          <div
            className='w-[100%] min-h-48 h-[100%] bg-background rounded-xl relative z-[2] transition-all duration-500 ease-in-out transform group-hover:scale-105'
            style={{
              backgroundImage: `url(${event.imagens.minicapa.link})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundClip: 'border-box',
            }}
            >
          </div>
          {/* <Image
            className='w-[100%] h-[100%] bg-background rounded-xl relative z-[2] transition-all duration-500 ease-in-out transform group-hover:scale-105'
            src={'/evento-background-1.svg'}
            alt="evento"
            width={1920}
            height={600}
            /> */}
        </div>
        <Image
          className='absolute right-[-5px] rotate-30 opacity-10 bottom-[16%] z-[1] max-w-[26rem] pointer-events-none'
          src={'/ImageBackground-2.svg'}
          alt="Logo"
          width={410}
          height={55}
        />
        <div className=' w-[100%] h-[100%] bg-gradient-to-t flex justify-between items-center from-background to-transparent'>
          <div className='w-[75%] h-[100%] relative z-[2] flex flex-col justify-end items-start'>
            <h1 className='text-textPrimary text-lg font-medium'>{event.nome}</h1>
            <p className='text-textPrimary text-sm font-medium'>{event.localidade}</p>
            <p className='text-primary text-xs '>{event.nomeDoLugar}</p>
          </div>
          <div
            className='flex flex-col items-center justify-center w-fit text-textPrimary font-medium'
          >
            <h3
              className='text-lg font-medium first-letter:uppercase'
            >
              {
                dayjs(event.dataRealizacao).format('MMM')
              }
            </h3>
            <h4
              className='text-3xl font-bold'
            >
              {
                dayjs(event.dataRealizacao).format('DD')
              }
            </h4>
            <p
              className='text-sm font-medium text-primary'
            >
              {
                dayjs(event.dataRealizacao).format('HH:mm')
              }
            </p>
          </div>
        </div>
        <div
          className='mt-1'
        >
          <Button
            className={'pl-1 border-primary font-semibold '}
            variant={event.prioridade === 1 ? 'primary' : 'secondary'}
          >
              <Image 
                className='w-8 h-8'
                src={ !(event.prioridade === 1) ? '/MoneyIcon.svg' : '/MoneyIcon-gray.svg'}
                alt="Carrinho de compras"
                width={40}
                height={40}
                />
              Comprar
          </Button>
        </div>
      </div>
    </Link>
  )
}
