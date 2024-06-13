import { Helmet } from 'react-helmet-async'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { useMutation, useQuery } from '@tanstack/react-query'
import useAuth from '../../../hooks/useAuth'
import LoadingSpinner from '../../../components/Shared/LoadingSpinner'
import toast from 'react-hot-toast'
import ManageDataRow from '../../../components/Dashboard/TableRows/ManageDataRow'

const ManageScholarships = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    //   Fetch Applied Data
    const {
        data: scholarships = [], isLoading, refetch } = useQuery({
            queryKey: ['scholarships', user?.email],
            queryFn: async () => {
                const { data } = await axiosSecure.get(`/scholarships`)

                return data
            },
        })

    //   delete
    const { mutateAsync } = useMutation({
        mutationFn: async id => {
            const { data } = await axiosSecure.delete(`/scholarship/${id}`)
            return data
        },
        onSuccess: data => {
            console.log(data)
            refetch()
            toast.success('Successfully deleted.')
        },
    })

    //  Handle Delete
    const handleDelete = async id => {
        console.log(id)
        try {
            await mutateAsync(id)
        } catch (err) {
            console.log(err)
        }
    }
    if (isLoading) return <LoadingSpinner />
    return (
        <div className='container mx-auto px-4 sm:px-8'>
            <Helmet>
                <title>All Applied Scholarship</title>
            </Helmet>
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-normal'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        University Name
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Category
                                    </th>
                                    
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Fees
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Details
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                    >
                                        Cancel
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Room row data */}
                                {scholarships.map(scholarship => (
                                    <ManageDataRow
                                        key={scholarship._id}
                                        scholarship={scholarship}
                                        handleDelete={handleDelete}
                                        refetch={refetch}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageScholarships;