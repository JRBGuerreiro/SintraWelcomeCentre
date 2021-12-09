import React, { useState } from 'react';
import Rodal from 'rodal';
import styled from 'styled-components';
// include styles
import 'rodal/lib/rodal.css';
import { policy } from '../utility/text/policy';

const RodalModalInner = styled.div`
`

const Modal = ({language, onClose, visible}) =>  {

    const customStyles = {
        overflowY: "scroll",
        whiteSpace: 'pre-line',
        fontFamily: 'Raleway, sans-serif',
        width: '50%',
        minHeight: '400px'
    }

    return (
        <div>
            <Rodal customStyles={customStyles} visible={visible} onClose={onClose}>
                <RodalModalInner>{policy[language].text}</RodalModalInner>
            </Rodal>
        </div>
        );
}

export default Modal;