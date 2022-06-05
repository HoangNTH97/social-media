import { Button } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { LockIcon } from '../../icons/icons';
import styles from './ForgotPassword.module.scss';

const cx = classNames.bind(styles);

ForotPassword.propTypes = {};

function ForotPassword(props) {
    return (
        <div className={cx('forgot-password')}>
            <div className={cx('forgot-header')}>
                <div className="icon">
                    <LockIcon />
                </div>
                <div className={cx('content')}>
                    <h2>Can’t log in?</h2>
                    <h5>Restore access to your account</h5>
                </div>
            </div>

            <div className={cx('forgot-form')}>
                <h5>We’ll send a recovery link to</h5>
                <input type="email" />
                <Button primary>Reset Password</Button>
                <a href="!#">Resend Email</a>
            </div>
        </div>
    );
}

export default ForotPassword;
