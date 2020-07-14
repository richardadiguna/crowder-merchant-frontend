function internalPropsMixin(component) {
  const { internalProps } = component
  if (!internalProps) return {}

  function derivedProps(context, props) {
    const internalProps = props ? {...props} : {...context.props}
    context.setData({ internalProps })
  }

  return {
    onInit() {
      derivedProps(this, internalProps)
    },
    didMount() {
      derivedProps(this, internalProps)
    },
    deriveDataFromProps(nextProps) {
      const props = {}
      const keys = Object.keys(nextProps)
      for (let i=0; i<keys.length; i++) {
        const key = keys[i]
        if (nextProps[key] === null || nextProps[key] === undefined) {
          props[key] = this.data.internalProps[key]
        } else {
          props[key] = nextProps[key]
        }
      }
      derivedProps(this, props)
    }
  }
}

export default internalPropsMixin