import React, { Component } from 'react'
import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

/**
 * Show notification
 * TODO: notif about success and errors 
 * TODO: use JSON like {"status": "error", "error": ["no user", "else error"]}
 */
const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description:
            'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
};

/**
 * This component save score to db and show notification about status
 */
export default class GameService extends Component {
    // TODO: saving functions
    // TODO: authorization functions
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
