import classNames from 'classnames'
import { memo, useCallback, useState } from 'react'
import styles from './styles.module.css'
import { HStack, VStack } from '@/shared/ui/Stack'
import { ShortcutProps } from '../model/types/NavigationShortcutsType'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import ArrowTop from '@/shared/assets/icons/arrowTop.svg'
import ArrowBottom from '@/shared/assets/icons/arrowBottom.svg'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'

 interface NavigationShortcutsProps {
   className?: string
   shortcuts: ShortcutProps
   collapsed: boolean
}

export const NavigationShortcuts = memo((props: NavigationShortcutsProps) => {
    const {
        className,
        shortcuts,
        collapsed,
    } = props

    const [action, isAction] = useState(false)

    const isOpen = useCallback(() => {
        isAction((prev) => !prev)
    }, [])

    if (collapsed) {
        return (
            <Button theme={ButtonTheme.CLEAR} onClick={isOpen}>
                <shortcuts.logo />
            </Button>
        )
    }

    if (shortcuts.listLink) {
        return (
            <VStack className={classNames(styles.SidebarItem, {}, [className])}>
                <Button theme={ButtonTheme.CLEAR} onClick={isOpen}>
                    <HStack gap="6">
                        <shortcuts.logo />
                        <Text title={shortcuts.name} sizeTitle="Semibold16" tag="h5" color="blue" />
                        {action ? <Icon Svg={ArrowTop} /> : <Icon Svg={ArrowBottom} />}
                    </HStack>
                </Button>

                {action ? (
                    <VStack gap="12" className={styles.link}>
                        {shortcuts.listLink.map((el) => (
                            <a key={el.name} href={el.path}>{el.name}</a>
                        ))}
                    </VStack>
                ) : null}

            </VStack>
        )
    }

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={isOpen}>
            <HStack gap="6" className={classNames(styles.SidebarItem, {}, [className])}>
                <shortcuts.logo />
                <Text title={shortcuts.name} sizeTitle="Semibold16" tag="h5" color="blue" />
            </HStack>
        </Button>
    )
})
