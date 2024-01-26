'use client'
import Image from 'next/image'
import { Logo } from '../Logo/Logo'
import { Avatar, Button } from '..'
import { Input } from '../Input/Input'
import { useEffect, useState } from 'react'
import { ArrowDropDown, Close, Search } from '@mui/icons-material'
import { Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'
import { useGeoLocation } from '@/hooks'
import { Autocomplete, Menu, Modal } from '@mui/material'
import { estadosArray, getCidadesByUF } from '@/utils'
import { Cache } from '@/adapters'
import { LoginAndRegister } from '../LoginAndRegister'
import { useRegister } from '@/shared/hooks/useRegister'
import { LegacyAvatar } from '../Avatar/legacy/Avatar/Avatar'

const fontMontSerrat = Montserrat({ subsets: ['latin'] })

export function Navbar() {

  const [value, setValue] = useState('')
  const router = useRouter()

  const location = useGeoLocation()

  const [anchorEl, setAnchorEl] = useState<any>(null)

  const [locationValue, setLocationValue] = useState({city: location?.city, uf: location?.uf})

  const {user, handleLoadUser} = useRegister()
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authType, setAuthType] = useState<'login' | 'register'>('login')

  useEffect(() => {
    if((locationValue.city && locationValue.uf) && (locationValue.city !== '' && locationValue.uf !== '') ){
      Cache.set({key: 'location', value: locationValue})
      // TODO Filter events by location
    }
  }, [locationValue])
  
  return (
    <>
      <nav
        className='flex items-center justify-between w-full md:px-10 px-4 py-6 flex-col md:flex-row gap-8 border-b-2 border-gray'
      >
        <div
          className='flex items-center justify-between w-full md:w-2/5'
        >
            <Image
              className='absolute left-0 top-0 z-[-1] opacity-10 rotate-[-2deg] md:max-w-[26rem] sm:max-w-full overflow-hidden'
              src={'/LogoBackground.svg'}
              alt="Logo"
              width={410}
              height={55}
              priority={true}
              />
            <div
              className='flex items-center gap-4 relative'
            >
              <Logo
                onClick={() => router.push('/')}
              />
              <div>
                <p
                  className={fontMontSerrat.className + 'text-sm text-textPrimary font-bold'}
                >Comprou,</p>
                <p
                  className={fontMontSerrat.className + 'text-sm text-textPrimary font-bold'}>
                    sorriu, curtiu.
                  </p>
              </div>
            </div>
            <div
              className='md:hidden flex items-center gap-4 relative'
            > 
            {user?.imagem ? 
              <LegacyAvatar
                image={user?.imagem}
                username={user?.nome}
                variant='small-two'
              />
                : <Avatar/>
            }
            </div>
        </div>
        <div
          className='flex items-center justify-between w-full md:w-3/5 flex-col md:flex-row gap-4 '>
            <div
              className='flex items-center gap-2 relative'
            >
              <Image
                src={'/Localization.svg'}
                alt="Logo"
                width={30}
                height={30}
              />
              <div>
                <p
                  className='text-sm text-primary font-medium'
                >Eventos próximos à</p>
                <p
                  className='text-textPrimary font-medium w-48'>
                    <span className='text-textPrimary font-medium max-w-40 min-w-40 text-ellipsis'>
                      {(locationValue.city !== null && location.city !== undefined) ? locationValue.city : 'Sua localização'}, {locationValue.uf ? locationValue.uf : 'UF'}
                    </span>
                    <ArrowDropDown
                      className='text-primary mb-1 cursor-pointer'
                      onClick={e => setAnchorEl(e.currentTarget)}
                    />
                    <Menu
                      open={Boolean(anchorEl)}
                      anchorEl={anchorEl}
                      onClose={() => setAnchorEl(null)}
                      sx={{
                        marginLeft: '-8rem',
                        '.MuiMenu-paper': {
                          width: '24rem',
                          height: '50rem',
                          borderRadius: '1rem',
                          backgroundColor: '#FFFFFF00',
                          borderColor: '#FFFFFF00',
                          boxShadow: 'none',
                        },
                        '@media (max-width: 768px)': {
                          marginLeft: '0rem',
                        }
                      }}
                      onClick={() => setAnchorEl(null)}
                    >
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className='flex items-center min-w-96 max-w-96 h-28 bg-background rounded-lg justify-between'
                      >

                        <div
                          className='flex  items-center absolute z-[9999] justify-between p-2 md:p-4'>
                          <div
                            className='flex flex-col justify-between gap-2 md:p-4'
                          >
                            <p
                              className='text-primary font-medium'
                            >UF</p>
                            <Autocomplete
                              disablePortal
                              // disable clearable
                              clearIcon={null}
                              value={estadosArray.find(estado => estado.sigla === locationValue.uf)}
                              options={estadosArray}
                              getOptionLabel={(option) => option.sigla}
                              onChange={(e:any, newValue: any) => {
                                setLocationValue({city: '', uf: newValue.sigla}) 
                              }}
                              sx={{ width: '4rem', position: 'relative', zIndex: 9999, // Adicione zIndex aqui
                              '& .MuiAutocomplete-popper': { zIndex: 9999 } // Adicione zIndex para o popper
                              }}
                              renderInput={(params) => <Input {...params} sx={{width: '4rem'}} variant='outlined' />}
                            />
                          </div>
                          <div
                            className='flex flex-col gap-2 p-4'
                          >
                            <p
                              className='text-primary font-medium'
                            >Selecione sua cidade</p>
                            <Autocomplete
                              disablePortal
                              value={locationValue.city}
                              disabled={!locationValue.uf || locationValue.uf === ''}
                              options={getCidadesByUF(locationValue.uf)}
                              onChange={(e:any, newValue: any) => setLocationValue({city: newValue, uf: locationValue.uf}) as any}
                              sx={{ width: '4rem', position: 'relative', zIndex: 9999, // Adicione zIndex aqui
                              '& .MuiAutocomplete-popper': { zIndex: 9999 } // Adicione zIndex para o popper
                              }}
                              renderInput={(params) => <Input {...params} sx={{width: '12rem'}} variant='outlined' />}
                            />
                          </div>
                        </div>
                      </div>

                    </Menu>
                </p>
              </div>
            </div>
            <div
              className='w-full md:w-3/5'
            >
              <Input
                variant='outlined'
                placeholder='Pesquisar eventos'
                className='w-full text-primary'
                resetButton
                value={value}
                lefticon={<Search/>}
                onChange={e => setValue(e.target.value)}
                />
            </div>
            <div
              className='hidden items-center w-fit gap-4 md:flex'
            >
              {
                !user ? <>
                  <Button
                  className='px-8 py-2 !border-gray text-textPrimary'
                  variant='secondary'
                  onClick={() => {
                    setIsAuthModalOpen(true)
                    setAuthType('login')
                  }}
                  >Entrar</Button>
                  <Button
                    onClick={() => {
                      setIsAuthModalOpen(true)
                      setAuthType('register')
                    }}
                  >Criar conta</Button>
                </>
                : <>
                  <Button
                    onClick={() => {
                      router.push('/meus-ingressos')
                    }}
                  >Meus Ingressos</Button>
                  <div
                    className='w-12 h-fit cursor-pointer'
                    onClick={() => {
                      router.push('/profile')
                    }}
                  >
                    {user?.imagem ? 
                    <LegacyAvatar
                      image={user?.imagem}
                      username={user?.nome}
                      variant='small-two'
                    />
                      : <Avatar/>
                  }
                  </div>
                </>
                }
            </div>
          </div>
      </nav>
      <Modal
        open={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      >
        <div
          className='flex items-center justify-center w-full h-full'
        >
          <div
            className='bg-white md:bg-[#00000000] w-full h-full overflow-y-auto md:overflow-hidden md:h-fit md:w-fit p-4 md:rounded-lg relative'
          >
            <LoginAndRegister
              type={authType}
              onClose={() => setIsAuthModalOpen(false)}
              handleChangeType={(type) => setAuthType(type)}
              onClickPurchase={() => {
                setIsAuthModalOpen(false)
                handleLoadUser()
                // router.push('/checkout')
              }}
            />
            <Close
              className='absolute top-4 right-4 md:top-[15%] md:right-[8%] cursor-pointer z-10 text-gray'
              onClick={() => setIsAuthModalOpen(false)} 
            />
          </div>
        </div>
      
      </Modal>
    </>

  )
}