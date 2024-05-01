import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
import { ErrorMessage } from '@hookform/error-message'
export default function ChangePassword() {

    let navigate = useNavigate()

    const { register, handleSubmit,formState:{errors} } = useForm()
    async function onSubmit(data) {
        let token = localStorage.getItem('adminToken')


        if (!token) { navigate('/adminlogin') }
        else {
            data['token'] = token
            console.log(data)
            let url = 'http://localhost:1699/changepassword'
            let response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)

            })
            response = await response.json()
            console.log(response)
        }
    }
    return (

        <>
            <div className='text-center text-warning container-fluid'>
                <h1>Change password  <i class="fa-solid fa-key"></i></h1>
                <hr className='mb-5'/>
                <br />
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="shadow appearance-none border rounded w-full px-2 py-2" {...register('password', { required: 'This field is required' })} type="password" placeholder="current password" required /> 
                    <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br /> <br />
                    <input className="shadow appearance-none border rounded w-full px-2 py-2" {...register('newpassword', { required: 'This field is required' })} type="password" placeholder="new password" required />
                    <ErrorMessage
                            errors={errors}
                            name="newpassword"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br /> <br />
                    <input className="shadow appearance-none border rounded w-full px-2 py-2" {...register('confirmpassword', { required: 'This field is required' })} type="password" placeholder="confirm password" required />
                    <ErrorMessage
                            errors={errors}
                            name="confirmpassword"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br /> <br />
                    <button className='btn btn-outline-warning'>Change password</button>
                </form>
            </div>
        </>
    )
}