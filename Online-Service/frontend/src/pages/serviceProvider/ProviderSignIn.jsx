import {useForm} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer'

export default function ProviderSignIn(){
    const{register,handleSubmit,formState:{errors}}=useForm()
    const navigate = useNavigate();
    async function onSubmit(data){
        let url='http://localhost:1699/providersignin'
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
    return(
        <>
            <div className="container-fluid text-center bg-black text-warning pb-4">
                <h1 className="pt-3">Provider Sign In  <i className="fa-solid fa-lock"></i></h1>
                <hr className="mt-4" />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1">
                        <input {...register('email',{required:"This field is required"})} type="email" placeholder='Enter email' className='form-control-lg mt-3' />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <br />
                        <input {...register('password',{required:"This field is required"})} type="password" placeholder='Enter password' className='form-control-lg mt-3' />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    </div>
                    <br />
                    <button className="btn btn-warning">Login</button>
                </form>

            </div>
            <hr className='text-warning'/>
            <Footer/>
        </>
    )
}