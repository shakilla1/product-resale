import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar text-white bg-slate-800">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                            <li><Link to='home'>Home</Link></li>
                            <li><Link to='addservice'>Add Product</Link></li>
                            <li><Link to='myproduct'>My Product</Link></li>
                            <li><Link to='blog'>Blog</Link></li>

                            {
                                user?.uid ?
                                    <li><Link to='dashboard'>Dashboard</Link></li>
                                    :
                                    <>

                                        <li><Link to='/register'>Register</Link></li>
                                    </>
                            }

                        </ul>
                    </div>

                    <span><img className='h-10 w-10 rounded-sm  ' src='https://i.ibb.co/dbz5pW2/images-2.jpg' alt="" /></span>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Refrigerator Sell</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='home'>Home</Link></li>
                        <li><Link to='addservice'>Add Product</Link></li>
                        <li><Link to='myproduct'>My Product</Link></li>
                        <li><Link to='blog'>Blog</Link></li>

                        {
                            user?.uid ?
                                <li><Link to='dashboard'>Dashboard</Link></li>

                                :
                                <>
                                    <li><Link to='/login'>Login</Link></li>

                                </>
                        }
                    </ul>

                </div>

                <div className="navbar-end">
                    <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <button className='  btn btn-primary font-bold w-full h-2 ' variant="light" onClick={handleLogOut}>Sign Out</button>
                                        </>
                                        :
                                        <>
                                            <li><Link to='/login'>Login</Link></li>
                                            <li><Link to='/register'>Register</Link></li>
                                        </>
                                }


                            </>


                        </ul>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Navbar;