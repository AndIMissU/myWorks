// 单点入口
//register让我们使用更高级的东西
require('babel-core/register')({
  'presets': [
    'stage-3',
    ["latest-node", {'target': "current"}]
  ]
})
require('./server');