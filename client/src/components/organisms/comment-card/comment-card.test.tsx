import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { CommentCard } from './comment-card';
import { replies } from './fixtures/comment.fixtures';
import { Comment } from '../../pages/comments';

beforeEach((window.fetch = jest.fn()));

describe('comment card', () => {
    afterEach(jest.resetAllMocks);
    beforeEach(jest.resetAllMocks);

    it('renders correctly with mocked data', async () => {
        const mockFetch = jest.spyOn(window, 'fetch').mockImplementationOnce(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (): Promise<any> => {
                return Promise.resolve({
                    json() {
                        return Promise.resolve(replies);
                    },
                });
            },
        );

        const commentCardProps: Comment = {
            id: '31',
            message: 'this is the root comment',
            sender: 'Stevo',
            timestamp: new Date(),
        };

        const { findByText } = render(<CommentCard {...commentCardProps} />);

        const commenterName = await findByText('Stevo');
        const badComment = await findByText('this project sucks');
        const goodComment = await findByText('this project is the best thing ever');
        const neutralComment = await findByText('this project has some good parts');

        expect(commenterName).toBeInTheDocument();
        expect(badComment).toBeInTheDocument();
        expect(goodComment).toBeInTheDocument();
        expect(neutralComment).toBeInTheDocument();

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('/api/replies/31');
    });
});
