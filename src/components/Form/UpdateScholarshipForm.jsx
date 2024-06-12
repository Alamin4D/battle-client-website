/* eslint-disable react/prop-types */
// import { categories } from '../Categories/CategoriesData'
// import { DateRange } from 'react-date-range'
const UpdateScholarshipForm = ({ handleSubmit, setScholarshipData, scholarshipData, }) => {
    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-10'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='name' className='block text-gray-600'>
                        University Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='name'
                            id='name'
                            type='text'
                            value={scholarshipData?.name}
                            onChange={e =>
                                setScholarshipData({ ...scholarshipData, name: e.target.value })
                            }
                            placeholder='University Name'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='category' className='block text-gray-600'>
                        Subject Category
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='category'
                            id='category'
                            type='text'
                            value={scholarshipData?.category}
                            onChange={e =>
                                setScholarshipData({ ...scholarshipData, category: e.target.value })
                            }
                            placeholder='Subject Category'
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                            <label htmlFor='degree' className='block text-gray-600'>
                            Applied Degree
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='degree'
                                id='degree'
                                value={scholarshipData?.degree}
                                onChange={e =>
                                    setScholarshipData({ ...scholarshipData, degree: e.target.value })
                                }
                                type='text'
                                placeholder='Applied Degree'
                                required
                            />
                        </div>

                    <div className='flex justify-between gap-2'>
                        

                        <div className='space-y-1 text-sm'>
                            <label htmlFor='fees' className='block text-gray-600'>
                            Application Fees
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='fees'
                                id='fees'
                                value={scholarshipData?.fees}
                                onChange={e =>
                                    setScholarshipData({ ...scholarshipData, fees: e.target.value })
                                }
                                type='number'
                                placeholder='Application Fees'
                                required
                            />
                        </div>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='fees' className='block text-gray-600'>
                            Service Charge
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='charge'
                                id='charge'
                                value={scholarshipData?.charge}
                                onChange={e =>
                                    setScholarshipData({ ...scholarshipData, charge: e.target.value })
                                }
                                type='number'
                                placeholder='Application Fees'
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

export default UpdateScholarshipForm