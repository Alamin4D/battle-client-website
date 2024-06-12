import PropTypes from 'prop-types'
import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
import { Link } from 'react-router-dom'
// import DetailsModal from '../../Modal/DetailsModal'
const ApplicationDataRow = ({ scholarship, handleDelete }) => {
    // for delete modal
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    // for update modal
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap'>{scholarship?.name}</p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarship?.category}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{scholarship?.degree}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${scholarship?.fees}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>${scholarship?.charge}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-blue-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Details</span>
                </button>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    // onClick={() => setIsOpen(true)}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-yellow-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Feedback</span>
                </button>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <button
                    onClick={() => setIsOpen(true)}
                    className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                >
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Cancel</span>
                </button>
                {/* Delete modal */}
                <DeleteModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    handleDelete={handleDelete}
                    id={scholarship?._id}
                />
            </td>
            <Link to='/add-review'>
                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <button
                        className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                    >
                        <span
                            aria-hidden='true'
                            className='absolute inset-0 bg-yellow-200 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Add Review</span>
                    </button>
                </td>
            </Link>
        </tr>
    )
}

ApplicationDataRow.propTypes = {
    scholarship: PropTypes.object,
    refetch: PropTypes.func,
}

export default ApplicationDataRow