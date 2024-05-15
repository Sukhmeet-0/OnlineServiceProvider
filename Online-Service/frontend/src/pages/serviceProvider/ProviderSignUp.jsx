import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"
import { useState, useEffect } from "react"
// import Footer from "../../components/Footer"
// import PublicNavbar from "../../components/PublicNavbar"

export default function ProviderSignUp() {
    let { register, handleSubmit, formState: { errors } } = useForm()

    let [category, setCategory] = useState([])
    let [subcategories, setSubcategories] = useState([])
    let [selectedCategory, setSelectedCategory] = useState("")


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
    async function ReadSubcategories(categoryName) {
        let url = `http://localhost:1699/subcategory/${categoryName}`
        let response = await fetch(url)
        response = await response.json()
        console.log(response)
        if (response.error !== undefined) {
            if (response.error !== '') {
                alert(response.error);
            } else {
                console.log(response.subCategory);
                setSubcategories(response.subCategory);
            }
        } else {
            console.log(response.subCategory);
            setSubcategories(response.subCategory);
        }
    }

    function handleCategoryChange(event) {
        const selectedCategory = event.target.value;
        setSelectedCategory(selectedCategory);
        ReadSubcategories(selectedCategory);
    }


    async function onSubmit(data){
        let url = "http://localhost:1699/providersignup"
        let response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
    }

    useEffect(() => {
        ReadCategory()
    }, [])
    

    return (
        <>
            
            <div className="">
                <h1 className="">Provider SignUp  <i className="fa-solid fa-user-plus"></i></h1>
                <br />
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <input {...register('fullname', { required: 'This field is required' })} type="text" placeholder="Enter name" className="" />
                        <ErrorMessage
                            errors={errors}
                            name="fullname"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />

                        <input {...register('email', { required: "This field is required" })} type="email" placeholder="Enter email" className="" />
                        <ErrorMessage
                            errors={errors}
                            name="email"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <input {...register('password', { required: "This field is required" })} type="password" placeholder="Enter password" className="" />
                        <ErrorMessage
                            errors={errors}
                            name="password"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <input {...register('confirmpassword', { required: "This field is required" })} type="password" placeholder="Confirm password" className="" />
                        <ErrorMessage
                            errors={errors}
                            name="confirmpassword"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <input {...register('phone', { required: "This field is required" })} type="tel" placeholder="Enter phone number" className="" />
                        <ErrorMessage
                            errors={errors}
                            name="phone"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                        <select {...register('city', { required: "This field is required" })} className="">
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
                        <textarea {...register('address',{required:"This field is required"})}  id="" cols="47" rows="3" className="" placeholder="Enter your address..."></textarea>
                        <ErrorMessage
                            errors={errors}
                            name="address"
                            render={({ message }) => <p className='error-message'>{message}</p>} />
                        <br />
                        <label htmlFor="starttime">Start time: </label>
                        <input {...register('starttime', { required: "This field is required" })} type="time" className="" />
                        <ErrorMessage
                            errors={errors}
                            name="starttime"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <label htmlFor="endtime">End Time: </label>
                        <input {...register('endtime', { required: "This field is required" })} type="time" className="" placeholder="" />
                        <ErrorMessage
                            errors={errors}
                            name="endtime"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <input {...register('slot', { required: "This field is required" })} type="text" placeholder="Enter price per hour" className="" />
                        <ErrorMessage
                            errors={errors}
                            name="slot"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <input {...register('photo', { required: "This field is required" })} type="file" className=" " />
                        <ErrorMessage
                            errors={errors}
                            name="photo"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <select {...register('categoryName', { required: "This field is required" })} className="" onChange={handleCategoryChange}>
                            <option value="">Select Category</option>
                            {category.map((value, index) =>
                                <option key={value._id} value={value.categoryName}>{value.categoryName}</option>
                            )}

                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="categoryName"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                       <select {...register('subCategory', { required: "This field is required" })} className="">
                            <option value="">Select SubCategory</option>
                            {subcategories.map((value, index) =>
                                <option key={index} value={value.name}>{value.name}</option>
                            )}
                        </select>
                        <ErrorMessage
                            errors={errors}
                            name="subCategory"
                            render={({ message }) => <p className='error-message'>{message}</p>} />

                        <br />

                        <button className="">Register</button>
                    </div>


                </form>
            </div>
            <hr className="text-warning"/>
           
        </>
    )
}