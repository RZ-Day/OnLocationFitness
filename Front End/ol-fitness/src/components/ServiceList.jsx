import ServiceTab from './ServiceTab';
import classes from './ServiceList.module.css';

function ServiceList() {
    //here, ideally, you'd pull services from the database to display
    return (
        <>
            <ul className={classes.serviceList}>
                <ServiceTab
                    header="On Location Personal Training"
                    description="Lorem ipsum dolor sit amet, consectetur ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="-    price varies"
                    time="1hr    -"
                    key={1}
                    serviceId={1}
                    />
                <ServiceTab
                    header="Online Training"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="-    price varies"
                    time="1hr    -"
                    key={2}
                    serviceId={2}
                    />
                <ServiceTab
                    header="Group Fitness"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    price="-    price varies"
                    time="1hr    -"
                    key={3}
                    serviceId={3}
                    />
            </ul>
        </>
    );
}

export default ServiceList;