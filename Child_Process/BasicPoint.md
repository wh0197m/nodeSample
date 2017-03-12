## BasicPoint
* 由于Node.js是单线程，无法利用多核CPU的先进性能，但是可以通过子进程来实现对多个CPU的有效利用
* child_process模块有四个创建子进程的方法，后面三种都是对spawn的封装，通过它们最终实现了多进程任务、操作Shell和进程通信等
  * spawn()
  * exec()
  * execFile()
  * fork()
* spawn & exec
  * spawn方法的参数必须放在arg数组中，而不能放到command参数里，而且数组中的参数时不可以带空格的，而exec可以直接将参数放到command参数里
  * child_process模块的spawn是**异步中的异步**，意思是指在子进程开始执行时，它就开始从一个流**总将数据从子进程返回给node**，在实践中，当想要子进程返回大量数据给Node.js框架时（譬如图像处理、读取二进制数据时）,最好使用spawn方法
  * child_process模块的exec方法是**同步中的异步**，意思是尽管exec是异步的，但是它**一定要等到子进程运行结束以后**再一次性返回所有buffer数据。具体实践中，如果exec的buffer体积设置的不够大，它将会以一个*maxBuffer exceeded*错误失败而告终
* exit事件与close事件
  * 对于exit事件，子进程的标准输入、输出流仍为开启状态
  * 对于close事件，一个子进程的所有标准输入、输出流被终止时出发，因为多进程有时候会共享同一个标准输入、输出流
