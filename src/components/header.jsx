import { Link } from 'react-router-dom'


export default function Header(){
    return(
        <header className="w-full h-25 bg-secondary flex items-center">
            <img src="logo.png" alt="logo" className="w-25 h-25" />
            <h1 className="text-7xl">COMPUTECH</h1>
            <div className="w-full h-full bg-secondary flex items-center justify-end space-x-8 pr-8">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </header>
    )

}