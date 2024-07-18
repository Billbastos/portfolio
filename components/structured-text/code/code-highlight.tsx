'use client'
import { Highlight, themes } from 'prism-react-renderer'
import classes from './code-highlight.module.css'

const CodeHighlight = ({ key, node }) => {
  const { code, 'token-line': tokenLine, 'line-number': lineNumber } = classes
  return (
    <Highlight
      key={key}
      theme={themes.duotoneLight}
      code={node.code}
      language={node.language}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className={code}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })} className={tokenLine}>
              <div className={lineNumber}>{i + 1}</div>
              <div>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeHighlight
