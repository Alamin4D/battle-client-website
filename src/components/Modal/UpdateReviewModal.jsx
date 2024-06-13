/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { Fragment, useState } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import toast from 'react-hot-toast'
import UpdateReviewForm from '../Form/UpdateReviewForm'

const UpdateReviewModal = ({ setIsEditModalOpen, isOpen, review, refetch }) => {
  const axiosSecure = useAxiosSecure()
  const [loading, setLoading] = useState(false)
  const [reviewData, setReviewData] = useState(review)

console.log(reviewData)
  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()
    const updatedReviewData = Object.assign({}, reviewData)
    delete updatedReviewData._id
    console.log(updatedReviewData)
    try {
      const { data } = await axiosSecure.put(
        `/review/update/${review?._id}`,
        updatedReviewData
      )
      console.log(data)
      refetch()
      setIsEditModalOpen(false)
      setLoading(false)
      toast.success('Review info updated')
    } catch (err) {
      console.log(err)
      setLoading(false)
      toast.error(err.message)
    }
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <DialogTitle
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Update Scholarship Info
                </DialogTitle>
                <div className='mt-2 w-full'>
                  {/* Update room form */}
                  <UpdateReviewForm
                    handleSubmit={handleSubmit}
                    reviewData={reviewData}
                    loading={loading}
                    setReviewData={setReviewData}
                  />
                </div>
                <hr />
                <div className='mt-2 '>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

UpdateReviewModal.propTypes = {
  setIsEditModalOpen: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default UpdateReviewModal