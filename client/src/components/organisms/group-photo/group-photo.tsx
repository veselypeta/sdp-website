import React from 'react';
import { ProfileCard } from '../../atoms/profile-card';
import { CardGroup } from 'react-bootstrap';
import petr from '../../../images/profile/petr.jpg';

export const GroupPhoto: React.FC = () => {
    return (
        <>
            <CardGroup>
                <ProfileCard name={'Jiewen Deng'} />
                <ProfileCard name={'Petr Vesely'} src={petr} />
                <ProfileCard name={'Dylan Thinnes'} />
                <ProfileCard name={'Bailey Brennan'} />
                <ProfileCard name={'Han Fengzhi'} />
            </CardGroup>
            <CardGroup>
                <ProfileCard name={'Jen Logan'} />
                <ProfileCard name={'Nimrod Libman'} />
                <ProfileCard name={'Adam Masalski'} />
                <ProfileCard name={'Paulis Barzdins'} />
                <ProfileCard name={'Robyn Greene'} />
            </CardGroup>
        </>
    );
};
