import React from "react";
import NavigationComponent from "../NavigationComponent";
import Footer from "../FooterComponent";

const PrivacyPolicyScreen = () => {

    return (
        <>
            <NavigationComponent activeLink={'/privacy'}/>
            <div className={'page-content container mt-5 p-4 border rounded'}>
                <h2 className={"text-success"}>Privacy policy</h2>
                <h6>Last updated: December 10, 2021</h6>
                <p>
                    This privacy policy describes our policies and procedures on the collection, use and disclosure of
                    your information when you use the service and tells you about your privacy rights and how the law
                    protects you.
                </p>
                <p>
                    We use your personal data to provide and improve the service. By using the service, you agree to the
                    collection and use of information in accordance with this privacy policy.
                </p>


                <h4>Types of data collected</h4>
                <h5>Personal data</h5>
                While using our service, we may ask you to provide us with certain personally identifiable information
                that can be used to contact or identify you. Personally identifiable information may include, but is not
                limited to:
                <ul>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Usage data</li>
                </ul>

                <h5>Usage data</h5>
                <p>
                    Usage data is collected automatically when using the service.
                    Usage data may include information such as your device's IP address, browser type, browser version,
                    the
                    pages of our service that you visit, the time and date of your visit, the time spent on those pages,
                    unique device identifiers and other diagnostic data.
                    When you access the service by or through a mobile device, we may collect certain information
                    automatically, including, but not limited to, the type of mobile device you use, your mobile device
                    unique id, the IP address of your mobile device, your mobile operating system, the type of mobile
                    internet browser you use, unique device identifiers and other diagnostic data.
                </p>


                <h5>Use of your personal data</h5>
                The company may use personal data for the following purposes:
                <ul>
                    <li>To provide and maintain our service, including to monitor the usage of our service and provide
                        more
                        specific information to users.
                    </li>
                    <li>To manage your account: to manage your registration as a user of the service. The data you
                        provide can
                        give you access to different functionalities of the service that are available to you as a
                        registered
                        user.
                    </li>
                    <li>To contact you: to contact you by email regarding updates related to the function of the
                        product,
                        including security updates, when necessary or reasonable.
                    </li>
                    <li>To share with other users: We may share your personal information with other users, as when you
                        create
                        a profile all information publicly shown there may be viewed by all users.
                    </li>
                    <li>For other purposes: we may use your information for other purposes, such as data analysis,
                        identifying
                        usage trends, and to evaluate and improve our service, products, and your experience.
                    </li>
                </ul>
                <h5>Retention of your personal data</h5>
                <p>
                    The company will retain your personal data only for as long as is necessary for the purposes set out
                    in this privacy policy. Account data will be maintained and kept protected for as long as the
                    account exists. Usage data is generally retained for a much shorter period, except when this data is
                    used to strengthen the security or to improve the functionality of our service.
                </p>

                <h5>Changes to this privacy policy</h5>
                <p>
                    We may update our privacy policy from time to time. We will notify you of any changes by posting the
                    new privacy policy on this page. We will let you know via email and/or a prominent notice on our
                    service, prior to the change
                    becoming effective.
                </p>

                <h5>Contact us</h5>
                If you have any questions about this privacy policy, you can contact us by email:
                <a href={''}>privacy@bookwrm.com</a>


            </div>
            <Footer/>
        </>
    )
};

export default PrivacyPolicyScreen;