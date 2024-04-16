import { memo } from 'react'

 interface IconProps extends React.SVGProps<SVGSVGElement> {
   className?: string
   Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        ...otherProps
    } = props

    return (
        <Svg
            className={className}
            {...otherProps}
        />
    )
})
