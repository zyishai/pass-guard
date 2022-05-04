import React, { useState } from 'react';
import { blackA, violet } from '@radix-ui/colors';
import { EyeOpenIcon, EyeNoneIcon, Pencil1Icon, TrashIcon, Cross2Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import { Button, Text, IconButton, Label, Input, Fieldset } from 'components/shared/atoms';
import { Flex, Grid } from 'components/shared/layout';
import { useToggle } from 'hooks/toggle';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from 'components/Dialog';
import { useForm } from 'react-hook-form';
import { DialogClose } from '@radix-ui/react-dialog';

const Icon = React.forwardRef(({ icon: Component, ...props }, ref) => <Component {...props} ref={ref} />);
Icon.displayName = 'Icon';

const Box = styled(Flex, {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    border: `1px solid ${blackA.blackA8}`,
    borderRadius: 8
});
const StyledIcon = styled(Icon, {
    cursor: 'pointer'
}, { '&:hover': { color: violet.violet10 } });

export const PasswordEntry = ({ entry, onDelete, onChangeSave }) => {
    const { id, name, password } = entry;
    const [shown, toggleShown] = useToggle();
    const { register, handleSubmit } = useForm();
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const openDialog = () => setEditDialogOpen(true);
    const closeDialog = () => setEditDialogOpen(false);
    const saveChanges = (data) => {
        closeDialog();
        onChangeSave(data);
    }

    return (
        <Box css={{ marginBottom: 15 }}>
            <Flex css={{ alignItems: 'center' }}>
                <Text>{name}:</Text>
                &nbsp;
                <Text css={{ fontWeight: shown ? 500 : 800 }}>{
                    shown ? password : password.replace(/./g, '·')
                }</Text>
            </Flex>
            <Grid css={{ gridTemplateColumns: 'repeat(3, 1fr)', columnGap: 10 }}>
                {
                    <>
                        <StyledIcon icon={shown ? EyeNoneIcon : EyeOpenIcon} onClick={toggleShown} />
                        <Dialog open={editDialogOpen}>
                            <DialogTrigger asChild onClick={openDialog}>
                                <StyledIcon icon={Pencil1Icon} />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Edit password</DialogTitle>
                                <DialogDescription>Make changes to this password record here. Click save when you&apos;re done.</DialogDescription>
                                <form onSubmit={handleSubmit(saveChanges)}>
                                    <Fieldset>
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue={name} {...register('name')} />
                                    </Fieldset>
                                    <Fieldset>
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" defaultValue={password} {...register('password')} />
                                    </Fieldset>
                                    <Fieldset>
                                        <input type="hidden" value={id} {...register('id')} />
                                    </Fieldset>
                                    <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
                                        <DialogClose asChild>
                                            <Button type="submit">
                                                Save changes
                                            </Button>
                                        </DialogClose>
                                    </Flex>
                                </form>
                                <DialogClose asChild onClick={closeDialog}>
                                    <IconButton>
                                        <Cross2Icon />
                                    </IconButton>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                        <Dialog>
                            <DialogTrigger asChild>
                                <StyledIcon icon={TrashIcon} />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Are you sure?</DialogTitle>
                                <DialogDescription>You cannot undo this action.</DialogDescription>
                                <Grid css={{ justifyContent: 'end', alignItems: 'center', gridTemplateColumns: 'repeat(2, max-content)', columnGap: 15 }}>
                                    <DialogClose asChild onClick={onDelete}>
                                        <Button variant="alert">Yes, delete</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button variant="secondary">Cancel</Button>
                                    </DialogClose>
                                </Grid>
                                <DialogClose asChild>
                                    <IconButton>
                                        <Cross2Icon />
                                    </IconButton>
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    </>
                }
            </Grid>
        </Box>
    );
};
