import './Header.sass'

const Header = () => {
    return (
        <header className={"header"}>
            <h1 className={"header__item"}>Project_countries</h1>
            <button className={"header__item"}>Countries</button>
            {/*onClick event will appear later*/}
        </header>
    )
}

export default Header