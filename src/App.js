import React, { Component } from 'react';
import {Caption, Slide,Slider,Grid, Pagination, classes, Paper, SideNav, Button, Icon, SideNavItem, Col, Card, CardTitle} from "react-materialize";



class App extends Component {
  render () {
    return (
      <div>

        <div className="row">
              
              <style>
                {`
                        #root > div > div {
                          z-index: 99999 !important;
                        }
                      `}
              </style>
              <SideNav
                id="SideNav-32"
                options={{
                  draggable: true
                }}
                trigger={<Button node="button">SIDE NAV DEMO</Button>}
              >
                <SideNavItem
                  user={{
                    background: 'https://placeimg.com/640/480/tech',
                    email: 'roisro35@gmail.com',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyS8L1GEFxfdJGhjrB-TGM6eqBj4-iymx7MQ&usqp=CAU',
                    name: 'Rois'
                  }}
                  userView
                />
                <SideNavItem
      href="#!icon"
      icon={<Icon>perm_identity</Icon>}
    >
      Profil Saya
    </SideNavItem>
    <SideNavItem
      href="#!icon"
      icon={<Icon>phone_callback</Icon>}
    >
      Hubungi Kami
    </SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>
      Product
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
      Kesehatan
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
      Komputer & Aksesoris
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
      Gaming
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
      Kamera
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
      Olahraga
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
      Fashion Wanita
    </SideNavItem>
    <SideNavItem
      href="#!third"
      waves
    >
      Fashion Pria
    </SideNavItem>
              </SideNav>
        </div>


        <div className="row">
              <Slider
                fullscreen={false}
                options={{
                  duration: 500,
                  height: 400,
                  indicators: true,
                  interval: 6000
                }}
              >
                <Slide image={<img alt="" src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg"/>}>
                  <Caption placement="center">
                    <h3>
                      Pantai 
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                      Mari berwisata ke pantai
                    </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
                  <Caption placement="left">
                    <h3>
                      Left Aligned Caption
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
                  <Caption placement="right">
                    <h3>
                      Right Aligned Caption
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
                <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
                  <Caption placement="center">
                    <h3>
                      This is our big Tagline!
                    </h3>
                    <h5 className="light grey-text text-lighten-3">
                      Here's our small slogan.
                    </h5>
                  </Caption>
                </Slide>
              </Slider>
        </div>
        <br />
        <h7>Hot List</h7>
        <div className="row">
        <Col m="3">
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">
                  Audio Technica mulai dari
                </CardTitle>
              }
            >
              Headset
            </Card>
          </Col>

          <Col m="3">
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">
                  Handphone
                </CardTitle>
              }
            >
              <p align="center">Handphone Samsung-Mulai Dari<a style={{backgroundColor:"red"}}> Rp.20.000</a></p> 
            </Card>
          </Col>
          
          <Col m="3">
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">
                  Squishy
                </CardTitle>
              }
            >
              Squishy
            </Card>
          </Col>

          <Col m="3">
            <Card
              className="small"
              header={
                <CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">
                  The Avanger
                </CardTitle>
              }
            >
              Pahlawan Marvel
            </Card>
          </Col>
        </div>
        
        <div className="row">
          <Pagination
            activePage={2}
            items={10}
            leftBtn={<Icon>chevron_left</Icon>}
            rightBtn={<Icon>chevron_right</Icon>}
            maxButtons={8}
          />
        </div>
      
      </div>
    )
  }
}

export default App;
