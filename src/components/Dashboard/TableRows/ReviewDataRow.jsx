import PropTypes from 'prop-types'
import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
import UpdateReviewModal from '../../Modal/UpdateReviewModal'
const ReviewDataRow = ({ review, handleDelete, refetch }) => {
    // for delete modal
    const [isOpen, setIsOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    // for update modal
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review?.scholarship_name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review?.name}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review?.comment}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{review?.review_date}</p>
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
                    <span className='relative'>Delete</span>
                </button>
                {/* Delete modal */}
                <DeleteModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    handleDelete={handleDelete}
                    id={review?._id}
                />
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button
          onClick={() => setIsEditModalOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update</span>
        </button>
        {/* Update Modal */}
        <UpdateReviewModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          review={review}
          refetch={refetch}
        />
      </td>
        </tr>
    )
}

ReviewDataRow.propTypes = {
    review: PropTypes.object,
    refetch: PropTypes.func,
}

export default ReviewDataRow