import { blackA, mauve, red, violet, whiteA } from '@radix-ui/colors';
import { styled } from '@stitches/react';

export const Text = styled('div', {
    color: blackA.blackA12,
    fontSize: 16,
    lineHeight: 1.5,
    textAlign: 'center',

    variants: {
        heading: {
            true: {
                fontSize: 36,
                fontWeight: 500
            },
            1: {
                fontSize: 72,
                fontWeight: 800
            },
            2: {
                fontSize: 64,
                fontWeight: 700
            },
            3: {
                fontSize: 48,
                fontWeight: 600
            },
            4: {
                fontSize: 36,
                fontWeight: 500
            },
            5: {
                fontSize: 24,
                fontWeight: 500
            }
        }
    }
});
export const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    marginBottom: 15,
});
export const Label = styled('label', {
    fontSize: 15,
    color: violet.violet11,
    width: 90,
    textAlign: 'right',
});

export const Input = styled('input', {
    all: 'unset',
    width: '100%',
    maxWidth: 500,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 0 0 1px ${mauve.mauve9}`,
    height: 35,

    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});
export const Button = styled('button', {
    all: 'unset',
    backgroundColor: violet.violet9,
    borderRadius: 6,
    padding: '10px',
    color: 'white',
    cursor: 'pointer',

    variants: {
        variant: {
            alert: {
                backgroundColor: red.red10,
                color: 'white',
                '&:hover': { backgroundColor: red.red11 }
            },
            secondary: {
                backgroundColor: mauve.mauve6,
                color: mauve.mauve12,
                '&:hover': { backgroundColor: mauve.mauve7 }
            }
        }
    }
}, { '&:hover': { backgroundColor: violet.violet10 } });
export const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 25,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: violet.violet11,
    position: 'absolute',
    top: 10,
    right: 10,

    '&:hover': { backgroundColor: violet.violet4 },
    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});
