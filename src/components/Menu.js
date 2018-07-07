import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    font-weight:300;
    font-size: 18px;
    color: #464646 ;
    line-height: 22px;
`

const WorkTime = styled.div`
    color: 2a2a2a;
    font-weight:300;
    font-size: 12px;
    line-height: 24px;

    span{
    	display:block;
    	font-weight:700;
    font-size: 21px;
    color: #464646 ;
    }

`
const Calls = styled.div`
    color: 2a2a2a;
    font-weight:300;
    font-size: 12px;
    line-height: 24px;

    span{
    	display:block;
    	font-weight:700;
    font-size: 21px;
    color: #464646 ;
    }

`
const CallButton = styled.button`
    width = 196px;
    height = 48px;
    background-color: #3fc7db ;
    border-radius: 30px;
    color:white;
    font-size: 14px;
    font-weight: 400;
    padding: 10px 15px; 
`

class TelNumber extends React.Component{
	render(){
		return(
            <span>{this.props.tel}</span>
			)
	}
}

class Adress extends React.Component{
	render(){
		return(
            <span>{this.props.addr}</span>
			)
	}
}

class Menu extends React.Component{
     render() {
     	return(
         <Row>
           <Col lg={3}>
              <Repair>Ремонт айфонов в сервисном центре и на выезд</Repair>
           </Col>
           <Col lg={3} lgOffset={1}>
               <WorkTime>Пн-пт с 10 до 20, сб-вс с 11 до 18
               <Adress addr="Ленинская д 33" />
               </WorkTime> 
           </Col>
           <Col lg={3}>
                <Calls>Звонки принимаются 24 часа 
                   <TelNumber tel="8 (846) 992 55 55"/>
                </Calls>
           </Col>
           <Col lg={2}>
                 <CallButton>Заказать звонок!</CallButton>
           </Col>
         </Row>
     		)
     }
}

export default Menu