import './contact.css';
import Header from '../header';
import Footer from '../footer';

const Contact = () => {
    return (
        <>
            <Header />

            <div className="contact-page">
                <section className="contact-hero">
                    <h1>Get in Touch</h1>
                    <p>Have a question or want to collaborate? Send us a message and we’ll get back to you!</p>
                </section>

                <section className="contact-container">
                    {/* Contact Form */}
                    <div className="contact-form-section">
                        <h2>Send a Message</h2>
                        <form className="contact-form">
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <input type="text" placeholder="Subject" required />
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info-section">
                        <h2>Contact Information</h2>
                        <div className="contact-info">
                            <div>
                                <h3>Email</h3>
                                <p>support@jobflow.com</p>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 9876543210</p>
                            </div>
                            <div>
                                <h3>Address</h3>
                                <p>123, Career Street, Nagpur, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
