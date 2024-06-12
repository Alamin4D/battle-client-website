import PropTypes from 'prop-types'
// import { format } from 'date-fns'
import { useState } from 'react'
import DeleteModal from '../../Modal/DeleteModal'
import UpdateScholarshipModal from '../../Modal/UpdateScholarshipModal'
const ManageDataRow = ({ scholarship, handleDelete, refetch }) => {
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
        <p className='text-gray-900 whitespace-no-wrap'>{scholarship?.name}</p>
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
          onClick={() => setIsOpen(true)}
          className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Details</span>
        </button>
        {/* Delete modal */}
        {/* <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          id={scholarship?._id}
        /> */}
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
          id={scholarship?._id}
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
        <UpdateScholarshipModal
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          scholarship={scholarship}
          refetch={refetch}
        />
      </td>
    </tr>
  )
}

ManageDataRow.propTypes = {
  scholarship: PropTypes.object,
  refetch: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default ManageDataRow