import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

import { GIT_COMMIT } from '../../common/constants';
import { themeDimensions } from '../../themes/commons';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const FooterWrapper = styled.div`
    align-items: center;
    display: flex;
    height: ${themeDimensions.footerHeight};
    justify-content: center;
    padding: 0 ${themeDimensions.horizontalPadding} ${themeDimensions.verticalPadding};
`;

export const Footer: React.FC<Props> = props => {
    return (
        <FooterWrapper title={GIT_COMMIT} {...props}>
            <a href="https://discord.gg/AxMsrmu" target="_blank" rel="noopener noreferrer">
                Join our Discord
            </a>
        </FooterWrapper>
    );
};
