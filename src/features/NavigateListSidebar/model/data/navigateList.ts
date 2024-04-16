import { ShortcutProps } from '@/entities/NavigationShortcuts'
import Home from '@/shared/assets/icons/home.svg'
import Conveyor from '@/shared/assets/icons/conveyor.svg'
import Helmet from '@/shared/assets/icons/helmet.svg'
import Analytics from '@/shared/assets/icons/analytics.svg'
import UserGroup from '@/shared/assets/icons/user-group.svg'
import Companies from '@/shared/assets/icons/compani.svg'
import Factories from '@/shared/assets/icons/factories.svg'
import LayerGroup from '@/shared/assets/icons/layer-group.svg'

export const navigateList: ShortcutProps[] = [
    {
        logo: Home,
        name: 'Dashboard',
        arrow: false,
    },
    {
        logo: Conveyor,
        name: 'Equipment',
        arrow: true,
        listLink: [
            {
                name: 'View',
                path: '/',
            },
        ],
    },
    {
        logo: Helmet,
        name: 'Job pool',
        arrow: true,
        listLink: [
            {
                name: 'View',
                path: '/',
            },
            {
                name: 'Edit',
                path: '/',
            },
            {
                name: 'Archive',
                path: '/',
            },
        ],
    },
    {
        logo: Analytics,
        name: 'Analytics',
        arrow: true,
        listLink: [
            {
                name: 'View',
                path: '/',
            },
        ],
    },
    {
        logo: UserGroup,
        name: 'Users',
        arrow: true,
        listLink: [
            {
                name: 'View',
                path: '/',
            },
        ],
    },
    {
        logo: Companies,
        name: 'Companies',
        arrow: true,
        listLink: [
            {
                name: 'View',
                path: '/',
            },
        ],
    },
    {
        logo: Factories,
        name: 'Factories',
        arrow: true,
        listLink: [
            {
                name: 'View',
                path: '/',
            },
        ],
    },
    {
        logo: LayerGroup,
        name: 'Groups',
        arrow: true,
        listLink: [
            {
                name: 'View',
                path: '/',
            },
        ],
    },
]
