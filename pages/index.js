import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import Dropzone from '../components/Dropzone';
import AuthContext from '../context/auth/authContext';
import Link from 'next/link'

const Index = () => {

  const authContext = useContext(AuthContext);

  const { userAuthenticated } = authContext;

  useEffect(() => {
    userAuthenticated();
  }, [])

  return ( 
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-32">
        <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10">
          <Dropzone/>
          <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0">
            <h2 className="text-4xl font-sans font-bold text-gray-800 my-4">Share your files!</h2>
            <p className="text-lg leading-loose">
              <span className="text-red-500 font-bold">N&N</span> allows you to share files encrypted end to end
            </p>
            <Link href='/newaccount'>
              <a className="text-red-500 font-bold text-md hover:text-red-700">Create an account and get access to a lot of benefits!</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
   );
}
 
export default Index;