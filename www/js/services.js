angular.module('starter.services', [])
.factory('Foods', function() {
  var foods = [{"menuclass":"米饭","menudata":[{"name":"东北米饭","img":"dbmf","children":[{"_name":"小","price":2,"copy":0},{"_name":"大","price":3,"copy":0}]},{"name":"糙米饭","img":"cmf","children":[{"_name":"小","price":4,"copy":0},{"_name":"大","price":5,"copy":0}]}]},{"menuclass":"菜","menudata":[{"_name":"bzyj","name":"鲍汁杏菇扣鱼胶","img":"bzyj","children":[{"_name":"小","price":16,"copy":0},{"_name":"大","price":26,"copy":0}]},{"_name":"jtyj","name":"金汤杏菇扣鱼胶","img":"jtyj","children":[{"_name":"小","price":16,"copy":0},{"_name":"大","price":26,"copy":0}]},{"id":5,"name":"鲍汁扣鹅掌","img":"bzez","children":[{"_name":"小","price":26,"copy":0},{"_name":"大","price":36,"copy":0}]},{"id":6,"name":"金汤扣鹅掌","img":"jtez","children":[{"_name":"小","price":26,"copy":0},{"_name":"大","price":36,"copy":0}]},{"id":7,"name":"鲍汁鱼胶","img":"bzyj","children":[{"_name":"小","price":36,"copy":0},{"_name":"大","price":46,"copy":0}]},{"id":8,"name":"金汤鱼胶","img":"jtyj","children":[{"_name":"小","price":36,"copy":0},{"_name":"大","price":46,"copy":0}]},{"id":9,"name":"金汤海参","img":"jths","children":[{"_name":"小","price":36,"copy":0},{"_name":"大","price":46,"copy":0}]},{"id":10,"name":"鲍汁鱼翅","img":"bzyc","children":[{"_name":"小","price":46,"copy":0},{"_name":"大","price":56,"copy":0}]},{"id":11,"name":"金汤鱼翅","img":"jtyc","children":[{"_name":"小","price":46,"copy":0},{"_name":"大","price":56,"copy":0}]},{"id":12,"name":"佛跳墙","img":"ftq","children":[{"_name":"小","price":26,"copy":0},{"_name":"大","price":36,"copy":0},{"_name":"煲","price":88,"copy":0}]}]},{"menuclass":"汤","menudata":[{"id":13,"name":"水果羹","img":"sgg","children":[{"_name":"","price":3,"copy":0}]},{"id":14,"name":"玉米汁","img":"ymz","children":[{"_name":"","price":3,"copy":0}]},{"id":15,"name":"龙骨汤","img":"lgt","children":[{"_name":"","price":3,"copy":0}]}]},{"menuclass":"炖品","menudata":[{"id":16,"name":"炖鱼胶（咸）","img":"dyj","children":[{"_name":"","price":58,"copy":0}]},{"id":17,"name":"炖鱼胶（甜）","img":"dyj","children":[{"_name":"","price":58,"copy":0}]},{"id":18,"name":"冰糖燕窝","img":"btyw","children":[{"_name":"","price":88,"copy":0}]}]},{"menuclass":"水果","menudata":[{"id":19,"name":"猕猴桃","img":"mht","children":[{"_name":"","price":5,"copy":0}]},{"id":20,"name":"野苹果","img":"ypg","children":[{"_name":"","price":5,"copy":0}]},{"id":21,"name":"褚橙","img":"cc","children":[{"_name":"","price":5,"copy":0}]}]}];
  return {
    all: function() {
      return foods;
    },
    next: function(newFoods) {
      foods=newFoods;
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
    },
    cleardata: function(){var a,b,c;result=[];for(a in foods){menudataOk=[];for(b in foods[a]["menudata"]){childrenOk=[];for(c in foods[a]["menudata"][b]["children"])foods[a]["menudata"][b]["children"][c]["copy"]>0&&childrenOk.push(foods[a]["menudata"][b]["children"][c]);childrenOk.length&&menudataOk.push({name:foods[a]["menudata"][b]["name"],img:foods[a]["menudata"][b]["img"],children:childrenOk})}menudataOk.length&&result.push({menuclass:foods[a]["menuclass"],menudata:menudataOk})}return result}
  };
});