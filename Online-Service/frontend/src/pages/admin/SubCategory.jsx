import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react';
import { ErrorMessage } from '@hookform/error-message';


export default function SubCategory() {

    let [category, setCategory] = useState([])

    let { register, handleSubmit,formState:{errorscd} } = useForm()

    async function DeleteCategory(_id) {
        console.log(_id)
        let url = `http://localhost:1699/category/${_id}`
        let response = await fetch(url, { method: 'DELETE' })
        response = await response.json()
        console.log(response)
        ReadCategory();
    }

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

    async function onSubmit(data) {
        console.log(data)
        let url = 'http://localhost:1699/subcategory'
        let response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        response = await response.json()
        console.log(response)
        ReadCategory()
    }
    useEffect(() => {
        ReadCategory()
    }, [])

    return (
        <>
            <div className="container-fluid text-center text-warning">
                <h1 className='mt-3'>Add SubCategory  <i className="fa-solid fa-list"></i></h1>
                <hr />
                <br />
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <select {...register('categoryName', { required: "This field is required" })} className='form-control-lg mb-3'>
                        <option value="">Select Category</option>
                        {category.map((value, index) =>
                            <option key={value._id} value={value.categoryName}>{value.categoryName}</option>
                        )}
                    </select>
                    <ErrorMessage
                            errors={errors}
                            name="categoryName"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br />
                    <input {...register('subCategory', { required: "This field is required" })} className='form-control-lg' type="text" placeholder='Enter Sub category' />
                    <ErrorMessage
                            errors={errors}
                            name="subCategory"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <br />
                    <button className='btn btn-outline-warning mt-3'>Submit</button>
                </form>

                <br />
                <hr />

                <table className='table-auto'>
                    <thead >
                        <tr>
                            <th className='px-4 py-2'>Sr.No</th>
                            <th className='px-4 py-2'>Categoy Name</th>
                            <th className='px-4 py-2'>SubCategory</th>
                            <th className='px-4 py-2'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((categoryItem, categoryIndex) => (
                            <tr key={categoryIndex}>
                                <td className='border-yellow-500 px-4 py-2'>{categoryIndex + 1}</td>
                                <td className='border-yellow-500 px-4 py-2'>{categoryItem.categoryName}</td>
                                <td className='border-yellow-500 px-4 py-2'>
                                    {categoryItem.subCategory && categoryItem.subCategory.length > 0 ? (
                                        <ul>
                                            {categoryItem.subCategory.map((subCategoryItem, subCategoryIndex) => (
                                                <li key={subCategoryIndex}>{subCategoryItem.name}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        "No subcategories"
                                    )}
                                </td>
                                <td className='border-yellow-500 px-4 py-2'>
                                    <button type='button' className="btn btn-outline-danger" onClick={() => DeleteCategory(categoryItem._id)}>Delete</button>
                                </td>

                            </tr>

                        ))}
                    </tbody>



                </table>
            </div>
        </>
    )

}