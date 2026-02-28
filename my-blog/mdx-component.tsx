import type { MDXComponents } from "mdx/types";

export default function MDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
    }
}