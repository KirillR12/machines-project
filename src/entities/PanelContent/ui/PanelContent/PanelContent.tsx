import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

interface PanelContentProps {
className?: string
   content: string
   fraction: string
   panelWhite?: boolean
}

export const PanelContent = memo((props: PanelContentProps) => {
    const {
        className,
        content,
        fraction,
        panelWhite,
    } = props

    return (
        <HStack gap="6" className={className}>
            <HStack gap="4">
                <Text text="Panel:" sizeText="Medium14" color="grey" />
                {panelWhite ? <Text text={content} sizeText="Semibold14" color="white" /> : null}
                {!panelWhite ? <Text text={content} sizeText="Semibold14" color="brightBlue" /> : null}
            </HStack>
            <Text text={fraction} sizeText="Semibold12" color="grey" />
        </HStack>
    )
})
