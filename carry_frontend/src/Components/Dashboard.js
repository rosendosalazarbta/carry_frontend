import React, { Component } from 'react';
import Header from './Commons/Header';
import Footer from './Commons/Footer';
import '../Css/carry.css';
import general from '../General/General';
import history from '../history';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.navbarCollapse = this.navbarCollapse.bind(this);
        this.state = {
            classNavBar: '',
            isSignIn: false
        };
    }

    async componentDidMount() {
        this.navbarCollapse();
        window.removeEventListener("scroll", null);
        window.addEventListener('scroll', this.navbarCollapse);
        console.log('Api call 1');
        const data1 = await general.apiCall('https://api.github.com', 'GET', null, null);
        console.log(data1);
        console.log('Api call 2');
        const data2 = await general.apiCall('https://api.github.com', 'GET', null, null);
        console.log(data2);
    }

    navbarCollapse() {
        if (window.pageYOffset > 100) this.scrollTrigger(false);
        else this.scrollTrigger();
    };

    scrollTrigger(isRemove = true, tag) {
        this.setState({ classNavBar: isRemove ? '' : 'navbar-shrink' });
        // if (tag) history.push(`/home/#${tag}`)
    }

    singIn() {
        this.setState({ isSignIn: true });
    }

    signOut() {
        this.setState({ isSignIn: false });
    }

    render() {
        return (
            <div>
                { /*      Navigation      */}
                <nav className={"navbar navbar-expand-lg navbar-dark fixed-top " + this.state.classNavBar} id="mainNav" ref="mainNavbar">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">Carry</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#register" onClick={() => { this.scrollTrigger(true, 'register'); }}>Register</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#advantage" onClick={() => { this.scrollTrigger(true, 'advantage'); }}>Advantage</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#team" onClick={() => { this.scrollTrigger(true, 'team'); }}>Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#contact" onClick={() => { this.scrollTrigger(true, 'contact'); }}>Contact</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item text-uppercase" style={{ alignSelf: 'center', display: !this.state.isSignIn ? '' : 'none' }}>
                                    <button className="btn btn-dark font-weight-bold" data-toggle="modal" data-target="#logInModal">Log In</button>
                                </li>
                                <li className="dropdown nav-item" style={{ display: this.state.isSignIn ? '' : 'none' }}>
                                    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                                        <img className="px-navbar-image rounded-circle" style={{ width: 30, height: 30 }} src="http://www.stickpng.com/assets/images/585e4bf3cb11b227491c339a.png" alt="" />
                                        <span className="hidden-md" style={{ marginLeft: 5, fontSize: 12 }}>Rosendo <strong>Salazar</strong></span>
                                    </a>
                                    <ul className="dropdown-menu" style={{ backgroundColor: '#212529', fontSize: 15 }}>
                                        <li><a className="nav-link" href="#/">Profile</a></li>
                                        <li><a className="nav-link" href="#/">Validation</a></li>
                                        <li className="divider"></li>
                                        <li><a className="nav-link" href="#" onClick={() => { this.signOut(); }}>Log Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                { /*      Header      */}
                <Header />
                { /*      Register      */}
                <section id="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Register</h2>
                            </div>
                        </div>
                        <div className="row">
                            here put Component Steps...
                        </div>
                    </div>
                </section>
                { /*      Advantage      */}
                <section className="bg-light" id="advantage">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Advantage</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-map-marker fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Map Marker</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Responsive Design</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">Web Security</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex
            magni, dicta impedit.</p>
                            </div>
                        </div>
                    </div>
                </section>
                { /*      Team      */}
                <section id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle img-thumbnail" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16203ffdff2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16203ffdff2%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.396875%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" />
                                    <h4>César Chavez</h4>
                                    <p className="text-muted">Lead Developer</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle img-thumbnail" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16203ffdff2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16203ffdff2%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.396875%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" />
                                    <h4>Rosendo Salazar</h4>
                                    <p className="text-muted">Lead Developer</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <img className="mx-auto rounded-circle img-thumbnail" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16203ffdff2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16203ffdff2%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.396875%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="" />
                                    <h4>Jose M. Salazar</h4>
                                    <p className="text-muted">Lead Developer</p>
                                    <ul className="list-inline social-buttons">
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis,
            totam corporis ea, alias ut unde.</p>
                            </div>
                        </div>
                    </div>
                </section>
                { /*      Contact      */}
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="contactForm" name="sentMessage">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required data-validation-required-message="Please enter your name." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required data-validation-required-message="Please enter your email address." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                            <div className="form-group">
                                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required data-validation-required-message="Please enter your phone number." />
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Your Message *" required data-validation-required-message="Please enter a message."></textarea>
                                                <p className="help-block text-danger"></p>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase font-weight-bold" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                { /*      Footer      */}
                <Footer />
                { /*      Modal logIn      */}
                <div className="modal fade login-modal animated rubberBand" id="logInModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            {/* <div className="close-modal" data-dismiss="modal">
                                <div className="lr">
                                    <div className="rl">
                                    </div>
                                </div>
                            </div> */}
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Sign In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form-signin">
                                    <div className="text-center mb-4">
                                        <i className="fa fa-user-circle mb-4" style={{ fontSize: 90 }} />
                                        <h1 className="h3 mb-3 font-weight-normal">Carry</h1>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>

                                    <div className="checkbox mb-3">
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me
                                        </label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block font-weight-bold" type="submit" data-dismiss="modal" aria-label="Close" onClick={() => { this.singIn(); }}>Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}