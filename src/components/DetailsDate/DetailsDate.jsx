import PropTypes from 'prop-types'
import Button from '../Shared/Button/Button'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { differenceInCalendarDays } from 'date-fns'
import BookingModal from '../Modal/BookingModal'
import useAuth from '../../hooks/useAuth'
const DetailsDate = ({ scholarship, refetch }) => {
    const { user } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const [state, setState] = useState([
        {
            startDate: new Date(scholarship.from),
            endDate: new Date(scholarship.to),
            key: 'selection',
        },
    ])

    const closeModal = () => {
        setIsOpen(false)
    }

    console.log(scholarship)

    // total days * price
    const totalPrice =
        parseInt(differenceInCalendarDays(new Date(scholarship.to), new Date(scholarship.from))) *
        scholarship?.price
    console.log(totalPrice)
    return (
        <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
            <div className='flex items-center gap-1 p-4'>
                <div className='text-2xl font-semibold'>${scholarship?.price}</div>
                <div className='font-light text-neutral-600'></div>
            </div>
            <hr />
            <div className='flex justify-center'>
                {/* Calender */}
                <DateRange
                    showDateDisplay={false}
                    rangeColors={['#F6536D']}
                    onChange={item => {
                        console.log(item)
                        setState([
                            {
                                startDate: new Date(scholarship.from),
                                endDate: new Date(scholarship.to),
                                key: 'selection',
                            },
                        ])
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                />
            </div>
            <hr />
            <div className='p-4'>
                <Button
                    disabled={scholarship?.booked}
                    onClick={() => setIsOpen(true)}
                    label={scholarship?.booked ? 'Booked' : 'Apply'}
                />
            </div>

            {/* Modal */}
            <BookingModal
                isOpen={isOpen}
                refetch={refetch}
                closeModal={closeModal}
                bookingInfo={{
                    ...scholarship,
                    price: totalPrice,
                    user: {
                        name: user?.displayName,
                        email: user?.email,
                        image: user?.photoURL,
                    },
                }}
            />
            <hr />
            <div className='p-4 flex items-center justify-between font-semibold text-lg'>
                <div>Total</div>
                <div>${totalPrice}</div>
            </div>
        </div>
    )
}

DetailsDate.propTypes = {
    scholarship: PropTypes.object,
    refetch: PropTypes.func,
}

export default DetailsDate