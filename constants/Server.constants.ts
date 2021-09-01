export const isServer: boolean = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
)
