interface Theme {
  text: Text
}

interface Text {
  color: string
  decoration: string
}

const light: Theme = {
  text: {
    color: 'var(--link-color)',
    decoration: 'none',
  },
}

const dark: Theme = {
  text: {
    color: 'var(--link-color-200)',
    decoration: 'underline',
  },
}

const tokens = {
  light,
  dark,
}

export { tokens }
