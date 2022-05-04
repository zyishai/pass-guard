import '../firebaseConfig';
import Toolbar, { ToolbarButton, ToolbarLink } from 'components/Toolbar';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'stretch', overflow: 'hidden' }}>
      <Toolbar aria-label="app toolbar" css={{ alignItems: 'center' }}>
        <ToolbarLink href="/" rel="noopener noreferrer" css={{ marginRight: 'auto', display: 'flex', alignItems: 'center', columnGap: 5 }}>
          <Image src='/logo-96.png' width={64} height={64} alt="passguard logo" />
          <h1>PassGuard</h1>
        </ToolbarLink>
        <ToolbarButton css={{ margin: '0 15px' }}>
          <Link href="/soon">Login</Link>
        </ToolbarButton>
        <ToolbarLink href="/soon">Register</ToolbarLink>
      </Toolbar>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
