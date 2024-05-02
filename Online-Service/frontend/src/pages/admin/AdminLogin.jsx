import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
import Footer from '../../components/Footer'
export default function AdminLogin() {
    const navigate = useNavigate()
    const {register,handleSubmit, formState:{errors}} = useForm()
    async function onSubmit(data){
        console.log(data)
        let url = 'http://localhost:1699/adminlogin'
        let response = await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
        if(response.error!=''){
            alert(response.error)
        }else{
            localStorage.setItem('adminToken',response.token)
            navigate('/admin/dashboard')
        }
    }


    return (
        <>
            
            <div className='text-center bg-black text-warning pb-4'>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Admin Login  <i className="fa-solid fa-lock"></i></h1>
                    <hr className='mb-5' />
                    <input className='shadow appearance-none border rounded w-full px-2 py-2' required {...register('email',{required:'This field is required'})} type="email" placeholder="enter email" />
                    <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br /><br />
                    <input className='shadow appearance-none border rounded w-full px-2 py-2' required {...register('password',{required:'This field is required'})} type="password" placeholder="enter password" />
                    <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br /><br />
                    <input className='shadow appearance-none border rounded w-full px-2 py-2' required {...register('fullname',{required:'This field is required'})} type="text" placeholder="enter fullname" />
                    <ErrorMessage
                            errors={errors}
                            name="fullname"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br /><br />
                    <button className='btn btn-outline-warning '>Login</button>
                </form>
            </div>
            <hr className='text-warning mt-5'/>
            <Footer/>
        </>
    )
}