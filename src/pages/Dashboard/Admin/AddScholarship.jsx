import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { TbFidgetSpinner } from 'react-icons/tb'
import useAuth from '../../../hooks/useAuth'
import { imageUpload } from '../../../api/utils'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
const AddScholarship = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      })
      //Date range handler
  const handleDates = item => {
    setDates(item.selection)
  }

  const { mutateAsync } = useMutation({
    mutationFn: async scholarshipData => {
      const { data } = await axiosSecure.post(`/add-scholarship`, scholarshipData)
      return data
    },
    onSuccess: () => {
      console.log('Data Saved Successfully')
      toast.success('Scholarship Added Successfully!')
      navigate('/dashboard/all-applied-scholarship')
      setLoading(false)
    },
  })

const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const location = form.location.value
    const category = form.category.value
    const name = form.name.value
    const to = dates.endDate
    const from = dates.startDate
    const fees = form.fees.value
    const Post_Date = form.Post_Date.value
    const charge = form.charge.value
    const description = form.description.value
    const price = form.price.value
    const degree = form.degree.value
    const image = form.image.files[0]

    const moderator = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try{
      const image_url = await imageUpload(image)
      const scholarshipData = {
        location,
        category,
        name,
        to,
        from,
        fees,
        Post_Date,
        charge,
        price,
        degree,
        moderator,
        description,
        image: image_url,
      }
      console.table(scholarshipData)

      //   Post request to server
      await mutateAsync(scholarshipData)
    } catch (err){
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
}

 //   handle image change
 const handleImage = image => {
  setImagePreview(URL.createObjectURL(image))
  setImageText(image.name)
}


  
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <Helmet>
        <title>Add Scholarship | Dashboard</title>
      </Helmet>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div>
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

            <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              {/* Calender */}
              <DateRange
                rangeColors={['#F43F5E']}
                editableDateInputs={true}
                onChange={item => handleDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
              />
            </div>
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

            <div className=' p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      onChange={e => handleImage(e.target.files[0])}
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-red-800 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-red-800'>
                      {/* {imageText} */}
                      {imageText.length > 20
                        ? imageText.split('.')[0].slice(0, 15) +
                          '....' +
                          imageText.split('.')[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className='h-16 w-16 object-cover overflow-hidden flex items-center'>
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='fees' className='block text-gray-600'>
                Application fees
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='fees'
                  id='fees'
                  type='number'
                  placeholder='Application fees'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='post date' className='block text-gray-600'>
                Post Date
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='Post_Date'
                  id='Post_Date'
                  type='text'
                  placeholder='Post Date'
                  required
                />
              </div>
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
                <label htmlFor='price' className='block text-gray-600'>
                Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-red-800 focus:outline-red-800 '
                name='description'
              ></textarea>
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

export default AddScholarship