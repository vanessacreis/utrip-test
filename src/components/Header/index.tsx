import { Link } from "react-router-dom";
import { FaTv } from "react-icons/fa6";
import s from "./style.module.scss";

import profileImg from "../../assets/profile-icon.jpg";

const Header = () => {
	return (
		<header className={s.header}>
			<div className={s.container}>
				<Link to="/" className={s.logo}>
					<FaTv /> Tv.app
				</Link>

				<nav>
					<ul className={s.navList}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">My list</Link>
						</li>
						<li>
							<Link to="/">Favorites</Link>
						</li>
					</ul>
				</nav>

				<button type="button" className={s.profileButton}>
					<img src={profileImg} alt="profile-icon" />
				</button>
			</div>
		</header>
	);
};

export default Header;
