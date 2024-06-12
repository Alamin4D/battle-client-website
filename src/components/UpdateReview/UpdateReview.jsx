// import { useNavigate } from "react-router-dom"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { Helmet } from "react-helmet-async"
import { TbFidgetSpinner } from "react-icons/tb"

const UpdateReview = () => {
  // const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
    const [loading, setLoading] = useState(false)
  const { user } = useAuth()
    

  const { mutateAsync } = useMutation({
    mutationFn: async id => {
        const { data } = await axiosSecure.patch(`/all-review/${id}`)
        return data
    },
    onSuccess: data => {
        console.log(data)
        // refetch()
        toast.success('Successfully deleted.')
    },
})

const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const scholarship_name = form.scholarship_name.value
    const name = form.name.value
    const review_date = form.review_date.value
    const rating_point = form.rating_point.value
    const comment = form.comment.value

    const userData = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }

    try{
      const reviewData = {
        scholarship_name,
        name,
        review_date,
        rating_point,
        userData,
        comment,
      }
      console.table(reviewData)

      //   Post request to server
      await mutateAsync(reviewData)
    } catch (err){
      console.log(err)
      toast.error(err.message)
      setLoading(false)
    }
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
              <label htmlFor='scholarship name' className='block text-gray-600'>
              Scholarship name
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                name='scholarship_name'
                id='scholarship_name'
                type='text'
                placeholder='Scholarship name'
                required
              />
            </div>
            <div className='space-y-1 text-sm'>
              <label htmlFor='comment' className='block text-gray-600'>
              Review comment
              </label>

              <textarea
                id='comment'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-red-800 focus:outline-red-800 '
                name='comment'
              ></textarea>
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
            <div className='flex justify-between gap-2'>

              <div className='space-y-1 text-sm'>
                <label htmlFor='rating point' className='block text-gray-600'>
                Rating point
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='rating_point'
                  id='rating_point'
                  type='number'
                  placeholder='Rating point'
                  required
                />
              </div>
              <div className='space-y-1 text-sm'>
                <label htmlFor='review date' className='block text-gray-600'>
                Review date
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-red-800 focus:outline-red-800 rounded-md '
                  name='review_date'
                  id='review_date'
                  type='text'
                  placeholder='Review date'
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
            'Add Review'
          )}
        </button>
      </form>
    </div>
  )
}

export default UpdateReview