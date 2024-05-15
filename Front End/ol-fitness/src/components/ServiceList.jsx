import ServiceTab from './ServiceTab';
import classes from './ServiceList.module.css';

function ServiceList() {
    return (
        <>
            <ul className={classes.serviceList}>
                <ServiceTab
                    header="Service Title"
                    description="Lorem ipsum dolor sit amet, consectetur ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="-    price varies"
                    time="1hr    -"
                    />
                <ServiceTab
                    header="Service Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="-    price varies"
                    time="1hr    -"
                    />
                <ServiceTab
                    header="Service Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="-    price varies"
                    time="1hr    -"
                    />
            </ul>
        </>
    );
}

export default ServiceList;