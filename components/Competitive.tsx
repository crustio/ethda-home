import Image from 'next/image'

export const Competitive = () => {
  return (
    <div className={'py-28 mo:py-5 bg-gradient-to-b from-[rgb(245,230,221)] to-[rgb(249,246,241)] '}>
      <div className='text-center title mb-10'>Competitive Landscape</div>
      <div className='container mx-auto  mo:mx-10 mo:w-auto  '>
        <div className='table-container '>
          <table className=''>
            <tr className='no-border'>
              <th>&nbsp;</th>
              <th>
                <Image src={'/ethda.svg'} alt={'ethda'} width={101} height={22} />
              </th>
              <th>
                <Image src={'/celestia.svg'} alt={'ethda'} width={110} height={28} />
              </th>
              <th>
                <Image src={'/avail.svg'} alt={'ethda'} width={97} height={28} />
              </th>
              <th>
                <Image src={'/eigenda.svg'} alt={'ethda'} width={134} height={28} />
              </th>
              <th>
                <Image src={'/eth.svg'} alt={'ethda'} width={144} height={30} />
                <div className={'text-[10px] mt-1 pl-7'}>(Pre-EIP4844)</div>
              </th>
            </tr>
            <tr>
              <td>
                <div className=' mo:w-[150px]'>Technology</div>
              </td>
              <td className='bg-[#F6E5DC]  font-medium'>
                <div className=' mo:w-[200px] '>Ethereum Rollup</div>
              </td>
              <td>
                <div className=' mo:w-[200px]'>Tendermint</div>
              </td>
              <td>
                <div className=' mo:w-[200px]'>Substrate</div>
              </td>
              <td>
                <div className=' mo:w-[200px]'>Smart Contract</div>
              </td>
              <td>
                <div className=' mo:w-[200px]'>Ethereum</div>
              </td>
            </tr>
            <tr>
              <td>Payment</td>
              <td className='bg-[#F6E5DC]  font-medium'>$ETH</td>
              <td>$TIA</td>
              <td>TBD</td>
              <td>$ETH</td>
              <td>$ETH</td>
            </tr>
            <tr>
              <td>Data Retention</td>
              <td className='bg-[#F6E5DC]  font-medium'>Permanent</td>
              <td>Temporary</td>
              <td>Temporary</td>
              <td>Temporary</td>
              <td>Temporary</td>
            </tr>
            <tr>
              <td>dStorage</td>
              <td className='bg-[#F6E5DC]  font-medium'>Yes</td>
              <td>No</td>
              <td>No</td>
              <td>No</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Data Availability sampling</td>
              <td className='bg-[#F6E5DC]  font-medium'>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Proof scheme</td>
              <td className='bg-[#F6E5DC]  font-medium'>Validity Proofs</td>
              <td>Fraud Proofs</td>
              <td>Validity Proofs</td>
              <td>Validity Proofs</td>
              <td>Validity Proofs</td>
            </tr>
            <tr>
              <td>Ability to scale</td>
              <td className='bg-[#F6E5DC]  font-medium'>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Cost</td>
              <td className='bg-[#F6E5DC]  font-medium'>Low</td>
              <td>Low</td>
              <td>Low</td>
              <td>TDB</td>
              <td>High</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}
