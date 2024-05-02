import { Link } from 'react-router-dom';

export default function PublicNavbar() {
    return (
        <>
            <div className="grid dm:grid-cols-1 md:grid-cols-2 justify-evenly  text-center bg-black pb-4">
                <div className="md:col-span-1 sm:col-span-2">
                    <Link to='/' className='text-decoration-none text-warning'>
                        <h1 className=''>
                            MeetServz
                        </h1>
                    </Link>
                </div>
                <div className="md:col-span-1 sm:col-span-2 flex justify-center md:justify-end ">
                    <input type="text" placeholder='Search..' className='rounded text-2xl mr-2 outline-double' />
                    <Link to="/" className='text-decoration-none text-warning mx-2 sm:mx-1'>
                        Services
                    </Link>
                    <Link to="/" className='text-decoration-none text-warning mx-2 sm:mx-1'>
                        About
                    </Link>
                    <Link to="/" className='text-decoration-none text-warning mx-2 sm:mx-1'>
                        Contact
                    </Link>
                    <Link to="/user" className='text-decoration-none text-warning mx-2 sm:mx-1'>
                        User
                    </Link>
                    <Link to="/provider" className='text-decoration-none text-warning mx-2 sm:mx-1'>
                        Provider
                    </Link>
                    <Link to="/adminlogin" className='text-decoration-none text-warning mx-2 sm:mx-1'>
                        Admin
                    </Link>
                </div>
            </div>
        </>
    );
}
