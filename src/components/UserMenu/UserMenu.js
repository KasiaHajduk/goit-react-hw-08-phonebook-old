import styles from '../../pages/Page.module.css';

function UserMenu({ onClick }) {
    
    return(<div><button className={styles.buttonStyle} type="button" onClick={onClick}>Logout</button></div>)
}

export default UserMenu;