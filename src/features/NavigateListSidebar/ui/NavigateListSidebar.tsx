import classNames from 'classnames'
import { memo } from 'react'
import { navigateList } from '../model/data/navigateList'
import { NavigationShortcuts } from '@/entities/NavigationShortcuts'
import { VStack } from '@/shared/ui/Stack'

 interface NavigateListSidebarProps {
   className?: string
   collapsed: boolean
}

export const NavigateListSidebar = memo((props: NavigateListSidebarProps) => {
    const {
        className,
        collapsed,
    } = props

    const list = navigateList.map((item) => <NavigationShortcuts key={item.name} shortcuts={item} collapsed={collapsed} />)

    return (
        <VStack gap="16" className={classNames('', {}, [className])}>
            {list}
        </VStack>
    )
})
