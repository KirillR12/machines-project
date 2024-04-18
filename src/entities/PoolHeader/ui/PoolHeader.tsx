import { memo } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import { Text } from '@/shared/ui/Text'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Icon } from '@/shared/ui/Icon'
import Setting from '@/shared/assets/icons/setting.svg'
import { Hr } from '@/shared/ui/Hr'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import Plus from '@/shared/assets/icons/plus.svg'

 interface PoolHeaderProps {
   className?: string
}

export const PoolHeader = memo((props: PoolHeaderProps) => {
    const {
        className,
    } = props

    return (
        <>
            <HStack justify="between" align="start" max className={classNames(styles.PoolHeader, {}, [className])}>
                <VStack gap="12">
                    <HStack gap="12">
                        <Text title="Factory pool" sizeTitle="Semibold28" tag="h1" />
                        <HStack>
                            <Text title="3/" sizeTitle="Bold20" tag="h1" color="grey" />
                            <Text title="98" sizeTitle="Bold20" tag="h1" color="blue" dashed />
                        </HStack>
                        <Button theme={ButtonTheme.CLEAR}>
                            <Icon Svg={Setting} />
                        </Button>
                    </HStack>
                    <HStack gap="12">
                        <HStack>
                            <Text text="Search:" sizeText="Medium14" color="grey" />
                            <Text text="615-18A-EXT 1" sizeText="Medium14" color="brightBlue" />
                        </HStack>
                        <Hr hrVertically height="18px" />
                        <HStack>
                            <Text text="Status:" sizeText="Medium14" color="grey" />
                            <Text text="Ready to work" sizeText="Medium14" color="brightBlue" />
                        </HStack>
                    </HStack>
                </VStack>
                <Button theme={ButtonTheme.PRIMARY}>
                    <HStack gap="6">
                        <Icon Svg={Plus} />
                        <Text text="Load jobs" sizeText="Medium14" color="white" />
                    </HStack>
                </Button>
            </HStack>
            <Hr max inverted />
        </>

    )
})
