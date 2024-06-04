/* eslint-disable react/no-unescaped-entities */
import img from "../../../assets/restuarent/logo.png"

const Footer = () => {
    return (
        <div>
            <footer  className="footer p-10 bg-base-200 text-base-content">
                <div>
                   <img className="w-28" src={img} alt="" />
                    <p>Arifin's Vabna Kitchen.<br />Providing reliable tech since 1992</p>
                </div>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Arifin's Vabna Kitchen</p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;