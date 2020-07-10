const props = {
  onTap: null,
}

const methods = {
  onTap (e) {
    if (this.props.onTap) {
      this.props.onTap(e)
    }
  },
}

const FiatComponent = (component) => {
  component.props = component.props ? {...props, ...component.props} : {...props}
  component.methods = component.methods ? {...methods, ...component.methods} : {...methods}
  return component
}

export default FiatComponent