export interface Comment {
    id: string;
    commenter: string;
    message: string;
    timestamp: Date;
}

export interface Reply {
    id: string;
    rootCommentId: string;
    commenter: string;
    message: string;
    timestamp: Date;
}

export const replies: Reply[] = [
    {
        id: '1',
        rootCommentId: '1',
        commenter: 'Steve',
        message: 'I dont like this comment',
        timestamp: new Date(),
    },
    {
        id: '2',
        rootCommentId: '1',
        commenter: 'Jimmy',
        message: 'Well you can just die then!',
        timestamp: new Date(),
    },
];

export const data: Comment[] = [
    {
        id: '1',
        commenter: 'Petr',
        message: 'this project sucks',
        timestamp: new Date(),
    },
    {
        id: '2',
        commenter: 'Hugh Mungus',
        message: 'this project is the best thing ever',
        timestamp: new Date('02/25/15'),
    },
    {
        id: '3',
        commenter: 'Silly gooly',
        message: 'this project has some good parts',
        timestamp: new Date('06/25/15'),
    },
];
