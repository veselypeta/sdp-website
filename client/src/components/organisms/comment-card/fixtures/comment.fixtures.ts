import { Reply } from '../comment-card';

export const replies: Reply[] = [
    {
        id: '1',
        sender: 'Petr',
        message: 'this project sucks',
        rootCommentId: '31',
        timestamp: new Date(),
    },
    {
        id: '2',
        sender: 'Hugh Mungus',
        message: 'this project is the best thing ever',
        rootCommentId: '31',
        timestamp: new Date('02/25/15'),
    },
    {
        id: '3',
        sender: 'Silly gooly',
        message: 'this project has some good parts',
        rootCommentId: '31',
        timestamp: new Date('06/25/15'),
    },
];
