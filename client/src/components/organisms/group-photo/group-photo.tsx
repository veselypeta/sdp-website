import React from 'react';
import { ProfileCard } from '../../atoms/profile-card';
import { CardGroup } from 'react-bootstrap';
import petr from '../../../images/profile/petr.jpg';
import dylan from '../../../images/profile/dylan.jpg';
import jd from '../../../images/profile/jd.jpg';
import han from '../../../images/profile/han.png';
import bailey from '../../../images/profile/bailey.jpg';
import adam from '../../../images/profile/adam.jpg';
import paulis from '../../../images/profile/paulis.jpg';
import jen from '../../../images/profile/jen.jpg';
import robyn from '../../../images/profile/robyn.png';

export const GroupPhoto: React.FC = () => {
    return (
        <>
            <CardGroup>
                <ProfileCard name={'Jiewen Deng'} src={jd} />
                <ProfileCard name={'Petr Vesely'} src={petr} />
                <ProfileCard name={'Dylan Thinnes'} src={dylan} />
                <ProfileCard name={'Bailey Brennan'} src={bailey} />
                <ProfileCard name={'Han Fengzhi'} src={han} />
            </CardGroup>
            <CardGroup>
                <ProfileCard name={'Jen Logan'} src={jen} />
                <ProfileCard name={'Nimrod Libman'} />
                <ProfileCard name={'Adam Masalski'} src={adam} />
                <ProfileCard name={'Paulis Barzdins'} src={paulis} />
                <ProfileCard name={'Robyn Greene'} src={robyn} />
            </CardGroup>
        </>
    );
};
