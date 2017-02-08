import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

/**export default -- 导出(export)当前组件，以允许其他组件引入(import)和使用当前组件*/
export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }

    render() {
        return (
            /**MyScene通过title属性接受了路由对象中的title值。
             * 它还包含了两个可点击的组件TouchableHighlight，
             * 会在点击时分别调用通过props传入的onForward和onBack方法，
             * 而这两个方法各自调用了navigator.push()和navigator.pop()，从而实现了场景的变化*/
            <View>
                <Text>Current Scene : {this.props.title}</Text>
                <TouchableHighlight style={{padding:20}} onPress={this.props.onForward}>
                    <Text>点我进入下一场景</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{padding:20}} onPress={this.props.onBack}>
                    <Text>点我返回上一场景</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
