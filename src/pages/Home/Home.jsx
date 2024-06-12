import { Helmet } from "react-helmet-async"
import Carousel from "../../components/Carousel/Carousel"
import Programs from "../../components/Programs/Programs"
import Contract from "../../components/Contract/Contract"
import { useEffect, useState } from "react"
import axios from "axios"
import Featured from "../../components/Featured/Featured"
import Testimonial from "../../components/Testimonial/Testimonial"

const Home = () => {
    const [scholarships, setScholarships] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/scholarships`)
            setScholarships(data)
        }
        getData()
    }, [])
    return (
        <div>
            <Helmet>
                <title>Edusity | Home</title>
            </Helmet>
            <Carousel />
            <Programs />
            <div className="my-10">
                <h2 className="text-4xl font-semibold text-center mb-3">Our Latest Articles</h2>
                <p className="text-lg font-semibold text-center">What We Offfer</p>
            </div>
            <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        scholarships.slice(0, 6).map(item => <Featured
                            key={item._id}
                            item={item}
                        ></Featured>)
                    }
                </div>
            </div>
            <Testimonial />
            <Contract />
        </div>
    )
}

export default Home