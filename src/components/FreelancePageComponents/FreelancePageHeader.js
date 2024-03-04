import Image from "next/image"
import preet_suthar_image from '../../utils/images/preetsuthar.png'
import Link from "next/link"

export const FreelancePageHead = () => {
    return (
        <section className="freelance-header">
            <div className="section-1">
                <div className="section-1-image">
                    <Image src={preet_suthar_image} width={220} height={220} loading="lazy" alt="Preet Suthar" quality={100} />
                </div>
                <div className="section-1-buttons">
                    <Link href="mailto:preetsutharxd@gmail.com" target="_blank" className="primary-btn-main">Email me</Link>
                    <Link href="/preet_suthar_resume.pdf" target="_blank" className="primary-btn-secondary">Resume</Link>
                </div>

            </div>
            <div className="section-2">
                <div className="section-2-about">
                    <p>I specialize in creating websites that look amazing on all devices and provide a great user experience. I stay up-to-date on the latest web technologies to ensure your website is not only visually appealing but also easy to use.</p>
                    <p>I have a keen eye for design and pay attention to detail to bring your vision to life. From sleek and modern designs to interactive elements, I can help your website stand out.</p>
                    <p>Whether you need a website makeover or a brand new site, I am committed to delivering great results that will help you reach your online goals. Let's work together to make your brand shine online. Contact me today to see how I can help boost your online presence through beautiful web development. </p>
                </div>
               
            </div>
        </section>
    )
}