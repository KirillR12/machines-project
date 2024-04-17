import { memo } from 'react'
import './styles.css'
import ProgressBar from '@ramonak/react-progress-bar'
import { HStack } from '../Stack'
import { Text } from '../Text'
import { statusType } from '@/shared/types/status'

interface ProgressProps {
    className?: string
    completed: number
    status: statusType
    panelDesctiption?: string
    inverted?: boolean
}

export const Progress = memo((props: ProgressProps) => {
    const {
        className,
        completed,
        status,
        panelDesctiption,
        inverted,
    } = props

    const contentError = (
        <ProgressBar
            completed={completed}
            barContainerClassName="container"
            bgColor="rgba(244, 80, 110, 1)"
            height="10px"
            customLabel=" "
        />
    )

    const contentLoading = (
        <ProgressBar
            completed={completed}
            barContainerClassName="container"
            bgColor="rgba(185,191,202)"
            height="10px"
            customLabel=" "
        />
    )

    const contentCompleted = (
        <ProgressBar
            completed={completed}
            barContainerClassName="container"
            bgColor="rgba(169,227,176)"
            height="10px"
            customLabel=" "
        />
    )

    const content = (
        <ProgressBar
            completed={completed}
            barContainerClassName="container"
            bgColor="rgba(83, 200, 96, 1)"
            height="10px"
            customLabel=" "
        />
    )

    const errorComp = status === 'error'
    const loadingComp = status === 'loading' || status === 'canceled' || status === 'iddle'
    const completedComp = status === 'completed'
    const emptyComp = status === 'ready'

    if (!emptyComp) {
        return (
            <HStack justify="start" gap="6" className={className}>
                {completed && !inverted ? <Text text={`${completed}%`} sizeText="Bold12" color="brightBlue" /> : null}
                {completed === 0 && !inverted ? <Text text={`${completed}%`} sizeText="Bold12" color="grey" /> : null}
                {inverted ? <Text text={`${completed}%`} sizeText="Bold12" color="white" /> : null}
                {errorComp ? contentError : null}
                {loadingComp ? contentLoading : null}
                {completedComp ? contentCompleted : null}
                {!errorComp && !loadingComp && !completedComp ? content : null}
            </HStack>
        )
    }

    return (
        <HStack justify="start" gap="6" className={className}>
            {inverted ? <Text text={`${completed}%`} sizeText="Bold12" color="white" /> : null}
            {completed ? <Text text={`${completed}%`} sizeText="Bold12" color="grey" /> : null}
            {completed === 0 && !inverted ? <Text text={`${completed}%`} sizeText="Bold12" color="grey" /> : null}
        </HStack>
    )
})
