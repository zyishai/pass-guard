import { base64Decode } from '@firebase/util';
import { useFirestoreQuery } from 'hooks/firestore-query';
import * as firestore from 'firebase/firestore';
import { Button, Text } from 'components/shared/atoms';
import { Flex } from 'components/shared/layout';
import { blackA, red } from '@radix-ui/colors';
import { PasswordEntry } from 'components/PasswordEntry';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { NewPasswordButton } from 'components/NewPassword';
import { styled } from '@stitches/react';

const ScrollArea = styled(ScrollAreaPrimitive.Root, {
    flex: 1,
    display: 'flex',
    overflow: 'hidden'
});

export default function List({ masterPassword }) {
    const db = firestore.getFirestore();
    const { data, error, status } = useFirestoreQuery(
        firestore.collection(db, masterPassword)
    );

    const deleteEntry = (id) => {
        firestore.deleteDoc(firestore.doc(db, `${masterPassword}/${id}`));
    };
    const updateEntry = ({ id, name, password }) => {
        firestore.updateDoc(firestore.doc(db, `${masterPassword}/${id}`), { name, password });
    };
    const addEntry = ({ name, password }) => {
        if (!name || !password) return;

        firestore.addDoc(firestore.collection(db, masterPassword), { name, password });
    }

    return (<ScrollArea>
        {
            status === 'loading' ? (
                <Text css={{ color: blackA.blackA9, fontSize: 24 }}>Loading your passwords. Please wait..</Text>
            ) : status === 'error' ? (
                <Text css={{ color: red.red10 }}>Error occurred: {error.message}</Text>
            ) : (
                <Flex css={{ flex: 1, maxWidth: 640, flexDirection: 'column', alignItems: 'stretch', margin: '0 auto', marginTop: 25 }}>
                    <ScrollAreaPrimitive.Viewport>
                        {
                            data.map((passwordEntry) => <PasswordEntry key={passwordEntry.id} entry={passwordEntry} onDelete={() => deleteEntry(passwordEntry.id)} onChangeSave={updateEntry} />)
                        }
                    </ScrollAreaPrimitive.Viewport>
                    <ScrollAreaPrimitive.Scrollbar orientation='vertical'>
                        <ScrollAreaPrimitive.Thumb />
                    </ScrollAreaPrimitive.Scrollbar>
                    <NewPasswordButton onSave={addEntry} />
                    {/* <ScrollAreaPrimitive.Corner /> */}
                </Flex>
            )
        }
    </ScrollArea>)
}

export async function getServerSideProps(ctx) {
    const { params: { id: encodedPassword } } = ctx;
    const masterPassword = base64Decode(encodedPassword);

    return {
        props: {
            masterPassword
        }
    }
}
