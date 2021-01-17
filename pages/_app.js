import AuthContextProvider from '../context/auth/authState';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
    
  )
}

export default MyApp
