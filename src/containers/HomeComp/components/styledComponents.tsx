import styled from 'styled-components';
import Box from '@/components/Box';

export const DocumentationButton = styled(Box)(() => `
    transition: transform ease-in 150ms;
    transform-origin: 50% 50%;
    font-family: inherit;

    &:hover {
        transform: scale(1.05);
    }   
`)

export const InstallGuide = styled(Box)((props) => `
    background: ${props.theme.colors['black-100']};
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    color: white;
    font-family: 'Fira Code', monospace;
`);

export const InputBox = styled(Box)((props) => `
    &::placeholder {
        color: ${props.theme.colors['purple-15']};
    }
`);

export const SubmitButton = styled(Box)((props) => `
    &:disabled {
        background: ${props.theme.colors['purple-15']}};
    }
`);

export const EthField = styled(Box)(() => `
    position: fixed;
`);