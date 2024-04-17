import classNames from 'classnames'
import { memo, useCallback, useState } from 'react'
import styles from './styles.module.css'
import LogoBig from '@/shared/assets/icons/logoBig.svg'
import LogoSmall from '@/shared/assets/icons/logoSmall.svg'
import { VStack } from '@/shared/ui/Stack'
import { NavigateListSidebar } from '@/features/NavigateListSidebar'
import { MyAccount } from '@/entities/MyAccount'
import { Icon } from '@/shared/ui/Icon'
import { BtnSidebar } from '@/entities/BtnSidebar'
import { SupportSidebar } from '@/entities/SupportSidebar'

interface SidebarProps {
   className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const {
        className,
    } = props

    const [collapsed, setCollapsed] = useState(false)

    const collapsedClose = useCallback(() => {
        setCollapsed(true)
    }, [])

    const collapsedOpen = useCallback(() => {
        setCollapsed(false)
    }, [])

    const collapsedStyles = {
        [styles.collapsed]: collapsed,
    }

    const content = (
        <>
            {collapsed ? <Icon Svg={LogoSmall} className={styles.logo} /> : <Icon Svg={LogoBig} /> }
            <MyAccount collapsed={collapsed} />
            <NavigateListSidebar collapsed={collapsed} />
        </>
    )

    const btn = (
        <BtnSidebar
            className={styles.btn}
            collapsed={collapsed}
            isCollapsedOpen={collapsedOpen}
            isCollapsedClose={collapsedClose}
        />
    )

    if (collapsed) {
        return (
            <VStack justify="between" align="center" className={classNames(styles.Sidebar, collapsedStyles, [className])}>
                {btn}
                <VStack gap="16" align="center" max>
                    {content}
                </VStack>
                <SupportSidebar collapsed={collapsed} />
            </VStack>
        )
    }

    return (
        <VStack justify="between" className={classNames(styles.Sidebar, collapsedStyles, [className])}>
            {btn}
            <VStack gap="16">
                {content}
            </VStack>
            <SupportSidebar collapsed={collapsed} />
        </VStack>
    )
})
