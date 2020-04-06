import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { CommentReply } from './comment-reply';
import { Reply } from '../comment-card';

describe('comment reply', () => {
    it('renders correctly', () => {
        const testReply: Reply = {
            id: '21',
            message: 'This is a test reply message',
            rootCommentId: '22',
            sender: 'Petr',
            timestamp: new Date(),
        };

        const { getByText } = render(<CommentReply {...testReply} />);

        getByText('This is a test reply message');
        getByText('Petr');
    });
});
