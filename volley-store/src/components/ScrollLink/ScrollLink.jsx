import { useNavigate } from "react-router-dom";

function ScrollLink({
    sectionId,
    children,
    className = ""
}) {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate(`/#${sectionId}`);

    };

    return (

        <button
            type="button"
            className={className}
            onClick={handleClick}
        >
            {children}
        </button>

    );

}

export default ScrollLink;