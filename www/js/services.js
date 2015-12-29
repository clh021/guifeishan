
angular.module('starter.services', [])
.factory('Foods', function() {
  var foods = {"米饭":[{"id":1,"name":"东北米饭","img":"img/foods/dbmf.png","children":{"小":2,"大":3}},{"id":2,"name":"糙米饭","img":"img/foods/cmf.jpg","children":{"小":4,"大":5}}],"菜":[{"id":3,"name":"鲍汁杏菇扣鱼胶","img":"img/foods/bzyj.png","children":{"小":16,"大":26}},{"id":4,"name":"金汤杏菇扣鱼胶","img":"img/foods/jtyj.png","children":{"小":16,"大":26}},{"id":5,"name":"鲍汁扣鹅掌","img":"img/foods/bzez.png","children":{"小":26,"大":36}},{"id":6,"name":"金汤扣鹅掌","img":"img/foods/jtez.png","children":{"小":26,"大":36}},{"id":7,"name":"鲍汁鱼胶","img":"img/foods/bzyj.png","children":{"小":36,"大":46}},{"id":8,"name":"金汤鱼胶","img":"img/foods/jtyj.png","children":{"小":36,"大":46}},{"id":9,"name":"金汤海参","img":"img/foods/jths.png","children":{"小":36,"大":46}},{"id":10,"name":"鲍汁鱼翅","img":"img/foods/bzyc.png","children":{"小":46,"大":56}},{"id":11,"name":"金汤鱼翅","img":"img/foods/jtyc.png","children":{"小":46,"大":56}},{"id":12,"name":"佛跳墙","img":"img/foods/ftq.png","children":{"小":26,"大":36,"整煲":88}}],"汤":[{"id":13,"name":"水果羹","img":"img/foods/sgg.png","children":{"":3}},{"id":14,"name":"玉米汁","img":"img/foods/ymz.png","children":{"":3}},{"id":15,"name":"龙骨汤","img":"img/foods/lgt.png","children":{"":3}}],"炖品":[{"id":16,"name":"炖鱼胶（咸）","img":"img/foods/dyj.png","children":{"":58}},{"id":17,"name":"炖鱼胶（甜）","img":"img/foods/dyj.png","children":{"":58}},{"id":18,"name":"冰糖燕窝","img":"img/foods/btyw.png","children":{"":88}}],"水果":[{"id":19,"name":"猕猴桃","img":"img/foods/mht.png","children":{"":5}},{"id":20,"name":"野苹果","img":"img/foods/ypg.png","children":{"":5}},{"id":21,"name":"褚橙","img":"img/foods/cc.png","children":{"":5}}]};
  return {
    all: function() {
      return foods;
    },
    remove: function(food) {
      foods.splice(foods.indexOf(food), 1);
    },
    get: function(id) {
      for (var i = 0; i < foods.length; i++) {
        if (foods[i].id === parseInt(id)) {
          return foods[i];
        }
      }
      return null;
    }
  };
})
.factory('Chats', function() {
  var chats = [{
    id: 0,
    name: '鲍汁扣鹅掌',
    lastText: 'You on your way?',
    face: 'img/foods/bzez.png'
  }, {
    id: 1,
    name: '鲍汁鱼翅',
    lastText: 'Hey, it\'s me',
    face: 'img/foods/bzhs.png'
  }, {
    id: 2,
    name: '鲍汁鱼胶',
    lastText: 'I should buy a boat',
    face: 'img/foods/bzyj.png'
  }, {
    id: 3,
    name: '鲍汁鱼翅',
    lastText: 'Look at my mukluks!',
    face: 'img/foods/dyj.png'
  }, {
    id: 4,
    name: '鲍汁鱼翅',
    lastText: 'This is wicked good ice cream.',
    face: 'img/foods/ftq.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});