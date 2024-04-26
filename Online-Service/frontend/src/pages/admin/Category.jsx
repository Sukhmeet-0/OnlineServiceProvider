import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'


function Category() {
    const { register, handleSubmit,formState:{errors} } = useForm()

    async function onSubmit(data) {
        console.log(data)
        let response = await fetch('http://localhost:1699/category', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        response = await response.json()
        console.log(response)
        document.getElementById('categorypanel').value = ''
        ReadCategory()
    }

    const [category, setCategory] = useState([]);

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
                <h1 className='mb-3'>Category Page  <i class="fa-solid fa-layer-group"></i></h1>
                <hr className='mb-5' />
                <form action="" onSubmit={handleSubmit(onSubmit)} className='bg-dark'>
                    <input type="text" {...register('categoryName', { required: 'This field is required' })} className='form-control-lg' placeholder='Enter Category' id='categorypanel'/>
                    <ErrorMessage
                            errors={errors}
                            name="categoryName"
                            render={({ message }) => <p className='error-message'>{message}</p>}
                        />
                    <button className='btn btn-outline-warning btn-lg'>Add Category</button>
                </form>
                <br />

                <table className='table table-dark  table-striped '>
                    <thead >
                        <tr>
                            <th>Sr.No</th>
                            <th>Categoy Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {category.map((value, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.categoryName}</td>
                                <td>
                                    <button type='button' className="btn btn-outline-danger" onClick={() => DeleteCategory(value._id)}>Delete</button>
                                </td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
} export default Category