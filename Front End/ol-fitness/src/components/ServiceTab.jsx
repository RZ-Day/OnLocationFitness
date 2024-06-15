import classes from './ServiceTab.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ServiceTab({ header, description, price, time, serviceId }) {
    const path = "./book/" + serviceId;

    return (
        <Link to={path} className={classes.link}>
            <div className={classes.serviceCard}>
                
                <div className={classes.cardHeader}>
                    <p>
                        {header}
                    </p>
                </div>

                <div className={classes.cardFooter}>
                    <li className={classes.time}>
                        {time}
                    </li>
                    <li className={classes.price}>
                        {price}
                    </li>
                </div>

                <p className={classes.description}>
                    {description}
                </p>
                
            </div>
        </Link>
    );
}

ServiceTab.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    time: PropTypes.string,
    serviceId: PropTypes.number
}

export default ServiceTab;