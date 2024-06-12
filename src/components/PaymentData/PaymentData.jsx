import { useNavigate } from "react-router-dom"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { imageUpload } from "../../api/utils"
import { Helmet } from "react-helmet-async"
import { TbFidgetSpinner } from "react-icons/tb"
import useAuth from "../../hooks/useAuth"

const PaymentData = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
  const { user } = useAuth()
  const [imagePreview, setImagePreview] = useState()
  const [imageText, setImageText] = useState('Upload Image')

  const { mutateAsync } = useMutation({
    mutationFn: async appliedData => {
      const { data } = await axiosSecure.post(`/applied-scholarship`, appliedData)
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
    const phone = form.phone.value
    const gender = form.gender.value
    const name = form.name.value
    const category = form.category.value
    const subject = form.subject.value
    const address = form.address.value
    const degree = form.degree.value
    const diploma = form.diploma.value
    const date = form.date.value
    const ssc = form.ssc.value
    const hsc = form.hsc.value
    const image = form.image.files[0]

    const userData = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try{
      const image_url = await imageUpload(image)
      const appliedData = {
        phone,
        gender,
        subject,
        address,
        category,
        name,
        diploma,
        date, 
        ssc,
        hsc,
        userData,
        degree,
        image: image_url,
      }
      console.table(appliedData)

      //   Post request to server
      await mutateAsync(appliedData)
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
              <label htmlFor='phone' className='block text-gray-600'>
              Applicant phone number
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='phone'
                id='phone'
                type='number'
                placeholder='Applicant phone number'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='gender' className='block text-gray-600'>
              Applicant gender
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='gender'
                id='gender'
                type='text'
                placeholder='Applicant gender'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='name' className='block text-gray-600'>
              University name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='name'
                id='name'
                type='text'
                placeholder='University name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
              Scholarship category
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='category'
                id='category'
                type='text'
                placeholder='Scholarship category'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='subject' className='block text-gray-600'>
              Subject Category
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='subject'
                id='subject'
                type='text'
                placeholder='Subject Category'
                required
              />
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='address' className='block text-gray-600'>
              Applicant address
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='address'
                id='address'
                type='text'
                placeholder='Applicant address'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='degree' className='block text-gray-600'>
              Applicant Applying Degree
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='degree'
                id='degree'
                type='text'
                placeholder='Applicant Applying Degree'
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
                <label htmlFor='diploma' className='block text-gray-600'>
                Diploma
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='diploma'
                  id='diploma'
                  type='text'
                  placeholder='Diploma'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='current date' className='block text-gray-600'>
                Current Date
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='date'
                  id='date'
                  type='text'
                  placeholder='Current Date'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='ssc' className='block text-gray-600'>
                SSC Result
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='ssc'
                  id='ssc'
                  type='number'
                  placeholder='SSC Result'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='hsc' className='block text-gray-600'>
                HSC result
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='hsc'
                  id='hsc'
                  type='number'
                  placeholder='HSC result'
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
            ' Submit'
          )}
        </button>
      </form>
    </div>
  )
}

export default PaymentData