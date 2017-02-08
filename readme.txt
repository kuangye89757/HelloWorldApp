以下实例和整理转自官方文档:http://reactnative.cn/docs/0.41/getting-started.html
在此致敬

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
一、静态图片资源
    React Native提供了一个统一的方式来管理iOS和Android应用中的图片
    图片文件的查找会和JS模块的查找方式一样

    Packager就会去这个组件所在的文件夹下查找my-icon.png。
    并且my-icon.ios.png和my-icon.android.png,Packager会根据平台而选择不同的文件

    .
    ├── button.js
    └── img
        ├── check@2x.png
        └── check@3x.png

   button.js里有这样的代码--require中的图片名字必须是一个静态字符串不能使用引用
        <Image source={require('./img/check.png')} />

        // 错误
        var icon = this.props.active ? 'my-icon-active' : 'my-icon-inactive';
        <Image source={require('./' + icon + '.png')} />

        // 正确
        var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png');
        <Image source={icon} />

   一些好处:

       iOS和Android一致的文件系统。
       图片和JS代码处在相同的文件夹，这样组件就可以包含自己所用的图片而不用单独去设置。
       不需要全局命名。你不用再担心图片名字的冲突问题了。
       只有实际被用到（即被require）的图片才会被打包到你的app。
       现在在开发期间，增加和修改图片不需要重新编译了，只要和修改js代码一样刷新你的模拟器就可以了。
       与访问网络图片相比，Packager可以得知图片大小了，不需要在代码里再声明一遍尺寸。
       现在通过npm来分发组件或库可以包含图片了。


二、使用混合App的图片资源
   如果你在编写一个混合App（一部分UI使用React Native，而另一部分使用平台原生代码），也可以使用已经打包到App中的图片资源（通过Xcode的asset类目或者Android的drawable文件夹打包）：

   <Image source={{uri: 'app_icon'}} style={{width: 40, height: 40}} />
   注意：这一做法并没有任何安全检查。你需要自己确保图片在应用中确实存在，而且还需要指定尺寸。

三、网络图片(需要手动指定图片的尺寸)
    // 正确
    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
           style={{width: 400, height: 400}} />

    // 错误
    <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />

=====================================================================================
ScrollView(见IScrolledDownAndWhatHappenedNextShockedMe)
    一个通用的可滚动的容器，你可以在其中放入多个组件和视图

=====================================================================================
ListView(见ListViewBasics)
    dataSource是列表的数据源
    renderRow逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染

=====================================================================================
Fetch API
    /**网络请求*/
    1.fetch('https://mywebsite.com/mydata.json')

    2.fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })
    })

    3.fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'key1=value1&key2=value2'
    })

    /**响应数据*/
    getMoviesFromApiAsync() {
       return fetch('http://facebook.github.io/react-native/movies.json')
           .then((response) => response.json())
           .then((responseJson) => {
               return responseJson.movies;
           })
           .catch((error) => {
               console.error(error);
           });
    }


XMLHttpRequest API(ajax)
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        console.log('success', request.responseText);
      } else {
        console.warn('error');
      }
    };

    request.open('GET', 'https://mywebsite.com/endpoint/');
    request.send();

=====================================================================================
Navigator(管理多个页面间的跳转)
    一、场景的概念--摆放在一个屏幕中的组件，就共同构成了一个"场景"