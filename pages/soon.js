import { blackA } from '@radix-ui/colors';
import { styled } from '@stitches/react';
import Head from 'next/head';

const Text = styled('h1', {
    color: blackA.blackA12,
    textAlign: 'center'
});

export default function Soon() {
    return (
        <>
            <Head>
                <title>PassGuard | Soon</title>
                <meta name="description" content="Placeholder for user registration pages" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Text>Coming soon..</Text>
        </>
    )
}
