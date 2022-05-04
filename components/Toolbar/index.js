import React from 'react';
import { styled } from '@stitches/react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { blackA, mauve, violet } from '@radix-ui/colors';

const StyledToolbar = styled(ToolbarPrimitive.Root, {
    display: 'flex',
    padding: '10px 30px',
    width: '100%',
    minWidth: 'max-content',
    borderRadius: 4,
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${blackA.blackA7}`
});

const StyledLink = styled(ToolbarPrimitive.Link, {
    all: 'unset',
    color: mauve.mauve12,
    backgroundColor: 'transparent'
}, { '&:hover': { color: violet.violet10, cursor: 'pointer' } });

const StyledButton = styled(ToolbarPrimitive.Button, {
    all: 'unset',
    color: 'white',
    backgroundColor: violet.violet9,
    padding: '10px 15px',
    borderRadius: 4
}, { '&:hover': { backgroundColor: violet.violet10, cursor: 'pointer' } });

export { StyledToolbar as default };
export const Toolbar = StyledToolbar;
export const ToolbarLink = StyledLink;
export const ToolbarButton = StyledButton;
