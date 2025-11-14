import './footer.css';
import jobImg from '../../assets/jobflow2.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <img src={jobImg}/>
                    <p>Connecting professionals with opportunities worldwide.</p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/jobs">Jobs</a></li>
                        <li><a href="/companies">Companies</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section resources">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/help">Help Center</a></li>
                        <li><a href="/terms">Terms</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><img src="https://png.pngtree.com/element_our/sm/20180520/sm_5b01251200ff5.jpg" alt="Facebook" /></a>
                        <a href="#"><img src="https://png.pngtree.com/png-clipart/20180520/ourmid/pngtree-twitter-white-icon-png-image_3570409.png" alt="Twitter" /></a>
                        <a href="#"><img src="https://i.pinimg.com/474x/4c/87/d1/4c87d1c257a7b9cc3f28f4c98c5a7686.jpg" alt="LinkedIn" /></a>
                        <a href="#"><img src="https://png.pngtree.com/element_our/sm/20180509/sm_5af2d4cabfdf2.jpg" alt="Instagram" /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 JobFlow. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
 