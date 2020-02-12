import { useContext } from 'react';
import { MobXProviderContext, useObserver } from 'mobx-react';

const inject = (baseComponent) => {
  const component = (props) => {
    const store = useContext(MobXProviderContext);
    return useObserver(() => (baseComponent({ ...props, ...store })));
  };
  component.displayName = baseComponent.name;
  return component;
};

export default inject;
