// import { Helmet } from 'react-helmet-async'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import useAxiosCommon from '../../hooks/useAxiosCommon'
import DetailsDate from '../../components/DetailsDate/DetailsDate';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import { Navigation } from 'swiper/modules';

const DetailsPage = () => {
    const { id } = useParams()
    const axiosCommon = useAxiosCommon()

    const { data: scholarship = {}, isLoading } = useQuery({
        queryKey: ['scholarship', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/scholarship/${id}`)
            return data
        },
    })

    if (isLoading) return <LoadingSpinner />
    console.log(scholarship)
    return (
        <div>
            <div className='max-w-screen-lg mx-auto px-6'>
                {/* Header */}
                <div className='flex flex-col gap-6'>
                    <div>
                        <div className='text-2xl font-bold mt-4'>{scholarship?.name}</div>
                        <div className='font-light text-neutral-500 mt-2'>{scholarship?.location}</div>
                        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                            <img
                                className='object-cover w-full'
                                src={scholarship?.image}
                                alt='header image'
                            />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                    {/* Room Info */}
                    <div className='col-span-4 flex flex-col gap-8'>
                        <div className='flex flex-col gap-2'>
                            <div
                                className='text-xl font-semibold flex flex-row items-centergap-2'> <div>Moderator by {scholarship?.moderator?.name}</div>

                                <img
                                    className='rounded-full'
                                    height='30'
                                    width='30'
                                    alt='Avatar'
                                    src={scholarship?.moderator?.image} />
                            </div>
                            <div
                                className='flex flex-row items-center gap-4 font-light text-neutral-500'>
                                <div>{scholarship?.category}</div>
                                <div>{scholarship?.Subject_Name}</div>
                                <div>{scholarship?.fees}</div>
                            </div>
                        </div>

                        <hr />
                        <div
                            className='text-lg font-light text-neutral-500'>
                            {scholarship?.description}
                        </div>
                        <hr />
                        {/* <div className='my-24'>
                            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                <SwiperSlide>Slide 1</SwiperSlide>
                                <SwiperSlide>Slide 2</SwiperSlide>
                            </Swiper>
                        </div> */}
                    </div>
                    <div className='md:col-span-3 order-first md:order-last mb-10'>
                        {/* RoomReservation */}
                        <DetailsDate scholarship={scholarship} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;