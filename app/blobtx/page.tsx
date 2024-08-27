'use client'

import { LoadingFull } from '@/components/ALoading'
import { AToastFull } from '@/components/AToast'
import { Header } from '@/components/Header'
import { ContentBox, DivBox, StyledButton } from '@/components/StyleButton'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/dropdown-menu'
import { withClient } from '@/components/withClient'
import { docsURL } from '@/constants'
import { EncodeBlobs, createMetaDataForBlobs, formatEthereumAddress, scrollToTop, shortStr, sleep } from '@/utils'
import { ethda } from '@/utils/wagmi'
import { Common } from '@ethereumjs/common'
import { BlobEIP4844Transaction } from '@ethereumjs/tx'
import { CrossCircledIcon } from '@radix-ui/react-icons'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { ChangeEvent, Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Address, WalletClient, bytesToHex, createWalletClient, http, parseEther, parseTransaction, stringToHex } from 'viem'
import { english, generateMnemonic, mnemonicToAccount } from 'viem/accounts'
import { useAccount, useDisconnect, usePublicClient, useSendTransaction } from 'wagmi'
import { openTo } from '../../utils/common'
import { DomainRef } from '@/hooks/useConfigDomain'

function ConnnectBtn(p: { onClick?: () => void }) {
  const modal = useConnectModal()
  return (
    <div className='mt-[60px] mo:mt-[130px] flex justify-center'>
      <StyledButton
        onClick={() => {
          p.onClick?.()
          modal.openConnectModal?.()
        }}
      >
        <div className=' text-lg  font-medium'>Connect wallet to start</div>
        <div className=' rounded-lg bg-white w-[38px] h-[38px] flex items-center justify-center'>
          <img src='/share2.svg' />
        </div>
      </StyledButton>
    </div>
  )
}

const BlobTX = () => {
  const ethdaNet = useMemo(ethda,[DomainRef.value])
  const [loading, setLoading] = useState<any>({ loading: false, success: false, error: false, errorMsg: 'Failed', uploadImageError: '' })
  const inputImgRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | undefined | null>(null)
  const [selectedBlob, setSelectedBlob] = useState<boolean>(true)
  const [inputText, setInputText] = useState<string>('')
  const [previewUrl, setPreviewUrl] = useState<any>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(true)
  const { disconnect } = useDisconnect()
  const [shownettip, setShowNetTip] = useState(false)
  const { sendTransactionAsync } = useSendTransaction()
  const publicClient = usePublicClient({ chainId: ethdaNet.id })
  const [transData, setTransData] = useState<{ text: Uint8Array; img: Uint8Array; imgType: string }>()
  const refState = useRef({ isClickShowModal: false })
  const account = useAccount()
  const [tempWc, setTempWc] = useState<WalletClient>()
  useEffect(() => {
    setTempWc(cachedWallet())
  }, [])
  const tempAccountAddrss = tempWc?.account?.address
  const validImageTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/svg+xml']
  const isConnected = account.address && account.isConnected
  // console.info('isConnected', isConnected, account.address, account.isConnected, account.chain?.id, ethda.id)
  const clearAllState = () => {
    setLoading({ loading: false, success: false, error: false, errorMsg: '', uploadImageError: '' })
    setShowNetTip(false)
    setIsModalOpen(false)
    setFile(null)
    if (inputImgRef.current) {
      inputImgRef.current.value = ''
    }
    setPreviewUrl('')
    setSelectedBlob(true)
    setIsModalOpen(false)
    setInputText('')
    setTransData(null as any)
  }

  const currentOpenState = () => {
    document.body.classList.add('overflow-hidden')
    document.documentElement.classList.add('overflow-hidden')
  }

  const currentCloseState = () => {
    document.body.classList.remove('overflow-hidden')
    document.documentElement.classList.remove('overflow-hidden')
  }

  const handleBlobClick = (blob: boolean) => {
    setSelectedBlob(blob)
  }

  const cachedWallet = (): WalletClient => {
    let memoprivitekey = window.localStorage.getItem('blobtx-wallet')
    if (!memoprivitekey) {
      memoprivitekey = generateMnemonic(english)
      window.localStorage.setItem('blobtx-wallet', memoprivitekey)
    }
    return createWalletClient({
      account: mnemonicToAccount(memoprivitekey),
      chain: ethdaNet,
      transport: http(),
    })
  }

  useEffect(() => {
    if (!isConnected) {
      clearAllState()
      disconnect()
    }
    return () => {}
  }, [isConnected])

  const allowDrop = (event: { preventDefault: () => void }) => {
    event.preventDefault()
  }
  const fileRef = useRef<ArrayBuffer>()
  const onFile = (f?: File | null) => {
    if (!f) {
      setPreviewUrl('')
      setFile(null)
      return
    }
    if (!validImageTypes.includes(f.type)) {
      setPreviewUrl('')
      setFile(null)
      return setLoading({ uploadImageError: 'Only PNG, JPG, JPEG, GIF formats are supported. Please select again.' })
    }
    if (f.size > 128 * 1024) {
      setPreviewUrl('')
      setFile(null)
      return setLoading({ uploadImageError: 'File size exceeding 128KB! Please select again.' })
    }
    const reader = new FileReader()
    reader.onerror = () => {
      setLoading({ uploadImageError: 'Read file error! Please select again.' })
    }
    reader.onloadend = () => {
      if (reader.result) {
        setFile(f)
        fileRef.current = reader.result as ArrayBuffer
        setPreviewUrl(URL.createObjectURL(new Blob([reader.result], { type: f.type })))
      }
    }
    reader.readAsArrayBuffer(f)
  }
  const handleDrop = useCallback((event: { preventDefault: () => void; dataTransfer: { files: { item: (arg0: number) => any } } }) => {
    event.preventDefault()
    onFile(event.dataTransfer.files?.item(0))
  }, [])

  const onFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onFile(e.target.files?.item(0))
  }, [])

  useEffect(() => {
    if (loading.loading || loading.success || loading.error || shownettip || loading.uploadImageError) {
      currentOpenState()
    } else {
      currentCloseState()
    }
    return () => {
      currentCloseState()
    }
  }, [loading])
  const handleFileSelect = () => {
    if (inputImgRef.current) {
      inputImgRef.current.value = ''
      inputImgRef.current.click()
    }
  }

  const onTranscode = async () => {
    if (!fileRef.current || !file) return
    setTransData({
      text: Buffer.from(inputText, 'utf-8').valueOf(),
      img: Buffer.from(fileRef.current).valueOf(),
      imgType: file.type,
    })
  }
  const ub8a2numa = (u8: Uint8Array) => {
    const uint8Array = u8

    const numberArray = []
    for (let i = 0; i < uint8Array.length; i++) {
      numberArray.push(uint8Array[i])
    }
    return numberArray
  }
  const getConvertOfZkg = async (data: Uint8Array[]) => {
    const commitments: Uint8Array[] = []
    const proofs: Uint8Array[] = []
    const versionHashs: Uint8Array[] = []
    const encodeBlobs: Uint8Array[] = []
    const url = `${ethdaNet.blockExplorers.blobs.url}/backend/convert/blob`

    for (let index = 0; index < data.length; index++) {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: ub8a2numa(data[index]),
        }),
      }).then((res) => res.json())
      commitments.push((result.commitments as any[]).map((item) => new Uint8Array(item.data))[0])
      proofs.push((result.proofs as any[]).map((item) => new Uint8Array(item.data))[0])
      versionHashs.push((result.versionedHashes as any[]).map((item) => new Uint8Array(Object.values(item)))[0])
      const encoded = EncodeBlobs(data[index])
      if (encoded.length > 1) {
        throw 'blob too large!'
      }
      encodeBlobs.push(encoded[0])
    }

    return { commitments, proofs, versionHashs, encodeBlobs }
  }

  const loopGetResult = async ({ result }: any) => {
    while (true) {
      await sleep(5000)
      const data = await fetch(ethdaNet.rpcUrls.default.http[0], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: 'eth_getTransactionReceipt',
          params: [result],
          id: 1,
          jsonrpc: '2.0',
        }),
      })
        .then((r) => r.json())
        .catch((e) => console.error(e))
      if (data?.result && 'status' in data.result) {
        if (data.result.status === '0x1') {
          setLoading({ loading: false, success: true, error: false })
          return data
        } else {
          setLoading({ loading: false, success: false, error: true })
          return
        }
      }
    }
  }

  const onSendTx = async () => {
    if (!transData || !publicClient || !account || !account.address) return
    try {
      setLoading({ loading: true })
      const walletClient = tempWc ?? cachedWallet()
      const sender: Address = walletClient.account?.address as any
      const balance = await publicClient.getBalance({ address: sender })
      const needGas = parseEther('0.001')
      console.info('needGas:', needGas)
      if (balance < needGas) {
        let needTransValue = needGas
        // parseEther('0.001') > needTransValue && (needTransValue = parseEther('0.001'))
        const hash = await sendTransactionAsync({ chainId: ethdaNet.id, account: account.address, to: sender, value: needTransValue })
        await publicClient.waitForTransactionReceipt({ hash, confirmations: 3 })
        // return setLoading({ loading: false, error: true, errorMsg: 'Insufficient funds for gas' })
      }
      const blobs = [transData.text, transData.img]
      const { commitments, proofs, versionHashs, encodeBlobs } = await getConvertOfZkg(blobs)
      const blobBaseFee = await publicClient.getBlobBaseFee()
      console.info('blobBaseFee', blobBaseFee)
      const blobsMeta = createMetaDataForBlobs(sender, [
        {
          content_type: 'text/plain',
          versioned_hash: bytesToHex(versionHashs[0]),
          kzg_commitment: bytesToHex(commitments[0]),
          kzg_proof: bytesToHex(proofs[0]),
        },
        {
          content_type: transData.imgType,
          versioned_hash: bytesToHex(versionHashs[1]),
          kzg_commitment: bytesToHex(commitments[1]),
          kzg_proof: bytesToHex(proofs[1]),
        },
      ])
      const blobsMetadataHex = stringToHex(JSON.stringify(blobsMeta))
      const nonce = await publicClient.getTransactionCount({ address: sender })
      const gasLimit = 21000n + BigInt(blobsMetadataHex.length) * 10n
      const gasPrice = 1_000_000_000n
      const to: Address = ethdaNet.contracts.blobTo.address
      const value = (131072n * blobBaseFee * BigInt(blobs.length) * 15n) / 10n
      const request = await walletClient.prepareTransactionRequest({
        account: sender,
        nonce,
        gas: gasLimit,
        gasPrice: gasPrice,
        to,
        value,
        data: blobsMetadataHex,
        type: 'legacy',
        chain: ethdaNet,
      })
      console.info('tx:', request.gas, request.gasPrice, request.maxPriorityFeePerGas)
      // @ts-ignore
      const res = await walletClient.account.signTransaction(request)
      // const res = await walletClient.signTransaction(request as any)
      const hexSig = (res.startsWith('0x') ? res : `0x${res}`) as `0x${string}`
      const transaction = parseTransaction(hexSig)
      if (!transaction) return
      const common = Common.custom(
        {
          name: 'ethda',
          networkId: ethdaNet.id,
          chainId: ethdaNet.id,
        },
        {
          eips: [1559, 3860, 4844],
        },
      )
      const blobTx = new BlobEIP4844Transaction(
        {
          chainId: BigInt(ethdaNet.id),
          nonce,
          to,
          data: blobsMetadataHex,
          value,
          maxPriorityFeePerGas: 1_000_000_000n,
          maxFeePerGas: 1_000_000_000n,
          gasLimit: transaction.gas,
          maxFeePerBlobGas: blobBaseFee,
          blobVersionedHashes: versionHashs,
          blobs: encodeBlobs,
          kzgCommitments: commitments,
          kzgProofs: proofs,
          v: (transaction.v || 0n) - 2n * BigInt(ethdaNet.id) - 35n,
          r: transaction.r,
          s: transaction.s,
        },
        { common },
      )
      const rawData = blobTx.serializeNetworkWrapper()
      const hex = Buffer.from(rawData).toString('hex')
      const sendRes = await fetch(ethdaNet.rpcUrls.default.http[0], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          method: 'eth_sendRawTransaction',
          params: ['0x' + hex],
          id: 2,
          jsonrpc: '2.0',
        }),
      }).then((r) => r.json())
      if (sendRes.error) {
        const errorMsg = sendRes.error?.message?.includes('insufficient funds') ? 'Insufficient funds for gas' : ''
        console.info('error:', sendRes)
        setLoading({ loading: false, success: false, error: true, errorMsg })
      } else {
        await loopGetResult(sendRes)
      }
    } catch (error) {
      console.info(error)
      setLoading({ loading: false, success: false, error: true })
    }
  }

  const onSwitchTo = () => {
    openTo('https://www.eip4844.com')
  }
  const onGas = () => {
    openTo(ethdaNet.custom.bridgeUrl)
  }
  const onClickAddNet = () => {
    openTo(`${docsURL()}/resources/network-configuration/add-ethda-network/`)
  }

  useEffect(() => {
    if (isConnected && refState.current.isClickShowModal) {
      setShowNetTip(true)
      currentOpenState()
    }
  }, [isConnected])

  return (
    <div className=' font-montserrat'>
      <Header
        className={`${!isConnected ? 'bg-[#FBE8DE]  mo:bg-[#FCE1D6] mo:border-b-[#FCE1D6]' : 'bg-[#FFFFFFCC]'}  py-[29px]`}
        containerClassName='!w-full pl-9 pr-[31px] mo:w-full mo:pl-0 mo:pr-0 '
        logo={`b-EthDA.svg`}
        isShow={setIsShow}
        headerTextClassName='!text-[#000000] gap-[50px]'
      />
      <div className={` ${!isConnected && ' bg-[url(/blobTXBg.svg)] mo:bg-[url(/b-m-EthDA.svg)] '}   min-h-screen  bg-cover object-cover `}>
        {isConnected ? (
          <div className='bg-[url(/black_bg.svg)] mo:bg-none bg-cover h-auto overflow-hidden '>
            <div className='bg-[#F6F6F6]'>
              <div className='mo:w-full mo:px-[30px]  mx-auto w-container md:w-full md:px-[30px]   '>
                <div className='  flex h-[120px]  flex-row items-center mo:justify-between mo:h-[102px]'>
                  <div className='mo:hidden w-full  justify-center flex flex-col gap-2 text-2xl md:text-lg font-normal'>
                    <div className=' flex items-center font-medium'>
                      <button onClick={onSwitchTo} className='flex flex-row items-center'>
                        Experience EIP-4844 <img src='/share3.svg' className=' mx-2' />
                      </button>
                      blob-carrying transactions (Blob TX)
                    </div>
                    <div className='flex gap-5'>
                      <button onClick={onClickAddNet} className='mo:w-full text-base underline mo:text-2xl '>
                        Add EthDA Testnet to wallet
                      </button>
                      <button onClick={onGas} className='mo:mt-[70px] mo:text-2xl   text-base underline'>
                        Bridge
                      </button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 mo:w-full'>
                    <div className='flex flex-row justify-between'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <div className='cursor-pointer rounded-lg border-[#FC7823] md:text-sm  border h-[42px] items-center flex text-[#FC7823] px-[15px]'>
                            {formatEthereumAddress(account.address)}
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align='start' className='w-[161px] bg-white'>
                          <DropdownMenuItem
                            textValue='Disconnect'
                            onClick={() => {
                              setLoading({ success: false })
                              setInputText('')
                              setFile(null)
                              setTransData(null as any)
                              disconnect()
                            }}
                            className='text-base  hover:text-orange-400  cursor-pointer'
                          >
                            Disconnect
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <div
                        onClick={() => window.open(`${ethdaNet.blockExplorers.blobs.url}/address/${tempAccountAddrss}`, '_blank')}
                        className=' cursor-pointer flex mr-10 mo:mr-0 gap-[13px] items-center'
                      >
                        <img className='ml-5 mo:h-[32px]' src='deal.svg' />
                        <span className='text-[#FC7823] font-normal text-base'>History</span>
                      </div>
                    </div>
                    {tempWc && (
                      <div className='text-[#FC7823]'>
                        <span className='text-black mr-2'>BlobTx Account:</span>{' '}
                        <a target='_blank' href={`${ethdaNet.blockExplorers.default.url}/address/${tempAccountAddrss}`}>
                          {formatEthereumAddress(tempWc.account?.address)}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className='mo:w-full mo:px-[30px]  mx-auto w-container md:w-full md:px-[30px] '>
              <div className='flex mo:gap-5 gap-[100px] md:gap-[50px]  mt-[30px] mo:mt-10 mo:flex mo:flex-wrap mo:w-full'>
                <div className='w-[440px] md:w-[400px] h-full mo:flex mo:flex-wrap mo:w-full mo:flex-col  '>
                  <div className='sm:hidden w-full h-[120px] mo:h-auto font-medium  items-center flex text-2xl mo:text-2xl md:text-lg mo:flex-wrap mo:flex-row'>
                    <button onClick={onSwitchTo}> Experience EIP-4844 </button>
                    <img src='/share3.svg' className=' mx-2' /> blob-carrying transactions (Blob TX)
                  </div>
                  <div className='sm:hidden flex gap-2 mt-4 flex-col items-start'>
                    <button onClick={onClickAddNet} className='text-base underline '>
                      Add EthDA Testnet to wallet
                    </button>
                    <button onClick={onGas} className='text-base underline'>
                      Bridge
                    </button>
                  </div>
                  <div className=' text-2xl font-medium mo:mt-10'>Input</div>
                  <div className=' mt-[36px] md:mt-[40px] mo:mt-5 font-medium mo:text-base md:text-sm mb-5'>Type text here</div>

                  <DivBox className=' w-full h-[68px] px-2'>
                    <input
                      placeholder='Please Enter ...'
                      maxLength={40}
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className=' mt-2 input-Text mo:w-full w-[425px] md:w-[380px] h-[55px] '
                    />
                  </DivBox>

                  <div className=' text-base md:text-sm font-medium mt-[27px] mo:text-base  mo:mt-5'>
                    Attach an image, not exceeding 128KB
                  </div>
                  <div className=''>
                    <DivBox className=' mt-5 w-full bg-white  h-[303px] md:h-[308px] border-[#000000] mo:mt-5  '>
                      <div onDrop={handleDrop} onDragOver={allowDrop} className=' flex items-center justify-center h-full flex-col '>
                        <input
                          type='file'
                          hidden
                          ref={inputImgRef}
                          accept='image/png, image/jpg, image/jpeg, image/gif, image/svg'
                          onChange={onFileChange}
                        />
                        <div
                          onClick={handleFileSelect}
                          className=' cursor-pointer w-[100px] h-[100px] bg-[#FFF8F4] border  border-dashed rounded-[5px] border-[#FC7823] flex items-center justify-center'
                        >
                          <img src='chooseAnyImg.svg'></img>
                        </div>
                        <div className=' mt-5 mo:mt-[30px] text-center justify-center flex flex-col  overflow-hidden truncate w-[200px]'>
                          <div className='flex items-center w-auto flex-row justify-center '>
                            <span title={file?.name} className='cursor-default w-auto'>
                              {shortStr(file?.name, 5)}
                            </span>
                            {previewUrl && (
                              <div className=' ml-2'>
                                <img
                                  src='iconPreview.svg'
                                  title='preview'
                                  alt='Preview'
                                  width={20}
                                  onClick={() => {
                                    setIsModalOpen(!isModalOpen)
                                    currentOpenState()
                                  }}
                                />
                              </div>
                            )}
                          </div>
                          <button className=' text-base font-semibold' onClick={handleFileSelect}>
                            Browse
                          </button>
                        </div>
                      </div>
                    </DivBox>
                  </div>
                  <div className='mt-5 mo:mt-10 flex justify-center mb-20 '>
                    <button
                      onClick={onTranscode}
                      className={` ${
                        !file?.name || !inputText ? 'cursor-not-allowed bg-[#BABABA] ' : 'bg-[#FC7823] '
                      } border px-6 text-base font-semibold items-center mo:w-full  flex rounded-xl text-[#FFFFFF] justify-center h-12 text-center`}
                    >
                      Transcode
                    </button>
                  </div>
                </div>
                <div className='w-0 flex-1 h-full  mo:mt-[-70px]'>
                  <div className=' text-2xl font-medium   '> Blob Data</div>
                  <div className='flex gap-[14px] mo:gap-[5px]  '>
                    <button
                      onClick={() => handleBlobClick(true)}
                      className={`w-[195px] md:w-[180px] h-[50px] flex border-[#000000] ${
                        selectedBlob && 'custom-background'
                      } items-center justify-center  mt-[30px] md:text-sm  text-base font-medium `}
                    >
                      Blob1(Text data)
                    </button>
                    <button
                      onClick={() => handleBlobClick(false)}
                      className={`w-[220px] md:w-[180px] h-[50px] flex ${
                        !selectedBlob && 'custom-background'
                      } items-center border-[#000000] justify-center mt-[30px] md:text-sm  border-dashed text-base font-medium `}
                    >
                      Blob2(Image data)
                    </button>
                  </div>

                  <ContentBox className='overflow-y-auto overflow-x-hidden  h-[442px] mo:h-[303px] p-5 break-all whitespace-normal '>
                    {transData && transData.text && <>{JSON.stringify(ub8a2numa(selectedBlob ? transData.text : transData.img))}</>}
                  </ContentBox>
                  <div className='mt-5 mo:mt-[37px] flex justify-center  mb-5'>
                    <button
                      className={` ${!transData ? 'cursor-not-allowed bg-[#BABABA] ' : 'bg-[#FC7823] '} border mo:w-full  px-6 text-base font-semibold items-center flex  rounded-xl text-[#FFFFFF]  justify-center  h-12 text-center`}
                      onClick={onSendTx}
                    >
                      Send Transaction
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='mo:w-full mx-auto w-container md:w-full md:px-[30px] mo:px-[30px]'>
            <div className='flex flex-row justify-center pt-[119px]  mo:items-center text-[54px] mo:text-[23px] md:text-[46px]'>
              <span className='font-medium cursor-default  mo:font-bold  mr-2'>Experience</span>
              <span onClick={onSwitchTo} className='flex font-semibold cursor-pointer mo:font-bold underline'>
                EIP-4844 <img className=' ml-2 w-[30px] ' src='/share.svg'></img>
              </span>
            </div>
            <div className='md:text-[46px] cursor-default mo:mt-[10px]  mo:text-center mo:leading-10  flex justify-center mo:w-full mo:flex-wrap  font-medium text-[54px] capitalize mo:text-[22px] mo:font-bold'>
              <div>blob-carrying transactions (Blob TX)</div>
            </div>

            <div className='cursor-default mt-[34px] mo:mt-5 justify-center  text-center mo:flex flex-wrap mo:flex-row '>
              <span className='font-medium  text-xl mo:text-[14px] mo:font-light '>
                Store a piece of text or an image fully on-chain with EthDA to understand the changes
              </span>
              <div>
                <span className='font-medium text-xl mo:text-[14px] mo:font-light'> introduced by </span>
                <button onClick={onSwitchTo} className='font-semibold text-xl mo:text-[16px] mo:font-medium'>
                  EIP-4844
                </button>
                <span className='font-medium  text-xl mo:text-[14px] mo:font-light '> blob-carrying transactions</span>
                <span className='font-semibold text-xl mo:text-[16px] mo:font-medium'> (Blob TX) </span>
                <span className='font-medium text-xl mo:text-[14px] mo:font-light'> following the </span>
              </div>
              <span className='font-semibold text-xl mo:text-[16px] mo:font-medium'>Ethereum </span>
              <span className='font-medium text-xl mo:text-[14px] mo:font-light'>&nbsp;Cancun-Deneb Upgrade.</span>
            </div>
            {isShow && (
              <ConnnectBtn
                onClick={() => {
                  refState.current.isClickShowModal = true
                }}
              />
            )}
            <div className=' mt-[100px] flex  mo:mx-0 md:mx-[100px] mx-[200px]  mo:text-center mo:justify-center  justify-between mo:flex-wrap mo:w-full'>
              <button onClick={onClickAddNet} className='mo:w-full underline text-lg '>
                Add EthDA Testnet to wallet
              </button>
              <button onClick={onGas} className='mo:mt-[70px] mo:mb-10 text-lg underline'>
                Bridge
              </button>
            </div>
          </div>
        )}
      </div>
      {loading.loading && <LoadingFull />}
      {loading.success && (
        <AToastFull
          chilren={
            <Fragment>
              <img src='success.svg' />
              <div className='font-medium text-xl text-[#FC7823] mt-[-30px]'>Success</div>
              <div className='flex gap-[15px] mt-5 mb-5  mo:mb-10 '>
                <button
                  onClick={() => {
                    window.open(`${ethdaNet.blockExplorers.blobs.url}/address/${tempAccountAddrss}`, '_blank')
                  }}
                  className=' mo:w-[120px] w-[140px]  border h-[36px] rounded-lg border-[#000000] px-[10px] font-medium text-base mo:text-sm'
                >
                  View History
                </button>
                <button
                  onClick={() => {
                    setLoading({ success: false })
                    setInputText('')
                    setFile(null)
                    setTransData(null as any)
                    scrollToTop()
                    setPreviewUrl(null)
                  }}
                  className='mo:w-[120px] w-[140px] mo:wa h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[10px] font-medium text-base mo:text-sm'
                >
                  Send More
                </button>
              </div>
            </Fragment>
          }
        />
      )}
      {loading.error && (
        <AToastFull
          chilren={
            <Fragment>
              <CrossCircledIcon
                className='text-[#FC7823] w-6 h-6 cursor-pointer absolute right-5 top-5'
                onClick={() => {
                  setLoading({})
                }}
              />
              <img src='failed.svg' />
              <div className='font-medium text-xl text-[#FC7823] mt-[-35px]'>{loading.errorMsg || 'Failed'}</div>
              <div className='flex gap-[38px] mt-[40px] mb-5'>
                <button
                  onClick={() => {
                    setLoading({ success: false, error: false, loading: false })
                    onSendTx()
                  }}
                  className='w-[141px] h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[21px] font-medium text-base'
                >
                  Send Again
                </button>
              </div>
            </Fragment>
          }
        />
      )}
      {shownettip && (
        <div className=' fixed z-40 top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center bg-black/10'>
          <div className='w-[calc(100%-40px)] bg-white p-5 rounded-lg max-w-[46rem]'>
            <div className='border border-dashed rounded-lg border-orange-400 py-5 px-[2rem] bg-[#FFFAF6]'>
              <div className='text-center text-[FC7823] font-medium text-[1.25rem]'>Switch to EthDA Network</div>
              <div className='mt-[2rem] mb-[2.25rem] flex flex-col gap-3'>
                <p className=' mo:text-sm'>
                  Please add EthDA Testnet to your wallet and make sure you have switched to EthDA Testnet before you start.
                </p>
                <p className=' mo:text-sm'>
                  Click on <strong className='mo:text-base'>“Add Network”</strong> button to view a simple guide for manually adding
                  network.
                </p>
                <p className=' mo:text-sm'>
                  Click on <strong className=' mo:text-base'>“Enter App”</strong> after you have switched your wallet to EthDA Testnet.
                </p>
              </div>

              <div className='flex items-center justify-center gap-5 mo:w-full flex-wrap '>
                <button
                  onClick={onClickAddNet}
                  className=' w-[160px]  border h-[36px] rounded-lg border-[#000000] px-[10px] font-medium text-base'
                >
                  Add Network
                </button>
                <button
                  onClick={() => {
                    refState.current.isClickShowModal = false
                    setShowNetTip(false)
                    currentCloseState()
                  }}
                  className='w-[160px] mo:wa h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[10px] font-medium text-base'
                >
                  Enter App
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading.uploadImageError && (
        <AToastFull
          chilren={
            <Fragment>
              <CrossCircledIcon
                className='text-[#FC7823] w-6 h-6 cursor-pointer absolute right-5 top-5'
                onClick={() => {
                  setLoading({})
                  currentCloseState()
                }}
              />
              <img src='failed.svg' />
              <div className='font-medium text-xl mx-5 text-[#FC7823] mt-[-35px] text-center'>{loading.uploadImageError || 'Failed'}</div>
              <div className='flex gap-[38px] mt-5 mb-10'>
                <button
                  onClick={() => {
                    setLoading({})
                    currentCloseState()
                  }}
                  className='w-[141px] h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[21px] font-medium text-base'
                >
                  OK
                </button>
              </div>
            </Fragment>
          }
        />
      )}

      {isModalOpen && (
        <AToastFull
          contentClassName={' h-auto  w-auto min-w-[350px]'}
          className={'px-5'}
          chilren={
            <Fragment>
              <CrossCircledIcon
                className='text-[#FC7823] w-6 h-6 cursor-pointer absolute right-5 top-5'
                onClick={() => {
                  setLoading({})
                  setIsModalOpen(false)
                  currentCloseState()
                }}
              />
              <div className=' mt-11 mx-5  '>
                <img src={previewUrl} alt='Preview' className=' max-h-[70vh]' />
              </div>
              <div className='flex gap-[38px] mt-5 mb-5 '>
                <button
                  onClick={() => {
                    setLoading({})
                    setIsModalOpen(false)
                    currentCloseState()
                  }}
                  className='w-[141px] h-[36px] text-[#FFFFFF] rounded-lg  bg-[#FC7823] px-[21px] font-medium text-base'
                >
                  OK
                </button>
              </div>
            </Fragment>
          }
        />
      )}
    </div>
  )
}

export default withClient(BlobTX)
