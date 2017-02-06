栗子:
    export default class HelloWorldApp extends Component {
      render() {
        return (
          //JSX——是一种在JavaScript中嵌入XML结构的语法
          //<Text>组件，它专门用来显示文本
          <Text>Hello world~!</Text>
        );
      }
    }

    // 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
    AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
=====================================================================================
JSX语法
    一种在JavaScript中嵌入XML结构的语法。
    很多传统的应用框架会设计自有的模板语法，让你在结构标记中嵌入代码。
    React反其道而行之，设计的JSX语法却是让你在代码中嵌入结构标记。初看起来，这种写法很像web上的HTML，
    这里我们使用的是React Native的组件。
    上面的示例代码中，使用的是内置的<Text>组件，它专门用来显示文本

=====================================================================================
组件
    定义了一个名为HelloWorldApp的新的组件（Component），
    并且使用了名为AppRegistry的内置模块进行了“注册”操作。
    你在编写React Native应用时，肯定会写出很多新的组件。
    而一个App的最终界面，其实也就是各式各样的组件的组合。
    组件本身结构可以非常简单——唯一必须的就是在render方法中返回一些用于渲染结构的JSX语句。

=====================================================================================
属性props和state
    props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。
    对于需要改变的数据，我们需要使用state
        一般来说在constructor中初始化state,然后在需要修改时调用setState方法

=====================================================================================
样式style(见greetStyles的使用)

    所有的核心组件都接受名为style的属性。
    这些样式名基本上是遵循了web上的CSS的命名，只是按照JS的语法要求使用了驼峰命名法，
    例如将background-color改为backgroundColor

    实际开发中组件的样式会越来越复杂，我们建议使用StyleSheet.create来集中定义组件的样式

=====================================================================================
1.宽和高 (见组件FixedDimensionsBasics)
    style={{width:50,height:50}} --固定宽高
    style={{flex:1}} --权重


2.位置和排列Flexbox
  (同CSS3 Flexbox)
    http://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=repost#_loginLayer_1486368234186

    可以在不同屏幕尺寸上提供一致的布局结构
    一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性

    React Native中的Flexbox的工作原理和web上的CSS基本一致，当然也存在少许差异。
    flexDirection的默认值是column而不是row，而flex也只能指定一个数字值


    一、flexDirection决定布局的排列方向
        子元素是应该沿着水平轴(row)方向排列，还是沿着竖直轴(column)方向排列
        默认值是竖直轴(column)方向

    二、justifyContent决定其子元素沿着水平方向的排列方式
    三、alignItems    决定其子元素沿着竖直方向的排列方式

=====================================================================================
TextInput(见组件PizzaTranslator)
    一个允许用户输入文本的基础组件
    属性onChangeText      --会在文本变化时被调用
    属性onSubmitEditing   --会在文本被提交后（用户按下软键盘上的提交键）调用

=====================================================================================
ScrollView
    一个通用的可滚动的容器，你可以在其中放入多个组件和视