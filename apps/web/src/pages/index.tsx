import Head from 'next/head'

export default function Web() {
  return (
    <div>
      <div className='bg-gray-800 w-screen h-screen flex flex-col text-gray-100 p-4'>
        <div className='mb-3'>Yerba Tray</div>
        <div className='font-semibold'>Using...</div>
        <ul className='mb-3'>
          <li>Electron</li>
          <li>Vite</li>
          <li>TurboRepo</li>
          <li>Next.js</li>
          <li>Typescript</li>
          <li>Tailwind Monorepo</li>
        </ul>
        <div className='italic mb-3'>Wanna see some typesafe data?</div>
        <div className='mb-3'>
          <span className='font-bold'>{'Yerba version: '}</span>
          {window.yerba.version}
        </div>
        <div className='mb-3'>
          <span className='font-bold'>
            {"Hashed Yerba version using node's builtin crypto: "}
          </span>
          <br />
          <div className='break-all'>
            {window.nodeCrypto.sha256sum(window.yerba.version.toString())}
          </div>
        </div>
      </div>
    </div>
  )
}
