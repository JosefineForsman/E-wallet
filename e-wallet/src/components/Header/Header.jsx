import './Header.scss';

function Header(props){

    return(
        <header className='header'>{props.heading}</header>
    )
}
export default Header;