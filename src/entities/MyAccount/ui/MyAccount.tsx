import classNames from 'classnames'
import { memo } from 'react'
import UserIcon from '@/shared/assets/icons/userIcon.svg'
import { HStack, VStack } from '@/shared/ui/Stack'
import ArrowBottomGren from '@/shared/assets/icons/arrowBottomGren.svg'
import { Text } from '@/shared/ui/Text/Text'
import Bell from '@/shared/assets/icons/bell.svg'
import { Hr } from '@/shared/ui/Hr'
import { Icon } from '@/shared/ui/Icon'
import { Button, ButtonTheme } from '@/shared/ui/Button'

 interface MyAccountProps {
   className?: string
   collapsed: boolean
}

export const MyAccount = memo((props: MyAccountProps) => {
    const {
        className,
        collapsed,
    } = props

    const content = (
        <HStack justify="between" max className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.CLEAR}>
                <HStack gap="6">
                    <Icon Svg={UserIcon} />
                    <Text text="My Account" sizeText="Medium14" color="darkGrey" />
                    <Icon Svg={ArrowBottomGren} />
                </HStack>
            </Button>
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={Bell} />
            </Button>
        </HStack>
    )

    const collapsedContent = (
        <HStack justify="center" max className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.CLEAR}>
                <HStack gap="6">
                    <Icon Svg={UserIcon} />
                </HStack>
            </Button>
        </HStack>
    )

    return (
        <VStack gap="16" max>
            <Hr max />
            {collapsed ? collapsedContent : content}
            <Hr max />
        </VStack>
    )
})
