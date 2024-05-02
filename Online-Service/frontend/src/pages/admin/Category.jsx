import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import Footer from '../../components/Footer';


function Category() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [category, setCategory] = useState([]);

    async function onSubmit(data) {
        console.log(data)
        let response = await fetch('http://localhost:1699/category', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        response = await response.json()
        console.log(response)
        document.getElementById('categorypanel').value = ''
        ReadCategory()
    }


    async function ReadCategory() {
        let url = 'http://localhost:1699/category'
        let response = await fetch(url);
        response = await response.json()
        // console.log(response)
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

    async function DeleteCategory(_id) {
        console.log(_id)
        let url = `http://localhost:1699/category/${_id}`
        let response = await fetch(url, { method: 'DELETE' })
        response = await response.json()
        console.log(response)
        ReadCategory();
    }

    return (
        <>
            <div className="container-fluid  text-warning text-center ">
                <h1 className='mb-3'>Category Page  <i className="fa-solid fa-layer-group"></i></h1>
                <hr className='mb-5' />
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <input type="text" {...register('categoryName', { required: 'This field is required' })} className='shadow appearance-none border rounded w-full px-2 py-2' placeholder='Enter Category' id='categorypanel' />
                    <ErrorMessage
                        errors={errors}
                        name="categoryName"
                        render={({ message }) => <p className='error-message'>{message}</p>}
                    />
                    <button className='btn btn-warning py-2'>Add Category</button>
                </form>
                <br />
                <hr />
                <table className='table-auto'>
                    <thead >
                        <tr>
                            <th className='px-4 py-2'>Sr.No</th>
                            <th className='px-4 py-2'>Categoy Name</th>
                            <th className='px-4 py-2'>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {category.map((value, index) =>
                            <tr key={index}>
                                <td className='border-yellow-500 px-4 py-2'>{index + 1}</td>
                                <td className='border-yellow-500 px-4 py-2'>{value.categoryName}</td>
                                <td className='border-yellow-500 px-4 py-2'>
                                    <button type='button' className="btn btn-outline-danger" onClick={() => DeleteCategory(value._id)}>Delete</button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
            <hr  className='text-warning'/>
            <Footer/>
        </>
    )
} export default Category