import { memo, useCallback, useState } from 'react'
import classNames from 'classnames'
import styles from './styles.module.css'
import {
    Job, JobMainCard, JobNameCard,
} from '@/entities/JobCard'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { isDone } from '../model/selectors/isDone'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import BtnIcon from '@/shared/assets/icons/btn.svg'
import BtnRotateIcon from '@/shared/assets/icons/btn rotate.svg'
import { Hr } from '@/shared/ui/Hr'

interface PoolContentProps {
   className?: string
   job: Job
   id: number
   collapsed?: boolean
   onCollapsed: (id: number) => void
}

export const PoolContent = memo((props: PoolContentProps) => {
    const {
        className,
        job,
        id,
        collapsed,
        onCollapsed,
    } = props

    const [collapsedPanel, setCollapsedPanel] = useState(false)

    const collapsedPanelHalper = useCallback(() => {
        setCollapsedPanel((prev) => !prev)
    }, [])

    const isJobName = job?.stationList?.length
    const isJobPanel = job?.panels?.length

    const jobNameCards = job?.stationList?.map((el, i) => <JobNameCard key={el.name + i} job={el} />)
    const jobNamePanels = job?.panels?.map((el, i) => isDone(el, i))

    const mods = {
        [styles.border]: collapsed,
    }

    const jobNameContent = (
        <VStack gap="12" max className={styles.JobNameCard}>
            {jobNameCards}
        </VStack>
    )

    const jobPanelContent = (
        <VStack gap="6" max className={styles.jobPanelCard}>
            {jobNamePanels}
        </VStack>
    )

    const mainContent = (
        <VStack className={classNames(styles.PoolContent, mods, [className])}>
            {!collapsed ? <JobMainCard job={job} /> : null}
            {collapsed ? <JobMainCard job={job} inverted /> : null}
            {collapsed && isJobName ? jobNameContent : null}
            {collapsed ? <Hr max /> : null}
            {collapsed && isJobPanel && collapsedPanel ? jobPanelContent : null}
        </VStack>
    )

    if (collapsed && job.progress) {
        return (
            <VStack>
                <Button theme={ButtonTheme.CLEAR} onClick={() => onCollapsed(-1)}>
                    {mainContent}
                </Button>
                {collapsed && isJobPanel && (
                    <Button className={styles.btn} onClick={collapsedPanelHalper}>
                        <HStack gap="6">
                            <Text text="View the panels" sizeText="Semibold14" color="brightBlue" />
                            {collapsedPanel ? <Icon Svg={BtnRotateIcon} /> : <Icon Svg={BtnIcon} />}
                        </HStack>
                    </Button>
                )}
            </VStack>
        )
    }

    if (job.progress) {
        return (
            <Button theme={ButtonTheme.CLEAR} onClick={() => onCollapsed(id)}>
                {mainContent}
            </Button>
        )
    }

    return mainContent
})
