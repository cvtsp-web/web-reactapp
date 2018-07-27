import { connect } from "react-redux"
import { initialLowerCase } from '@utils/utils'

export default function connectComponent(Component) {
    const name = initialLowerCase(Component.name);
    const _connectComponent = connect(state => ({
        [name]: state[name]
    }))(Component);

    return _connectComponent;
}