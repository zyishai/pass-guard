import React, { useState } from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button, IconButton, Fieldset, Input, Label } from 'components/shared/atoms';
import { Flex } from 'components/shared/layout';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogClose } from 'components/Dialog';
import { useForm } from 'react-hook-form';

export const NewPasswordButton = ({ onSave }) => {
    const { register, handleSubmit } = useForm();
    const [dialogOpen, setDialogOpen] = useState(false);
    const openDialog = () => setDialogOpen(true);
    const closeDialog = () => setDialogOpen(false);
    const submitForm = (data) => {
        closeDialog();
        onSave(data);
    }

    return (
        <Dialog open={dialogOpen}>
            <DialogTrigger asChild>
                <Button css={{ alignSelf: 'center', marginTop: 35, marginBottom: 35 }} onClick={openDialog}>Add new password</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>Add new password</DialogTitle>
                <DialogDescription>Enter service name and password. When you&apos;re done click save to add a new record.</DialogDescription>
                <form onSubmit={handleSubmit(submitForm)}>
                    <Fieldset>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" {...register('name')} />
                    </Fieldset>
                    <Fieldset>
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" {...register('password')} />
                    </Fieldset>
                    <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
                        <Button type="submit">
                            Save
                        </Button>
                    </Flex>
                </form>
                <IconButton onClick={closeDialog}>
                    <Cross2Icon />
                </IconButton>
            </DialogContent>
        </Dialog>
    );
};
