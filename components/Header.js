import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import AuthContext from '../context/auth/authContext';


const Header = () => {

    const authContext = useContext(AuthContext);

    const { user, userAuthenticated, logOut } = authContext;

    return ( 
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Link href="/">
                <img className="w-64 mb-8 md:mb-0 cursor-pointer" src="/logo.svg" alt="Logo"/>
            </Link>
        
            <div>
                {user ? (
                    <div className="flex items-center">
                        <p className="mr-2">Hello <span className="text-red-500 font-bold">{user.name}</span></p>
                        <button
                            type="button"
                            className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase"
                            onClick={() => logOut()}
                        >Log out</button>
                    </div>
                ) : (
                   <>
                    <Link href="/login">
                        <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Login</a>
                    </Link>
                    <Link href="/newaccount">
                        <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Create account</a>
                    </Link>
                   </> 
                )}
            </div>
        </header>
     );
}
 
export default Header;