
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactInfo = (props) => {
    return (
        <div className='mt-3'>
            <Row>
                <Col className='d-flex align-items-center justify-content-start'>
                    <FontAwesomeIcon className='custom-color custom-icon-size me-3' icon={props.icon}/>
                        <div className='text-start ms-3'>
                            <h5>{props.children}</h5>
                            <p className='my-1'>{props.item1}</p>
                            <p className='my-1'>{props.item2}</p>
                        </div>
                        </Col>
                        
                    </Row>
        </div>
    );
};

export default ContactInfo;