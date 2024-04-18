import classNames from 'classnames'
import { memo } from 'react'
import styles from './styles.module.css'

type sizeTextProps = 'Semibold16' | 'Medium16' | 'Bold14' | 'SemiboldItalic14' | 'Semibold14' |
 'Medium14' | 'ExtraBold12' | 'Bold12' | 'Semibold12'
type sizeTitleH1Props = 'Extrabold28' | 'Semibold28' | 'Bold20'
type sizeTitleH2Props = 'Extrabold24'
type sizeTitleH5Props = 'Semibold16'

type textColor = 'blue' | 'brightBlue' | 'grey' | 'darkGrey' | 'commentColor' | 'white'

type HeaderTagType = 'h1' | 'h2' | 'h5'

 interface TextProps {
   className?: string
   text?: string
   title?: string
   sizeText?: sizeTextProps
   sizeTitle?: sizeTitleH1Props | sizeTitleH2Props | sizeTitleH5Props
   tag?: HeaderTagType
   color?: textColor
   dashed?: boolean
   italic?: boolean
}

const mapSizeToHeaderTag: Record<HeaderTagType, HeaderTagType> = {
    h5: 'h5',
    h2: 'h2',
    h1: 'h1',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        sizeText = 'Semibold16',
        sizeTitle = 'Extrabold28',
        tag = 'h1',
        color = '',
        dashed,
        italic,
    } = props

    const HeaderTag = mapSizeToHeaderTag[tag]

    const additionClassTitle = [styles[color], styles[sizeTitle], className]
    const additionClassText = [styles[color], styles[sizeText], className]

    const mods = {
        [styles.dashed]: dashed,
        [styles.italic]: italic,
    }

    return (
        <>
            {title ? <HeaderTag className={classNames('', mods, additionClassTitle)}>{title}</HeaderTag> : ''}
            {text ? <p className={classNames('', mods, additionClassText)}>{text}</p> : ''}
        </>
    )
})
