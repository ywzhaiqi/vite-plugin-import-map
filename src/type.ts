
export interface Module {
    name: string
    path: string | string[]
    css?: string | string[]
}

export interface Options {
    modules: (Module | ((prodUrl: string) => Module))[]
    prodUrl?: string
}
