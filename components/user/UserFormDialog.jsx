import { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import FormDialog from '../FormDialog';
import { UserContext } from '../User';

export default ({ newUser }) => {
    const [user, setUser] = useContext(UserContext);
    const [open, setOpen] = useState(false);

    const fields = {
        username: {},
        email: {
            type: 'email',
            helperText:
                'email is not required, not public and will never be used for spam - it may be used for password resets and very, very rare announcements',
        },
        password: {
            type: 'password',
            label: `${newUser ? '' : 'Change'} Password`,
            helperText: newUser
                ? 'please use a random password generated by your browser or password manager'
                : 'leave blank to keep current password',
        },
        password_confirmation: { type: 'password', label: 'Confirm Password' },
    };

    const onSave = () => {
        setUser(null); // force reload
    };

    return (
        <>
            <Button variant="outlined" size="small" onClick={() => setOpen(true)}>
                {newUser ? 'Sign Up' : 'Edit Details'}
            </Button>
            <FormDialog
                open={open}
                setOpen={setOpen}
                title={newUser ? 'Sign Up' : 'Edit Details'}
                description="These private user details are never visible on the site or shared elsewhere."
                fields={fields}
                namespace="user"
                method={newUser ? 'POST' : 'PATCH'}
                url="user.json"
                source={user}
                setSource={setUser}
                onSave={onSave}
            />
        </>
    );
};
