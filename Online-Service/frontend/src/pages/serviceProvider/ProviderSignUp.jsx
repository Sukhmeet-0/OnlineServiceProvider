import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useState, useEffect } from "react"

export default function ProviderSignUp() {
    let { register, handleSubmit, formState: { errors } } = useForm()

    let [category, setCategory] = useState([])
    let [cat, setCat] = useState()


    async function ReadCategory(data) {
        let url = 'http://localhost:1699/category'
        let response = await fetch(url)
        response = await response.json()
        console.log(response)
        if (response.error != '') {
            alert(response.error)
        } else {
            console.log(response.documents)
            setCategory(response.documents)
        }
    }

    useEffect(() => {
        ReadCategory()
    }, [])
    console.log(cat)

    return (
        <>
            <div className="container-fluid text-center">
                <h1 className="mt-3">Provider SignUp  <i className="fa-solid fa-user-plus"></i></h1>
                <br />
                <hr />
                <form action="">
                    <div className="grid sm:grid-cols-1 grid-cols-2">
                        <input {...register('fullname', { required: 'This field is required' })} type="text" placeholder="Enter name" className="form-control-lg m-3" />
                        <ErrorMessage
                            errors={errors}
                            name="fullname"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />

                        <input {...register('email', { required: "This field is required" })} type="email" placeholder="Enter email" className="form-control-lg m-3" />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <input {...register('password', { required: "This field is required" })} type="password" placeholder="Enter password" className="form-control-lg m-3" />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <input {...register('confirmpassword', { required: "This field is required" })} type="password" placeholder="Confirm password" className="form-control-lg m-3" />
                        <ErrorMessage
                            errors={errors}
                            name="confirmpassword"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <input {...register('phone', { required: "This field is required" })} type="tel" placeholder="Enter phone number" className="form-control-lg m-3" />
                        <ErrorMessage
                            errors={errors}
                            name="phone"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <select {...register('city', { required: "This field is required" })} className="form-control-lg m-3">
                            <option value="">Select City</option>
                            <option value="Amritsar">Amritsar </option>
                            <option value="Batala">Batala</option>
                            <option value="Jalandhar">Jalandhar</option>
                            <option value="Gurdaspur">Gurdaspur</option>
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="city"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <textarea name="" id="" cols="47" rows="3" className="form-control-lg m-3 col-span-2" placeholder="Enter your address..."></textarea>
                        <ErrorMessage
                            errors={errors}
                            name="starttime"
                            render={({ message }) => <p className='error-message'>{message}</p>} />
                        <br />
                        <label htmlFor="starttime">Start time: </label>
                        <input {...register('starttime', { required: "This field is required" })} type="time" className="form-control-lg m-3" />
                        <ErrorMessage
                            errors={errors}
                            name="starttime"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <label htmlFor="endtime">End Time: </label>
                        <input {...register('endtime', { required: "This field is required" })} type="time" className="form-control-lg m-3" placeholder="" />
                        <ErrorMessage
                            errors={errors}
                            name="endtime"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <input {...register('slot', { required: "This field is required" })} type="text" placeholder="Enter price per hour" className="form-control-lg m-3" />
                        <ErrorMessage
                            errors={errors}
                            name="slot"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <input {...register('photo', { required: "This field is required" })} type="file" className="form-control-lg " />
                        <ErrorMessage
                            errors={errors}
                            name="photo"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <select {...register('categoryName', { required: "This field is required" })} className="form-control-lg m-3" onChange={(e) => setCat(e.target.value)}>
                            <option value="">Select Category</option>
                            {category.map((value, index) =>
                                <option key={value._id} value={value.categoryName}>{value.categoryName}</option>
                            )}

                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="categoryName"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <select {...register('subCategory', { required: "This field is required" })} className="form-control-lg m-3">
                            <option>Select SubCategory</option>
                           
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="subCategory"
                            render={({ message }) => <p className='error-message'>{message}</p>} />
                        <br />

                        <button className="btn btn-outline-warning m-3 col-span-2">Register</button>
                    </div>


                </form>
            </div>
        </>
    )
}