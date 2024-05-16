import {useForm} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from 'react-router-dom'

export default function UserSignIn(){
    const {register,handleSubmit,formState:{errors}} = useForm()
    const navigate = useNavigate();


    async function onSubmit(data){
        let url='http://localhost:1699/usersignin'
        let response = await fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
        if(response.error!=''){
            Qual.errordb('Error: ' ,response.error)
        }else{

            // Qual.successdb('Success: ',response.message)
            localStorage.setItem('userToken',response.token)
            navigate('/user/dashboard')
        }
    }

    return (
        <>
            <div className="text-warning text-center bg-black pb-4">
                <h1 className='pt-3'>User SignIn  <i className="fa-solid fa-right-to-bracket"></i></h1>
                <hr className='mb-5'/>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email',{required:'This field is required'})} type="email" placeholder='Enter email' className='shadow appearance-none border rounded w-full px-2 py-2' />
                <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                <br />
                <br />

                <input {...register('password',{required:'This field is required'})} type="password" placeholder='Enter password' className='shadow appearance-none border rounded w-full px-2 py-2' />
                <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                <br />
                <br />

                <button className='btn btn-outline-warning'>LogIn</button>
                </form>

            </div>
        </>
    )

}