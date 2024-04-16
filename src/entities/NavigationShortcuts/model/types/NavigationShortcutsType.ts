export interface ListLinkProps {
    path: string
    name: string
}

export interface ShortcutProps {
    name: string
    logo: React.VFC<React.SVGProps<SVGSVGElement>>
    listLink?: ListLinkProps[]
    arrow: boolean
}
