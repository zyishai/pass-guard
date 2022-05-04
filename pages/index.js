import { useCallback } from 'react';
import Head from 'next/head'
import { Flex } from 'components/shared/layout';
import { Text, Input, Button } from 'components/shared/atoms';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import * as firestore from 'firebase/firestore';
import { red } from '@radix-ui/colors';
import { useLocalStorage } from 'hooks/local-storage';
import { base64Encode } from '@firebase/util';

export default function Home() {
  const { register, handleSubmit, formState: { errors }, clearErrors, reset, setError } = useForm();
  const [, setMasterPassword] = useLocalStorage('masterPassword');
  const router = useRouter();

  const goToPasswordListPage = useCallback(async ({ masterPassword }) => {
    clearErrors();
    reset();
    const db = firestore.getFirestore();
    const masterCollection = firestore.collection(db, masterPassword);
    const passwordList = await firestore.getDocs(masterCollection);
    if (passwordList.empty) {
      setError('masterPassword', {
        message: 'This master password is not registered.'
      });
    } else {
      setMasterPassword(masterPassword);
      const encodedPassword = base64Encode(masterPassword)
      router.push(`/list/${encodedPassword}`);
    }
  }, [clearErrors, reset, router, setError, setMasterPassword]);

  return (
    <Flex css={{ flex: 1, flexDirection: 'column' }}>
      <Head>
        <title>PassGuard | Home</title>
        <meta name="description" content="Easy to use password manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex as="form" onSubmit={handleSubmit(goToPasswordListPage)} css={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 55 }}>
        <Text heading>Welcome to PassGuard!</Text>
        <Text css={{ marginBottom: 15 }}>Enter your master password below to access your passwords list:</Text>
        <Input type='password' autoFocus css={{ marginBottom: 10, textAlign: 'center' }} {...register('masterPassword')} />
        <Button type="submit">Access passwords</Button>
        {errors.masterPassword && <Text css={{ color: red.red10 }}>This master password is not registered.</Text>}
      </Flex>
    </Flex >
  )
}
