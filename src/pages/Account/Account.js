import "./Account.scss"
import { ArrowDropDown, PinDropSharp } from "@material-ui/icons"
//import netflix_logo from "../../images/Netflix_2015_logo.svg.png"
//import profile_image from "../../images/pexels-photo-6899260.webp"
//import image_member_since from "../../images/membersince.svg"
//import image_card from "../../images/mastercard-v2.svg"
import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth_service";
import { useNavigate } from "react-router-dom";

function Account(props) {

    // const [currentUsers, setCurrentUsers] = useState(undefined);
    // useEffect(() => {
    //     const user = AuthService.getCurrentUser();
    //     if (user) {
    //         setCurrentUsers(user);
    //     }
    // }, []);
    // const navigate = useNavigate();
    // const handleNoUsers = () => {
    //     navigate("/login");
    //     window.location.reload();
    // }

    return (
        <div className="account-page">

            <div>
                <div className="container-footer">
                    {/* <img className="netflix-logo" src={netflix_logo} /> */}
                    <div className="profile">
                        {/* <img className="profile-image" src={profile_image} */}
                        {/* alt="" /> */}
                        <div className="profile-dropdown">
                            <ArrowDropDown className="icon" />
                            <div className="options">
                                <span>Settings</span>
                                <span>Log out</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account-info">
                    <h2 className="account-title">Account</h2>
                    {/* <img className="member-since-image" src={image_member_since} /> */}
                    <small className="member-since">Member Since October 2019</small>
                </div>
                <div className="membership-billing-content">
                    <div className="left-section">
                        <div className="membership-billing-info">
                            <p className="membership-billing-title">Membership & Billing</p>
                        </div>
                        <div className="cancellation">
                            <button className="cancel-membership"><small>Cancel Membership</small></button>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="email-info">
                            <p className="user-email"><b>{props.props.email}</b></p>
                            <a className="change-account-email" href="#">Change account email</a>
                        </div>
                        <div className="password-info">
                            <p className="user-password">Password: ********</p>
                            <a className="change-account-password" href="#">Change account password</a>
                        </div>
                        <div className="card-info">
                            <div className="user-card-info">
                                {/* <img className="user-card" src={image_card} /> */}
                                <p className="user-card-number"><b>**** **** **** 1018</b></p>
                            </div>
                            <div className="payment-info">
                                <a className="manage-payment-info" href="#">Manage payment info</a>
                            </div>
                        </div>
                        <div className="billing-expire-date-details">
                            <p className="billing-date">Your next billing date is April 10, 2022.</p>
                            <a className="billing-details">Billing details</a>
                        </div>
                    </div>
                </div>
                <div className="plan-info">
                    <div className="plan-details">
                        <p className="plan-details-header">Plan Details</p>
                    </div>
                    <div className="right-content">
                        <div className="plan-type">
                            <p className="plan-type-header"><b>Premium</b></p>
                        </div>
                        <div className="change-plan">
                            <a className="change-plan-link">Change plan</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Account;