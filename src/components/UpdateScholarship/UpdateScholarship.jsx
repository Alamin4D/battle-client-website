// import { useContext, useState } from 'react'
// import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
// import toast from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'
import { Helmet } from 'react-helmet-async'
import { TbFidgetSpinner } from 'react-icons/tb'
import { useState } from 'react'


const UpdateBook = () => {
    const scholarships = useLoaderData()
    const [loading, setLoading] = useState(false)
    // const navigate = useNavigate()
    const {
        _id,
        // category,
        // name,
    } = scholarships || {}
    console.log(scholarships)
const {user} = useAuth()
    console.log(_id)
    const handleSubmit = async e => {
        e.preventDefault()
        // const deadline = startDate
        const email = user?.email
        // const BookData = {
        //     category,
        //     name,
        //     email,
        // }
        console.log(email)

        // try {
        //     const { data } = await axios.put(
        //         `${import.meta.env.VITE_API_URL}/book/${_id}`,
        //         BookData
        //     )
        //     console.log(data)
        //     toast.success('Scholarship Data Updated Successfully!')
        //     navigate('/dashboard/manage-scholarships')
        // } catch (err) {
        //     console.log(err)
        //     toast.error(err.message)
        // }
    }
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <Helmet>
                <title>Update</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
                <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            
            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
              Category
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='category'
                id='category'
                type='text'
                placeholder='Category'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='degree' className='block text-gray-600'>
                Degree
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='degree'
                id='degree'
                type='text'
                placeholder='Degree'
                required
              />
            </div>

            {/* <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div> */}
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
                University Name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='University Name'
                required
              />
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='charge' className='block text-gray-600'>
                Service charge
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='charge'
                  id='charge'
                  type='number'
                  placeholder='Service charge'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='fees' className='block text-gray-600'>
                Application Fees
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='fees'
                  id='fees'
                  type='number'
                  placeholder='Application'
                  required
                />
              </div>
            </div>

            
          </div>
          </div>
          <button
          disabled={loading}
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-red-800'
        >
          {loading ? (
            <TbFidgetSpinner className='animate-spin m-auto' />
          ) : (
            ' Save & Continue'
          )}
        </button>
      </form>
        </div>
    )
}

export default UpdateBook