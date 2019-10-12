import React from 'react';
import styled from 'styled-components';

import MenuItem from '../elements/MenuItem';

const FlexHeader = styled.header`
    
    height: 4rem;

    display: flex;

    .Logo {
        width: 6rem;
        height: 100%;
        object-fit: contain;
        object-position: 0 50%;
    }

    nav {
        flex-grow:1;
    }

    ul {
        height: 100%;
        display: flex;
        /* jcsb */
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }
    
`

const HeaderMainView = () => (
    <FlexHeader>
        <img src="http://fakeimg.pl/300x100" alt="Logotipo" className="Logo"/>
        
        <nav>
            <ul>
                <MenuItem>
                    <a href="#">
                        Menu 1
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">
                        Menu 2
                    </a>
                </MenuItem>
                <MenuItem>
                    <a href="#">
                        Menu 3
                    </a>
                </MenuItem>
            </ul>
        </nav>
    </FlexHeader>
)

export default HeaderMainView;