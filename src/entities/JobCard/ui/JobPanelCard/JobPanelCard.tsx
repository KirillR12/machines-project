import { memo } from 'react'
import classNames from 'classnames'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Card } from '@/shared/ui/Card'
import { NameJobContent } from '../NameJobContent/NameJobContent'
import styles from './styles.module.css'
import { Progress } from '@/shared/ui/Progress'
import { Panel } from '../../model/types/Panel'

 interface JobCardProps {
   className?: string
   panel: Panel
   index: number
}

export const JobPanelCard = memo((props: JobCardProps) => {
    const {
        className,
        panel,
        index,
    } = props

    const {
        name,
        status,
        progress,
    } = panel

    return (
        <HStack justify="between" className={classNames(styles.JobPanelCard, {}, [className])}>
            <Text text={String(index)} sizeText="Semibold12" color="darkGrey" />
            <Text className={styles.panel} text={name} sizeText="Semibold14" color="darkGrey" />
            <Card>
                <Text text="completed" sizeText="Semibold12" color="commentColor" />
            </Card>
            <NameJobContent
                className={styles.name}
                name="Name in 20 characters"
                description="Wall Panel Line"
            />
            <Progress
                completed={progress}
                status={status}
                className={styles.progress}
            />
        </HStack>
    )
})
