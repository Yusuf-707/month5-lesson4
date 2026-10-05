import Logo from "../img/logoSite.png"
import Search from "../img/Search.png"

const Header = () => {
    return (
        <header className="container header_cont">
            <div><img src={Logo} alt="logo" /></div>
            <nav>
                <li>Продукция</li>
                <li>Материалы</li>
                <li>О нас</li>
                <li>Контакты</li>
                <img src={Search} alt="search" />
            </nav>
        </header>
    )
}

export default Header