import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";







export default function UserSignUp() {
    const { register, handleSubmit, formState:{errors} } = useForm()

    async function onSubmit(data) {
        console.log(data)

        let url = 'http://localhost:1699/usersignup'
        let response = await fetch(url, {
            method: 'POST',
            headers: { 'Con`tent-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)

    if(response.error!=""){
        Qual.errordb('Error: ' ,response.error)
    }else{
        Qual.successdb('Success: ',response.message)
    }

        
    }
    

    return (
        <>
            <div className='container-fluid  text-light text-center'>
                <h1 className='text-warning'>User SignUp  <i className="fa-solid fa-user-plus"></i></h1>
                <hr className='text-warning mb-5' />
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)}className=''>

                        <input {...register('email', { required: 'This field is required' })} type="email" className='shadow appearance-none border rounded w-full px-2 py-2' placeholder='Enter Email' />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <br /><br />

                        <input {...register('password', { required: 'This field is required' })} type="password" className='shadow appearance-none border rounded w-full px-2 py-2' placeholder='Enter password' />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <br /><br />




                        <input {...register('fullname', { required: 'This field is required' })} type="text" className='shadow appearance-none border rounded w-full px-2 py-2' placeholder='Enter fullname' /> 

                        <ErrorMessage
                            errors={errors}
                            name="fullname"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <br /><br />
                        <input {...register('mobile', { required: 'This field is required' })} type="tel" className='shadow appearance-none border rounded w-full px-2 py-2' placeholder='Enter mobile number' />
                        <ErrorMessage
                            errors={errors}
                            name="mobile"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <br /><br />

                        <select  {...register('gender', { required: 'This field is required' })} className='shadow appearance-none border rounded w-full px-2 py-2'>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="gender"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />

                        <br /><br />

                        <select  {...register('state', { required: 'This field is required' })} className='shadow appearance-none border rounded w-full px-2 py-2'>
                            <option value="">Select State</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Jammu">Jammu</option>
                            <option value="Maharashtra">Maharashtra</option>
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="state"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <br /><br />

                        <input type="text" {...register('city', { required: 'This field is required' })} className='shadow appearance-none border rounded w-full px-2 py-2' placeholder='Enter your city' />
                        <ErrorMessage
                            errors={errors}
                            name="city"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <br /><br />

                        <button className='btn btn-outline-warning'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}