import Link from "next/link";

const Header = () => {
    return (
        <nav className="flex justify-around align-center my-10 mx-40 border border-neutral border-2 rounded-3xl p-3">
            <div className="w-1/4">
                <Link href="/" className="text-accent">U</Link>
            </div>
            <div className="flex justify-around w-1/4">
                <Link href="#home" className="text-accent">Home</Link>
                <Link href="#about" className="text-accent">About</Link>
                <Link href="#contact" className="text-accent">Contact me</Link>
            </div>
        </nav>
    );
};

export default Header;
