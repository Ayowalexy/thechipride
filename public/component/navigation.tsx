import { Image } from '@chakra-ui/react';
import { GiPieChart } from 'react-icons/gi';
import { HiUsers } from 'react-icons/hi';
import {BiMoney} from 'react-icons/bi';
import { FaPenSquare } from 'react-icons/fa';
import { AiTwotoneSetting } from 'react-icons/ai'
import { BsFillBookmarkXFill } from 'react-icons/bs';

export const Navigation = [
    {
        title: 'Overview',
        icon: GiPieChart,
        path: '/dashboard'
    },
    {
        title: 'Users',
        icon: HiUsers,
        path: '/users'
    },
    {
        title: 'Payments',
        icon: BiMoney,
        path: '/coming-soon'
    },
    {
        title: 'Ratings',
        icon: FaPenSquare,
        path: '/rating'
    },
    {
        title: 'Divider',
        path: '/coming-soon'

    },
    {
        title: 'Cancellations',
        icon: BsFillBookmarkXFill,
        path: '/coming-soon'
    },
    {
        title: 'Settings',
        icon: AiTwotoneSetting,
        path: '/coming-soon'
    },
]