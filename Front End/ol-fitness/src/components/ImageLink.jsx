import classes from './ImageLink.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ImageLink({ imageUrl, title, linkUrl }) {
    return (
        <>
            <Link className={classes.mainCard} to={linkUrl}>
                <div className={classes.topBanner}>{title}</div>
                <img className={classes.image} src={imageUrl} />
                <div className={classes.bottomBanner}></div>
            </Link>
        </>
    );
}

ImageLink.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    linkUrl: PropTypes.string
}

export default ImageLink;