import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'

 interface NameJobContentProps {
   className?: string
   name?: string
   description: string
}

export const NameJobContent = memo((props: NameJobContentProps) => {
    const {
        className,
        name,
        description,
    } = props

    return (
        <HStack className={className}>
            {name ? <Text text={name} sizeText="Medium14" color="commentColor" /> : null}
            <Text text="/" sizeText="Medium14" color="darkGrey" />
            <Text text={description} sizeText="Medium14" color="darkGrey" />
        </HStack>
    )
})
