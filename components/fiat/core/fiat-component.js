import validatePropsMixin from './mixins/validate-props'

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
  const mixins = [
    validatePropsMixin(component),
  ]
  component.props = component.props ? {...props, ...component.props} : {...props}
  component.methods = component.methods ? {...methods, ...component.methods} : {...methods}
  component.mixins = component.mixins ? [...mixins, ...component.mixins] : [...mixins]
  return component
}

export default FiatComponent