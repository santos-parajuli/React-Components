import { Container, Divider, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import "./Footer.css"
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-section">
                <Grid container direction="column">
                    <Grid container direction="row">
                        <Grid item xs={12} md={6} lg={4}>
                            <Grid container direction="row" style={{paddingLeft:"50px"}}>
                                <Grid item className="single-cta" >
                                    <RoomIcon className="icon" />
                                </Grid>
                                <Grid item>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>Narayangarh, Chitwan, Nepal</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <Grid container direction="row" style={{paddingLeft:"50px"}}>
                                <Grid item className="single-cta" >
                                    <EmailIcon className="icon" />
                                </Grid>
                                <Grid item>
                                    <div className="cta-text">
                                        <h4>Email</h4>
                                        <span>santosh.parajuli255@gmail.com</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} md={6} lg={4}>
                            <Grid container direction="row" style={{paddingLeft:"50px"}}>
                                <Grid item className="single-cta" >
                                    <ContactPhoneIcon className="icon" />
                                </Grid>
                                <Grid item>
                                    <div className="cta-text">
                                        <h4>Phone</h4>
                                        <span>9845082738 & 9817228946</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider/>
                    
                    <Container style={{marginTop:"40px"}}>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="/"><img src="" className="img-fluid" alt="logo"/></a>
                                </div>
                                <div className="footer-text">
                                    <p>Santosh Sakar Pustak Pasal is located in Belchowk,Narayangarh [Infront of <i>Little Flower School</i>]. Here we provide every stationery items for school.</p>
                                </div>
                                
                            </div>
                            
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">about</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/books">Buy Books</a></li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>

                            
                        </Grid>
                    </Grid>
                    </Container>
                    <Grid item className="copyright-area" style={{paddin:"0px"}}>
                        <p>All Rights Reserved. ©{new Date().getFullYear()} Santosh Sakar Pustak Pasal, Narayangarh. </p>
                    </Grid>


                </Grid>                
            </div>
        )
    }
}
