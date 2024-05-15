import classes from './DetailsPage.module.css';
import ImageLink from './ImageLink';

function DetailsPage() {
    return (
        <>
            <div className={classes.fillGrid}>
                <ImageLink imageUrl="./Services.jpg" title="Services" linkUrl="/services"/>
                <ImageLink imageUrl="./contact.png" title="Contact" linkUrl="/contact-me"/>
                <ImageLink imageUrl="./faq.png" title="FAQ" linkUrl="/faq"/>
                <ImageLink imageUrl="./Calendar.jpg" title="Blog"/>
            </div>
        </>
    );
}

export default DetailsPage;