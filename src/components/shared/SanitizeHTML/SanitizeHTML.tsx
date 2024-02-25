import { HTMLAttributes, createElement } from "react"
import sanitize from "sanitize-html"

type SanitizeHTMLProps = {
  html: string
  tag: string
} & HTMLAttributes<HTMLElement>

export const SanitizeHTML = ({ html, tag, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHTML = sanitize(html, {
    allowedTags: ['b', 'i', 'em', 'strong'],
  })

  return createElement(
    tag,
    {...rest},
    sanitizedHTML
  )
}
