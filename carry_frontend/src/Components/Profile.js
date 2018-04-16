import React, { Component } from 'react';


export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container bg-white profile">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card hovercard main-section">
                            <div className="cardheader">
                            </div>
                            <div className="avatar">
                                <img alt="" src="http://nicesnippets.com/demo/man01.png" />
                                <a href="#"><i className="fa fa-camera" style={{ position: 'absolute', bottom: 0, fontSize: 20, color: "#17a2b8" }} /></a>
                            </div>
                            <div className="info">
                                <div className="title">
                                    <h5>User Full Name</h5>
                                </div>
                                <hr />
                                <div className="text-center">
                                    <i class="fa fa-star" style={{ color: "#17a2b8" }}></i>
                                    <i class="fa fa-star" style={{ color: "#17a2b8" }}></i>
                                    <i class="fa fa-star" style={{ color: "#17a2b8" }}></i>
                                    <i class="fa fa-star" style={{ color: "#17a2b8" }}></i>
                                    <i class="fa fa-star" style={{ color: "#17a2b8" }}></i>
                                </div>
                                <hr />
                                <p><i class="fa fa-map-marker" aria-hidden="true"></i> Azcapotzalco, Ciudad de México, CDMX</p>
                                <span>Lorem ips consectetur adipisium ,eiusmod tempor incididuin reprehendeanim.</span>
                            </div>
                            <div className="row user-social-detail">
                                <div className="col-lg-12 col-sm-12 col-12">
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <form className="form-horizontal">
                            <fieldset>
                                <br />
                                {/* <div className="form-group">
                                    <label className="col-md-4 control-label" for="Upload photo">Upload photo</label>
                                    <input id="Upload photo" name="Upload photo" class="input-file" type="file" />
                                </div> */}
                                <div className="text-center">
                                    <h5>My Profile</h5>
                                </div>
                                <br />
                                <div className="form-group">
                                    {/* <label className="col-md-4 control-label" for="Name (Full name)">Name (Full name)</label> */}
                                    <div className="input-group">
                                        <div className="input-group-addon"> <i className="fa fa-user" /></div>
                                        <input id="Name (Full name)" name="Name (Full name)" type="text" placeholder="Name (Full name)" className="form-control input-md" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label className="col-md-4 control-label" for="Email Address">Email Address</label> */}
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-envelope-o"/></div>
                                        <input id="Email Address" name="Email Address" type="text" placeholder="Email Address" className="form-control input-md" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label className="col-md-4 control-label" for="Date Of Birth">Date Of Birth</label> */}
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-birthday-cake" /></div>
                                        <input id="Date Of Birth" name="Date Of Birth" type="text" placeholder="Date Of Birth" class="form-control input-md" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label className="col-md-4 control-label" for="Phone number ">Phone number </label> */}
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-phone" /></div>
                                        <input id="Phone number " name="Phone number " type="text" placeholder="Primary Phone number " class="form-control input-md" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-mobile fa-1x" style={{ fontSize: 20 }} /></div>
                                        <input id="Phone number " name="Secondary Phone number " type="text" placeholder=" Secondary Phone number " className="form-control input-md" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label className="col-md-4 control-label" for="Primary Occupation">Primary Occupation</label> */}
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-briefcase" /></div>
                                        <input id="Primary Occupation" name="Primary Occupation" type="text" placeholder="Primary Occupation" className="form-control input-md" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label className="col-md-4 control-label" for="Secondary Occupation (if any)">Secondary Occupation (if any)</label> */}
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-briefcase" /></div>
                                        <input id="Secondary Occupation (if any)" name="Secondary Occupation (if any)" type="text" placeholder="Secondary Occupation (if any)" className="form-control input-md" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    {/* <label className="col-md-4 control-label" for="Skills">Skills</label> */}
                                    <div className="input-group">
                                        <div className="input-group-addon"><i className="fa fa-graduation-cap" /></div>
                                        <input id="Skills" name="Skills" type="text" placeholder="Skills" className="form-control input-md" />
                                    </div>
                                </div>
                                <br />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}