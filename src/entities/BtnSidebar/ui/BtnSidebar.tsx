import { memo } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import BtnClose from '@/shared/assets/icons/sidebarBtnClose.svg'
import BtnOpen from '@/shared/assets/icons/sidebarBtnOpne.svg'

 interface BtnSidebarProps {
   className?: string
   collapsed: boolean
   isCollapsedOpen: () => void
isCollapsedClose: () => void
}

export const BtnSidebar = memo((props: BtnSidebarProps) => {
    const {
        className,
        collapsed,
        isCollapsedOpen,
        isCollapsedClose,
    } = props

    if (collapsed) {
        return (
            <Button theme={ButtonTheme.CLEAR} onClick={isCollapsedOpen} className={className}>
                <Icon Svg={BtnOpen} />
            </Button>
        )
    }

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={isCollapsedClose} className={className}>
            <Icon Svg={BtnClose} />
        </Button>
    )
})
