/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * JSX——是一种在JavaScript中嵌入XML结构的语法
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View, Image, TextInput, ScrollView, ListView,Navigator
} from 'react-native';

// ./MyScene表示的是当前目录下的MyScene.js文件，也就是我们刚刚创建的文件
// 注意即便当前文件和MyScene.js在同一个目录中，"./"两个符号也是不能省略的！
// 但是.js后缀是可以省略的
import MyScene from './MyScene';


/**默认输出的组件*/
export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={{alignItems : 'center'}}>
                <LotsOfGreetings />
                <Bananas />
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
                <MyScene />
            </View>
        );
    }
}


/**自定义组件--问候相关*/
class Greeting extends Component {
    render() {
        return (
            /**<Text>组件，它专门用来显示文本
             * this.props.name来定义组件的属性为name*/
            <Text style={this.props.style}>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            /**View 常用作其他组件的容器，来帮助控制布局和样式*/
            <View style={{alignItems : 'center'}}>
                <Greeting name='Rexxar' style={greetStyles.bigblue}/>
                <Greeting name='Jaina' style={greetStyles.red}/>
                <Greeting name='Valeera' style={greetStyles.bigblue}/>
            </View>
        );
    }
}

/**问候组件样式 样式属性遵循驼峰方式*/
const greetStyles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red',
    },
});

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            /**用括号来把pic这个变量嵌入到JSX语句中。
             * 括号的意思是括号内部为一个js变量或表达式，需要执行后取值。
             * 因此我们可以把任意合法的JavaScript表达式通过括号嵌入到JSX语句中*/
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

/**自定义组件 实时更新状态*/
class Blink extends Component {
    constructor(props) {
        super(props);
        //声明初始状态
        this.state = {showText: true}

        /**每隔1秒更新一次状态取反*/
        setInterval(() => {
            this.setState({showText: !this.state.showText})
        }, 1000)
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}


class FixedDimensionsBasics extends Component {
    render() {
        return (
            /**指定宽高*/
            // <View>
            //     <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
            //     <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
            // </View>

            /**弹性（Flex）宽高 类似于权重 前提必须指定父View的宽高
             * 这里父View设置flex:1则占满屏幕
             */
            // <View style={{flex:1}}>
            //     <View style={{flex:1,backgroundColor:'powderblue'}}></View>
            //     <View style={{flex:2,backgroundColor:'skyblue'}}></View>
            //     <View style={{flex:3,backgroundColor:'steelblue'}}></View>
            // </View>

            /**flexDirection*/
            <View style={{
                flex:1,
                flexDirection:'row-reverse',
                justifyContent:'space-around',
                alignItems:'center'}}>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
                <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
            </View>

        );
    }
}

/**inputText的初步使用--披萨转换器*/
class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding:10}}>
                <TextInput style={{height:40}}
                           placeholder="Type here to translate!"
                           onChangeText={
                               (text) => this.setState({text})
                           }
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}


/**ScrollView加载图片*/
class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:56}}>Scroll me plz</Text>
                <Image source={require('./img/14-1612220U926.jpg')}
                       style={{width: 40, height: 40}}/>
                <Image source={require('./img/238584035766929246.jpg')}
                       style={{width: 40, height: 40}}/>
                <Image source={require('./img/14-1612220U926.jpg')}
                       style={{width: 40, height: 40}}/>
                <Image source={require('./img/238584035766929246.jpg')}
                       style={{width: 40, height: 40}}/>
                <Image source={require('./img/14-1612220U926.jpg')}
                       style={{width: 40, height: 40}}/>

                <Text style={{fontSize:56}}>If you like</Text>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>

                <Text style={{fontSize:56}}>Scrolling down</Text>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>

                <Text style={{fontSize:96}}>Framework around</Text>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>

                <Text style={{fontSize:96}}>Whats the best</Text>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Image source={require('./img/238584035766929246.jpg')}/>
                <Image source={require('./img/14-1612220U926.jpg')}/>
                <Text style={{fontSize:80}}>React Native</Text>

            </ScrollView>
        );
    }
}


class ListViewBasics extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    render() {
        return (
            <View style={{flex:1,padding:22}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}

/**渲染一个Navigator组件，然后通过此组件的renderScene属性方法来渲染其他场景*/
/**路由(route)的概念
 *      renderScene方法是完全根据路由提供的信息来渲染场景的
 *      在路由中任意自定义参数以区分标记不同的场景
 * */
class SimpleNavigation extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{title:'My Initial Scene',index:0}}
                renderScene={(route,navigator) =>
                    <MyScene
                        /**MyScene通过title属性接受了路由对象中的title值*/
                        title={route.title}

                        /**新场景显示时回调*/
                        onForward={()=>{
                          const nextIndex = route.index + 1;
                          navigator.push({
                              title:'Scene' + nextIndex,
                              index:nextIndex
                          });
                        }}

                        /**跳转到前一个场景回调*/
                        onBack={()=>{
                            if(route.index > 0){
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        )
    }
}

// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
// AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
// AppRegistry.registerComponent('HelloWorldApp', () => FixedDimensionsBasics);
// AppRegistry.registerComponent('HelloWorldApp', () => PizzaTranslator);
// AppRegistry.registerComponent('HelloWorldApp', () => IScrolledDownAndWhatHappenedNextShockedMe);
// AppRegistry.registerComponent('HelloWorldApp', () => ListViewBasics);
AppRegistry.registerComponent('HelloWorldApp', () => SimpleNavigation);
