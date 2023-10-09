const Navbar = () => {
    const handleGithubButtonClick = () => {
        window.open('https://www.github.com/JonAndYu', '_blank');
    };

    return (
        <nav className='Navigation'>
            <h3 className="nav--logo_text">FretNaut</h3>
            <button className="nav--github" onClick={handleGithubButtonClick}>My Github</button>
        </nav>
    )
}

export default Navbar;