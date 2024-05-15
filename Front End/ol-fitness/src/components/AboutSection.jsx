import classes from './AboutSection.module.css';

function AboutSection() {
    return (
        <>
            <section className={classes.section}>
                <div className={classes.divider}/>
                    <h1>About</h1>
                <div className={classes.divider}/>
            </section>
            <section className={classes.introduction}>
                <img src="./profile.jpg" />
                <p>
                    <h2>Hello, I am Lori McGuire</h2>
                    I launched On Location Fitness to use my passion and gifts to help people,
                    specifically women, achieve their fitness and strength goals to live healthier lives.
                    As an inspired partner on your fitness journey, I have the knowledge, experience and passion
                    to help you achieve your next level of fitness.
                    Because Accountability Can Change You 
                </p>
            </section>
            <section className={classes.bio}>
                <h2>Knowledgeable Training & Dedication</h2>
                <p>
                I know the benefits of physical fitness.  As an adult I pursued careers focused on helping people
                - women especially - achieve optimal health and wellness. As a wife and mother, raising two sons, 
                working full-time and striving to live a Christian life, I also know first-hand how life can get in the way 
                of even the most devoted fitness goals.  Inspired by the life-altering effects of fitness 
                and motivated by the desire to serve, I have pursued the wide range of ways to get fit, which has 
                built a foundation of knowledge about how to achieve fitness.
                </p>
                <h2>I Travel To You As We Find The Path To Your Fitness</h2>
                <p>
                Adapting new fitness habits is difficult and often times fails. WIth On Location Fitness the
                 goal is to change your view on fitness, so that it becomes apart of who you are and your lifestyle.
                </p>
            </section>
        </>
    );
}

export default AboutSection;