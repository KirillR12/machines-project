import { memo } from 'react'
import classNames from 'classnames'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { Card } from '@/shared/ui/Card'
import { NameJobContent } from '../NameJobContent/NameJobContent'
import styles from './styles.module.css'
import { Progress } from '@/entities/Progress'
import { Panel } from '../../model/types/Panel'

 interface JobCardProps {
   className?: string
   panel: Panel
   index: number
   done?: boolean
   progressCard?: boolean
}

export const JobPanelCard = memo((props: JobCardProps) => {
    const {
        className,
        panel,
        index,
        done,
        progressCard,
    } = props

    const {
        name,
        status,
        progress,
    } = panel

    const mods = {
        [styles.done]: done,
        [styles.progressCard]: progressCard,
    }

    return (
        <HStack gap="12" justify="between" className={classNames(styles.JobPanelCard, mods, [className])}>
            <Text text={String(index)} sizeText="Semibold12" color="darkGrey" />
            <HStack className={styles.panel}>
                <Text text={name} sizeText="Semibold14" color="darkGrey" />
            </HStack>
            <HStack className={styles.status}>
                <Card>
                    <Text text={status} sizeText="Semibold12" color="commentColor" />
                </Card>
            </HStack>
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
