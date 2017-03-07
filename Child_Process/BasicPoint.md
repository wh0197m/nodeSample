## BasicPoint
* 由于Node.js是单线程，无法利用多核CPU的先进性能，但是可以通过子进程来实现对多个CPU的有效利用
* child_process模块有四个创建子进程的方法，后面三种都是对spawn的封装，通过它们最终实现了多进程任务、操作Shell和进程通信等
  * spawn()
  * exec()
  * execFile()
  * fork()
