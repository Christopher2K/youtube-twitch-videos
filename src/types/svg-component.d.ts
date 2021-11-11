declare module '*.svg' {
  declare const ReactElement: React.ElementType<React.SVGProps<SVGSVGElement>>

  export default ReactElement
}
