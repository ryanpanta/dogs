import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Adicionar from "../../Assets/adicionar.svg?react";
import Feed from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
function UserHeaderNav() {
    const { userLogout } = React.useContext(UserContext);
    const [mobile, setMobile] = React.useState(null);
    const navigate = useNavigate();

    function handleLogout() {
        userLogout();
        navigate('/login')
    }
    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <Feed />
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <Estatisticas />
                {mobile && 'Estatísticas'}
            </NavLink>
            <NavLink to="/conta/postar">
                <Adicionar />
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={handleLogout}>
                <Sair />
                {mobile && 'Sair'}
            </button>
        </nav>
    );
}

export default UserHeaderNav;