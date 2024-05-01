import {Link} from 'react-router-dom'
export default function PublicNavbar(){
    return(
        <>
            <div className="container-fluid">
                <nav className='navbar text-warning'>
                    <Link className='text-warning text-decoration-none ' to='/'> <h1>Logo</h1></Link>
                    <div className="navlink">
                        <Link className='hover:text-lg text-warning px-1 text-decoration-none sm:px-1 md:px-2 lg:px-3' to='/'><button className='btn btn-warnings'></button></Link>
                        <Link className='hover:text-lg text-warning px-1 text-decoration-none sm:px-1 md:px-2 lg:px-3' to='/about'>About</Link>
                        <Link className='hover:text-lg text-warning px-1 text-decoration-none sm:px-1 md:px-2 lg:px-3' to='/contact'>Contact</Link>
                        <Link className='hover:text-lg text-warning px-1 text-decoration-none sm:px-1 md:px-2 lg:px-3' to='/usersignin'>Login</Link>
                        <Link className='hover:text-lg text-warning px-1 text-decoration-none sm:px-1 md:px-2 lg:px-3' to='/usersignup'>Register</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}