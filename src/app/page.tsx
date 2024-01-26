'use client'
import { CarouselComponent } from '@/components/Banner/BannerCarrousel'
import { EventCard } from '@/components/EventCard/EventCard'
import { GET_EVENTS, landingPageService } from '@/services'
import { useFetch } from '@/shared/hooks/useFetch'
import { Evento } from '@/types'
import { EventMockList } from '@/utils/event-mock'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const fontMontSerrat = Montserrat({ subsets: ['latin'] })

export default function Home() {

  const [eventos, setEventos] = useState<Evento[]>([])

  const { data: isCp, error: isErrorCp } = useFetch(`${GET_EVENTS}?cp=1`, 'site');
  
  useEffect(() => {    
    if(isCp){
      const eventoId15 = {
        "status": "NAO_PUBLICADO",
        "responsavel": {
            "conta": {
                "saldo": 0
            },
            "nome": "Ruither J Queiroz",
            "telefone": "62981043475",
            "email": "ruither@solucoesageis.com.br",
            "comprouBilhete": false,
            "criouEvento": false,
            "compradorVerificado": false,
            "rg": null,
            "uzerId": null,
            "imagem": null,
            "idPais": null,
            "menor": null,
            "senha": null,
            "id": 1
        },
        "vendaParcelada": true,
        "parcelaFixa": false,
        "qtdeParcelaFixa": null,
        "franquia": {
            "nome": "Uzer - Goiânia",
            "id": 1
        },
        "naoAprovar": true,
        "exibirQtdes": false,
        "comValidacaoFacial": false,
        "vendeQuarto": false,
        "voucherPorEmail": null,
        "formulario": null,
        "taxa": 0.15,
        "taxaMinima": 2,
        "maxBilhetePorUsuario": 5,
        "taxaIncluso": false,
        "tiposDeIngresso": [
            {
                "qtdeGera": 1,
                "qtdeMinima": 1,
                "dias": [],
                "lotes": [],
                "idExterno": null,
                "tipo": "cadeira",
                "cadeirasDoIngresso": [],
                "id": 40,
                "nome": "CADEIRAS LESTE",
                "qtde": 2200,
                "valorUnitario": 100,
                "descricao": null,
                "meia": true,
                "quotaMeia": 40,
                "qtdeMeia": 880,
                "regrasMeia": null,
                "pospago": null,
                "imagem": null,
                "genero": "UNISEX",
                "dataInicioVenda": null,
                "dataLimiteVenda": null,
                "dataUtilizacao": null,
                "horarioInicioEntrada": null,
                "horarioFimEntrada": null,
                "entradaMultipla": null,
                "importado": false,
                "mensagem": null,
                "observacoes": null,
                "integrado": null,
                "exibirTotal": null,
                "limitePorUsuario": null,
                "limitePorCpf": null,
                "limitePorIngresso": null,
                "numeroLeituras": 1,
                "logo": null,
                "permiteImportar": null,
                "exigeMatricula": false,
                "exigeCheckinFechamento": false,
                "exigeCpf": false,
                "prepago": false,
                "esconderValor": false,
                "layout": null,
                "layoutZebra": null,
                "ordem": 1,
                "idNoEvento": 1,
                "taxaFixa": null,
                "exibirTaxaSomada": false,
                "precadastro": null,
                "formaRetirada": null,
                "tipoValidacao": null,
                "setor": {
                    "nome": "CADEIRAS LESTE",
                    "capacidade": 3906,
                    "cadeiras": [],
                    "subsetores": [],
                    "portao": null,
                    "id": 10
                },
                "evento": {
                    "excluido": false,
                    "vendaParcelada": true,
                    "parcelaFixa": false,
                    "qtdeParcelaFixa": null,
                    "franquia": {
                        "nome": "Uzer - Goiânia",
                        "id": 1
                    },
                    "naoAprovar": true,
                    "exibirQtdes": false,
                    "comValidacaoFacial": false,
                    "vendeQuarto": false,
                    "voucherPorEmail": false,
                    "formulario": null,
                    "taxa": 0.15,
                    "taxaMinima": 2,
                    "maxBilhetePorUsuario": 5,
                    "taxaIncluso": false,
                    "tiposDeIngresso": [],
                    "gruposDeTipo": [],
                    "taxas": [],
                    "opcoesDeParcelamento": [],
                    "bilhetesNomeados": true,
                    "exigirDocumento": true,
                    "preferencias": {
                        "confirmarCheckin": true,
                        "tocarSons": true,
                        "fecharAvisoCheckinAutomaticamente": false,
                        "tempoAvisoCheckin": 1,
                        "fecharAvisoErroCheckinAutomaticamente": false,
                        "tempoAvisoErroCheckin": 2
                    },
                    "aceitaBoleto": true,
                    "aceitaPix": true,
                    "cartaoInternacional": false,
                    "vendaMeiaBloqueada": false,
                    "numeracaoPorIngresso": false,
                    "saldoCartao": true,
                    "utilizadorResponsavel": true,
                    "utilizadorUnico": false,
                    "soCargaCarteirinha": null,
                    "pixelFacebook": null,
                    "vendasSistemaParceiro": null,
                    "id": 15,
                    "nome": "GOIAS X ATLETICO GO",
                    "dataRealizacao": "2023-12-10T08:00:00.000Z",
                    "utilizadoresPorCpf": null,
                    "imagens": []
                },
                "mesas": [],
                "planos": [],
                "credenciais": [],
                "camposAdicionais": [],
                "ingressos": [],
                "subsetores": []
            },
            {
                "qtdeGera": 1,
                "qtdeMinima": 1,
                "dias": [],
                "lotes": [
                    {
                        "nome": "1° LOTE",
                        "valor": 0,
                        "global": true,
                        "qtde": 100000,
                        "qtdeMeia": 0,
                        "ativo": true,
                        "qtdeVendido": 0,
                        "taxaFixa": null,
                        "id": 11,
                        "numero": 1,
                        "dataInicio": null,
                        "dataFim": null
                    }
                ],
                "idExterno": null,
                "tipo": "cortesia",
                "mensagem": "VENDA PROIBIDA",
                "esconderValor": false,
                "mesas": [],
                "id": 41,
                "nome": "CADEIRA LESTE (ADIDAS )",
                "qtde": 10,
                "valorUnitario": 0,
                "descricao": null,
                "meia": false,
                "quotaMeia": 0,
                "qtdeMeia": 0,
                "regrasMeia": null,
                "pospago": null,
                "imagem": null,
                "genero": "UNISEX",
                "dataInicioVenda": null,
                "dataLimiteVenda": null,
                "dataUtilizacao": null,
                "horarioInicioEntrada": null,
                "horarioFimEntrada": null,
                "entradaMultipla": null,
                "importado": false,
                "observacoes": null,
                "integrado": null,
                "exibirTotal": null,
                "limitePorUsuario": null,
                "limitePorCpf": null,
                "limitePorIngresso": null,
                "numeroLeituras": 1,
                "logo": null,
                "permiteImportar": null,
                "exigeMatricula": false,
                "exigeCheckinFechamento": false,
                "exigeCpf": false,
                "prepago": false,
                "layout": null,
                "layoutZebra": null,
                "ordem": 2,
                "idNoEvento": 2,
                "taxaFixa": null,
                "exibirTaxaSomada": false,
                "precadastro": null,
                "formaRetirada": null,
                "tipoValidacao": null,
                "setor": {
                    "nome": "CADEIRAS LESTE",
                    "capacidade": 3906,
                    "cadeiras": [],
                    "subsetores": [],
                    "portao": null,
                    "id": 10
                },
                "evento": {
                    "excluido": false,
                    "vendaParcelada": true,
                    "parcelaFixa": false,
                    "qtdeParcelaFixa": null,
                    "franquia": {
                        "nome": "Uzer - Goiânia",
                        "id": 1
                    },
                    "naoAprovar": true,
                    "exibirQtdes": false,
                    "comValidacaoFacial": false,
                    "vendeQuarto": false,
                    "voucherPorEmail": false,
                    "formulario": null,
                    "taxa": 0.15,
                    "taxaMinima": 2,
                    "maxBilhetePorUsuario": 5,
                    "taxaIncluso": false,
                    "tiposDeIngresso": [],
                    "gruposDeTipo": [],
                    "taxas": [],
                    "opcoesDeParcelamento": [],
                    "bilhetesNomeados": true,
                    "exigirDocumento": true,
                    "preferencias": {
                        "confirmarCheckin": true,
                        "tocarSons": true,
                        "fecharAvisoCheckinAutomaticamente": false,
                        "tempoAvisoCheckin": 1,
                        "fecharAvisoErroCheckinAutomaticamente": false,
                        "tempoAvisoErroCheckin": 2
                    },
                    "aceitaBoleto": true,
                    "aceitaPix": true,
                    "cartaoInternacional": false,
                    "vendaMeiaBloqueada": false,
                    "numeracaoPorIngresso": false,
                    "saldoCartao": true,
                    "utilizadorResponsavel": true,
                    "utilizadorUnico": false,
                    "soCargaCarteirinha": null,
                    "pixelFacebook": null,
                    "vendasSistemaParceiro": null,
                    "id": 15,
                    "nome": "GOIAS X ATLETICO GO",
                    "dataRealizacao": "2023-12-10T08:00:00.000Z",
                    "utilizadoresPorCpf": null,
                    "imagens": []
                },
                "planos": [],
                "credenciais": [],
                "camposAdicionais": [],
                "ingressos": [],
                "subsetores": []
            },
            {
                "qtdeGera": 1,
                "qtdeMinima": 1,
                "dias": [],
                "lotes": [],
                "idExterno": null,
                "tipo": "cortesia",
                "mensagem": "VENDA PROIBIDA",
                "esconderValor": null,
                "mesas": [],
                "id": 42,
                "nome": "CADEIRAS LESTE(CORTESIA)",
                "qtde": 10,
                "valorUnitario": 0,
                "descricao": null,
                "meia": false,
                "quotaMeia": 0,
                "qtdeMeia": 0,
                "regrasMeia": null,
                "pospago": null,
                "imagem": null,
                "genero": "UNISEX",
                "dataInicioVenda": null,
                "dataLimiteVenda": null,
                "dataUtilizacao": null,
                "horarioInicioEntrada": null,
                "horarioFimEntrada": null,
                "entradaMultipla": null,
                "importado": false,
                "observacoes": null,
                "integrado": null,
                "exibirTotal": null,
                "limitePorUsuario": null,
                "limitePorCpf": null,
                "limitePorIngresso": null,
                "numeroLeituras": 1,
                "logo": null,
                "permiteImportar": null,
                "exigeMatricula": false,
                "exigeCheckinFechamento": false,
                "exigeCpf": false,
                "prepago": false,
                "layout": null,
                "layoutZebra": null,
                "ordem": 3,
                "idNoEvento": 3,
                "taxaFixa": null,
                "exibirTaxaSomada": false,
                "precadastro": null,
                "formaRetirada": null,
                "tipoValidacao": null,
                "setor": {
                    "nome": "CADEIRAS LESTE",
                    "capacidade": 3906,
                    "cadeiras": [],
                    "subsetores": [],
                    "portao": null,
                    "id": 10
                },
                "evento": {
                    "excluido": false,
                    "vendaParcelada": true,
                    "parcelaFixa": false,
                    "qtdeParcelaFixa": null,
                    "franquia": {
                        "nome": "Uzer - Goiânia",
                        "id": 1
                    },
                    "naoAprovar": true,
                    "exibirQtdes": false,
                    "comValidacaoFacial": false,
                    "vendeQuarto": false,
                    "voucherPorEmail": false,
                    "formulario": null,
                    "taxa": 0.15,
                    "taxaMinima": 2,
                    "maxBilhetePorUsuario": 5,
                    "taxaIncluso": false,
                    "tiposDeIngresso": [],
                    "gruposDeTipo": [],
                    "taxas": [],
                    "opcoesDeParcelamento": [],
                    "bilhetesNomeados": true,
                    "exigirDocumento": true,
                    "preferencias": {
                        "confirmarCheckin": true,
                        "tocarSons": true,
                        "fecharAvisoCheckinAutomaticamente": false,
                        "tempoAvisoCheckin": 1,
                        "fecharAvisoErroCheckinAutomaticamente": false,
                        "tempoAvisoErroCheckin": 2
                    },
                    "aceitaBoleto": true,
                    "aceitaPix": true,
                    "cartaoInternacional": false,
                    "vendaMeiaBloqueada": false,
                    "numeracaoPorIngresso": false,
                    "saldoCartao": true,
                    "utilizadorResponsavel": true,
                    "utilizadorUnico": false,
                    "soCargaCarteirinha": null,
                    "pixelFacebook": null,
                    "vendasSistemaParceiro": null,
                    "id": 15,
                    "nome": "GOIAS X ATLETICO GO",
                    "dataRealizacao": "2023-12-10T08:00:00.000Z",
                    "utilizadoresPorCpf": null,
                    "imagens": []
                },
                "planos": [],
                "credenciais": [],
                "camposAdicionais": [],
                "ingressos": [],
                "subsetores": []
            },
            {
                "qtdeGera": 1,
                "qtdeMinima": 1,
                "dias": [],
                "lotes": [],
                "idExterno": null,
                "tipo": "cortesia",
                "mensagem": "VENDA PROIBIDA",
                "esconderValor": null,
                "mesas": [],
                "id": 43,
                "nome": "CORTESIA ONLINE",
                "qtde": 100,
                "valorUnitario": 0,
                "descricao": null,
                "meia": false,
                "quotaMeia": 0,
                "qtdeMeia": 0,
                "regrasMeia": null,
                "pospago": null,
                "imagem": null,
                "genero": "UNISEX",
                "dataInicioVenda": "2022-11-17T12:00:00.000Z",
                "dataLimiteVenda": "2023-01-10T12:00:00.000Z",
                "dataUtilizacao": null,
                "horarioInicioEntrada": null,
                "horarioFimEntrada": null,
                "entradaMultipla": null,
                "importado": false,
                "observacoes": null,
                "integrado": null,
                "exibirTotal": null,
                "limitePorUsuario": 100,
                "limitePorCpf": null,
                "limitePorIngresso": null,
                "numeroLeituras": 1,
                "logo": null,
                "permiteImportar": null,
                "exigeMatricula": false,
                "exigeCheckinFechamento": false,
                "exigeCpf": false,
                "prepago": false,
                "layout": null,
                "layoutZebra": null,
                "ordem": 4,
                "idNoEvento": 4,
                "taxaFixa": null,
                "exibirTaxaSomada": false,
                "precadastro": null,
                "formaRetirada": "ETICKET",
                "tipoValidacao": null,
                "setor": {
                    "nome": "CADEIRAS LESTE",
                    "capacidade": 3906,
                    "cadeiras": [],
                    "subsetores": [],
                    "portao": null,
                    "id": 10
                },
                "evento": {
                    "excluido": false,
                    "vendaParcelada": true,
                    "parcelaFixa": false,
                    "qtdeParcelaFixa": null,
                    "franquia": {
                        "nome": "Uzer - Goiânia",
                        "id": 1
                    },
                    "naoAprovar": true,
                    "exibirQtdes": false,
                    "comValidacaoFacial": false,
                    "vendeQuarto": false,
                    "voucherPorEmail": false,
                    "formulario": null,
                    "taxa": 0.15,
                    "taxaMinima": 2,
                    "maxBilhetePorUsuario": 5,
                    "taxaIncluso": false,
                    "tiposDeIngresso": [],
                    "gruposDeTipo": [],
                    "taxas": [],
                    "opcoesDeParcelamento": [],
                    "bilhetesNomeados": true,
                    "exigirDocumento": true,
                    "preferencias": {
                        "confirmarCheckin": true,
                        "tocarSons": true,
                        "fecharAvisoCheckinAutomaticamente": false,
                        "tempoAvisoCheckin": 1,
                        "fecharAvisoErroCheckinAutomaticamente": false,
                        "tempoAvisoErroCheckin": 2
                    },
                    "aceitaBoleto": true,
                    "aceitaPix": true,
                    "cartaoInternacional": false,
                    "vendaMeiaBloqueada": false,
                    "numeracaoPorIngresso": false,
                    "saldoCartao": true,
                    "utilizadorResponsavel": true,
                    "utilizadorUnico": false,
                    "soCargaCarteirinha": null,
                    "pixelFacebook": null,
                    "vendasSistemaParceiro": null,
                    "id": 15,
                    "nome": "GOIAS X ATLETICO GO",
                    "dataRealizacao": "2023-12-10T08:00:00.000Z",
                    "utilizadoresPorCpf": null,
                    "imagens": []
                },
                "planos": [],
                "credenciais": [],
                "camposAdicionais": [],
                "ingressos": [],
                "subsetores": []
            }
        ],
        "gruposDeTipo": [],
        "taxas": [
            {
                "formaPagamento": "CartaoCreditoMaquina",
                "taxa": 0.1,
                "valor": 0,
                "qtdeParcelas": null,
                "id": 43
            },
            {
                "formaPagamento": "CartaoCreditoMaquinaParcelado",
                "taxa": 0.15,
                "valor": 0,
                "qtdeParcelas": 3,
                "id": 44
            },
            {
                "formaPagamento": "CartaoDebitoMaquina",
                "taxa": 0.1,
                "valor": 0,
                "qtdeParcelas": null,
                "id": 45
            }
        ],
        "opcoesDeParcelamento": [],
        "bilhetesNomeados": true,
        "exigirDocumento": true,
        "preferencias": {
            "confirmarCheckin": true,
            "tocarSons": true,
            "fecharAvisoCheckinAutomaticamente": false,
            "tempoAvisoCheckin": 1,
            "fecharAvisoErroCheckinAutomaticamente": false,
            "tempoAvisoErroCheckin": 2
        },
        "taxaServico": 0,
        "taxaConveniencia": 0,
        "aceitaBoleto": true,
        "aceitaPix": true,
        "cartaoInternacional": false,
        "vendaMeiaBloqueada": null,
        "numeracaoPorIngresso": null,
        "saldoCartao": true,
        "utilizadorResponsavel": true,
        "utilizadorUnico": false,
        "soCargaCarteirinha": null,
        "pixelFacebook": null,
        "qtdeTransferencias": 1,
        "vendasSistemaParceiro": null,
        "tipo": "Jogo",
        "vendaOffline": true,
        "id": 15,
        "nome": "GOIAS X ATLETICO GO",
        "dataRealizacao": "2023-12-10T08:00:00.000Z",
        "dataFim": null,
        "horarioLimiteVenda": null,
        "horarioLimiteTransferencia": null,
        "descricao": "Jogo válido pela xº rodada do Campeonato xxx",
        "link": "goias-x-atletico-go",
        "site": null,
        "ratingCompra": null,
        "tipoDeCodigo": null,
        "exibirNumeroDoBilhete": true,
        "qtdDigitosNumeroDoBilhete": 5,
        "enviouCarga": null,
        "possuiLogoRodape": false,
        "buscavel": true,
        "idExterno": null,
        "linkExtra": null,
        "cancelado": null,
        "encerrado": true,
        "valorTaxaIncluso": false,
        "layoutZebra": null,
        "utilizadoresPorCpf": null,
        "trackId": null,
        "sobretaxar": null,
        "ultimaSincronizacao": null,
        "erroSincronizacao": null,
        "produtor": {
            "tipo": "juridica",
            "nome": "UZER EVENTOS LTDA",
            "email": null,
            "telefone": "08006440545",
            "links": {
                "0": {
                    "fa": "fa-facebook-square",
                    "tipo": "Facebook"
                },
                "1": {
                    "fa": "fa-instagram",
                    "tipo": "Instagram"
                },
                "2": {
                    "fa": "fa-globe",
                    "tipo": "Site",
                    "editarUrl": false,
                    "urlEdicao": "www.uzer.com.br",
                    "url": "www.uzer.com.br"
                }
            },
            "foto": "https://uzerticket-imagens.s3.sa-east-1.amazonaws.com/images/produtores/dee31600-57b7-11ee-a768-bb97beaeb916.ebp",
            "cpf": null,
            "genero": null,
            "nomeDaMae": null,
            "estadoCivil": null,
            "cnpj": "62671628000176",
            "nomeFantasia": "UZER",
            "inscricaoEstadual": "105211010",
            "inscricaoMunicipal": "1111111111",
            "dataNascimento": null,
            "id": 2
        },
        "endereco": {
            "id": 56,
            "bairro": "Setor Pedro Ludovico",
            "cep": "74823030",
            "localidade": "Goiânia/GO",
            "complemento": null,
            "localizacao": "-16.6869544,-49.263175",
            "logradouro": "Avenida Edmundo Pinheiro de Abreu",
            "nomeDoLugar": "Estádio da Serrinha",
            "numero": "sn",
            "nomeCidade": "Goiânia/GO",
            "uf": null
        },
        "casaDeShow": {
            "nome": "Serrinha",
            "capacidade": null,
            "endereco": {
                "id": 56,
                "bairro": "Setor Pedro Ludovico",
                "cep": "74823030",
                "localidade": "Goiânia/GO",
                "complemento": null,
                "localizacao": "-16.6869544,-49.263175",
                "logradouro": "Avenida Edmundo Pinheiro de Abreu",
                "nomeDoLugar": "Estádio da Serrinha",
                "numero": "sn",
                "nomeCidade": "Goiânia/GO",
                "uf": null
            },
            "alvaraFuncionamento": null,
            "alvaraBombeiros": null,
            "setores": [
                {
                    "nome": "CADEIRAS LESTE",
                    "capacidade": 3906,
                    "cadeiras": [],
                    "subsetores": [],
                    "cor": null,
                    "idExterno": null,
                    "id": 10,
                    "observacao": null
                }
            ],
            "portarias": [],
            "fileirasReversas": true,
            "id": 4,
            "tipo": "estadio",
            "mapa": "cadeira",
            "sortearCadeira": null
        },
        "mandante": {
            "id": 2,
            "nome": "GOIAS",
            "logo": "https://uzerticket-imagens.s3.sa-east-1.amazonaws.com/images/evento/clubes/be86e310-57a7-11ee-bef1-a72e76ebce28.png",
            "logoIngresso": "https://uzerticket-imagens.s3.sa-east-1.amazonaws.com/images/evento/clubes/be86e310-57a7-11ee-bef1-a72e76ebce28-ingresso.png",
            "fotoFundo": null,
            "programaSocioTorcedor": null,
            "uzerId": null
        },
        "visitante": {
            "id": 1,
            "nome": "ATLETICO GO",
            "logo": "https://uzerticket-imagens.s3.sa-east-1.amazonaws.com/fotos/clubes/48cd6a60-573c-11ee-8014-5d098eff08ff.png",
            "logoIngresso": "https://uzerticket-imagens.s3.sa-east-1.amazonaws.com/fotos/clubes/48cd6a60-573c-11ee-8014-5d098eff08ff-ingresso.png",
            "programaSocioTorcedor": null,
            "uzerId": null
        },
        "imagens": {
            "foto": {
                "tipo": "Foto",
                "link": "/images/evento/15/Screenshot_2.png",
                "top": null,
                "id": 36,
                "novoTamanho": 1
            },
            "capa": {
                "tipo": "Capa",
                "link": "/images/evento/15/Screenshot_14.890.png",
                "top": -60,
                "id": 37,
                "novoTamanho": 1
            },
            "minicapa": {
                "tipo": "MiniCapa",
                "link": "/images/evento/15/Screenshot_14.890.png",
                "top": null,
                "id": 64,
                "novoTamanho": 1
            }
        },
        "pontosDeVenda": [],
        "tags": [],
        "diasEvento": [],
        "setores": [],
        "horaInicio": "08:00",
        "dataDescricao": "10(Domingo), dezembro/2023",
        "horaFim": null,
        "restrito": false,
        "diasRestantes": -39,
        "foto": "/images/evento/15/Screenshot_2.png",
        "minicapa": "/images/evento/15/Screenshot_14.890.png",
        "capa": {
            "tipo": "Capa",
            "link": "/images/evento/15/Screenshot_14.890.png",
            "top": -60,
            "id": 37,
            "novoTamanho": 1
        },
        "fotoCapa": "/images/evento/15/Screenshot_14.890.png",
        "alturaFotoCapa": -60,
        "gerarCadeiras": true,
        "borderoFerj": false,
        "controlesDeEntrada": [],
        "reservas": [
            {
                "usuarios": [],
                "id": 2,
                "inicioReserva": null,
                "fimReserva": null,
                "inicioTroca": null,
                "fimTroca": null,
                "localTroca": null,
                "qtde": 1,
                "tipo": "online",
                "nome": "Cortesias",
                "token": "4bea1e10608311ed890c4bb65f6db55b",
                "geraVenda": null,
                "estrangeiro": null,
                "idPdv": null,
                "tipos": [
                    {
                        "dias": [],
                        "lotes": [],
                        "id": 40,
                        "nome": "CADEIRAS LESTE",
                        "mesas": [],
                        "planos": [],
                        "credenciais": [],
                        "camposAdicionais": [],
                        "ingressos": [],
                        "subsetores": []
                    },
                    {
                        "dias": [],
                        "lotes": [],
                        "id": 42,
                        "nome": "CADEIRAS LESTE(CORTESIA)",
                        "mesas": [],
                        "planos": [],
                        "credenciais": [],
                        "camposAdicionais": [],
                        "ingressos": [],
                        "subsetores": []
                    }
                ]
            }
        ]
    }
      setEventos([...isCp.eventos, eventoId15])
    }
  }, [isCp])

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div
        className='w-full h-fit overflow-x-hidden'
      >
        <CarouselComponent/>
      </div>

      <div className='w-full flex items-center justify-center px-16 pt-10 overflow-x-hidden'>
          <div className='flex items-center justify-center h-72 max-w-[100%] px-10 py-6 overflow-x-auto categories-container md:w-full' 
          >
            <div className="w-[1000px] md:w-full flex-shrink-0">
              <Image
                className='md:w-full md:h-48'
                src='/Categories.svg'
                alt='Imagem'
                width={1000}
                height={300}
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            {/* Conteúdo dentro da imagem */}
          </div>
      </div>  



      <div
        className='w-full flex items-center justify-between px-4 md:px-8 pb-8 border-b-2 border-gray'
      >
        <h2
          className='md:text-2xl flex gap-2 items-center font-bold text-textPrimary'
          >
          <Image 
            src={'/Calendar.svg'}
            alt="Calendario"
            width={30}
            height={30}
            />
          Todos os eventos
        </h2>
        <p
          className={fontMontSerrat.className + 'md:text-2xl text-sm flex gap-2 items-center font-bold text-textPrimary'}
        >
          Comprou, <br/>
          sorriu, curtiu.
        </p>
      </div>
      <div
        className='w-full center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-4 md:px-32 mb-16'
      >
          
          {
            eventos && eventos.length > 0 && eventos.map((event, index) => {
              return (
                <EventCard
                  event={event}
                  key={index}
                  />
              )
            })
          }
      </div>
    </main>
  )
}
