import { FreelancePageHead } from "@/src/components/FreelancePageComponents/FreelancePageHeader"
import { FreelancePageTestimonials } from "@/src/components/FreelancePageComponents/FreelancePageTestimonials"
import Footer from "@/src/components/footer"
import Navbar from "@/src/components/navbar"

const freelance = () => {
    return (
        <>
        <main>
                <Navbar/>
                <FreelancePageHead/>
                <FreelancePageTestimonials/>
                <Footer/>
        </main>
        </>
    )
}

export default freelance