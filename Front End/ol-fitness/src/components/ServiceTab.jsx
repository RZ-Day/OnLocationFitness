import classes from './ServiceTab.module.css';
import PropTypes from 'prop-types';

function ServiceTab({ header, description, price, time }) {
    return (
        <>
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
        </>
    );
}

ServiceTab.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    time: PropTypes.string
}

export default ServiceTab;