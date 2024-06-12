/* eslint-disable react/prop-types */
// import { categories } from '../Categories/CategoriesData'
// import { DateRange } from 'react-date-range'
const UpdateReviewForm = ({ handleSubmit, setReviewData, reviewData, }) => {
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-10'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='scholarship name' className='block text-gray-600'>
                            University Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='scholarship_name'
                            id='scholarship_name'
                            type='text'
                            value={reviewData?.scholarship_name}
                            onChange={e =>
                                setReviewData({ ...reviewData, scholarship_name: e.target.value })
                            }
                            placeholder='University Name'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='name' className='block text-gray-600'>
                            scholarship_name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='name'
                            id='name'
                            type='text'
                            value={reviewData?.name}
                            onChange={e =>
                                setReviewData({ ...reviewData, name: e.target.value })
                            }
                            placeholder='Subject Category'
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='comment' className='block text-gray-600'>
                            Review Comment
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='comment'
                            id='comment'
                            value={reviewData?.comment}
                            onChange={e =>
                                setReviewData({ ...reviewData, comment: e.target.value })
                            }
                            type='text'
                            placeholder='Review Comment'
                            required
                        />
                    </div>

                    <div className='flex justify-between gap-2'>


                        <div className='space-y-1 text-sm'>
                            <label htmlFor='fees' className='block text-gray-600'>
                                Review Date
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='review_date'
                                id='review_date'
                                value={reviewData?.review_date}
                            onChange={e =>
                                setReviewData({ ...reviewData, review_date: e.target.value })
                            }
                                type='text'
                                placeholder='Application Fees'
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='rating point' className='block text-gray-600'>
                            Rating Point
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='rating_point'
                                id='rating_point'
                                value={reviewData?.rating_point}
                            onChange={e =>
                                setReviewData({ ...reviewData, rating_point: e.target.value })
                            }
                                type='number'
                                placeholder='Rating Point'
                                required
                            />
                        </div>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateReviewForm