import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import styles from './styles.module.css'
import { Icon } from '@/shared/ui/Icon'
import { Text } from '@/shared/ui/Text'
import Comment from '@/shared/assets/icons/comment.svg'

 interface SupportSidebarProps {
    collapsed: boolean
 }

export const SupportSidebar = memo((props: SupportSidebarProps) => {
    const {
        collapsed,
    } = props

    return (
        <a href="/">
            <HStack gap="6">
                <Icon Svg={Comment} />
                {!collapsed ? <Text text="Support" color="commentColor" sizeText="Medium14" className={styles.comment} /> : null}
            </HStack>
        </a>
    )
})
