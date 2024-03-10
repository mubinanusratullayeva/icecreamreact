import stylecont from './container.module.scss'

export function Container({ children }) {
    return (
        <div className={stylecont.container}>
            {children}
        </div>
    )
}