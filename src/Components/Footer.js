import '../CSS/output.css';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    const author = "Abigiya Getachew"; // Replace with your company name
    return ( 
        <div>
            <div className="description px-6 py-4 text-lg" style={{
                background:"#16423C",
                color:"#E9EFEC"
            }}>
                <p>{author} &copy; {currentYear}. All rights reserved.</p>
            </div>
        </div>
     );
}
 
export default Footer;