import validatePropsMixin from './mixins/validate-props'
import internalPropsMixin from './mixins/internal-props'



const FiatComponent = (component) => {
  const { internalProps } = component

  const data = {}

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

  if (internalProps) {
    data.internalProps = {}
    data.initialProps = {...internalProps}
    const keys = Object.keys(internalProps)
    for (let i=0; i<keys.length; i++) {
      const key = keys[i]
      props[key] = null
    }
  }

  const mixins = [
    validatePropsMixin(component),
    internalPropsMixin(component),
  ]

  component.data = component.data ? {...data, ...component.data} : {...data}
  component.props = component.props ? {...props, ...component.props} : {...props}
  component.methods = component.methods ? {...methods, ...component.methods} : {...methods}
  component.mixins = component.mixins ? [...mixins, ...component.mixins] : [...mixins]
  return component
}

export default FiatComponent