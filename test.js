window.Node2 = function(node) {
  return {
    getSibling: function() {
      const pn = node.parentNode;
      const allChildrend = pn.children;

      var retArr = {
        length: 0
      }

      for (let i = 0; i < allChildrend.length; i++) {
        if (node !== allChildrend[i]) {
          retArr[retArr.length] = allChildrend[i];
          retArr.length++;
        }
      }

      return retArr;
    },

    addClass: function(classes) {
      Object.keys(classes).forEach(item => {
        const methodName = classes[item] ? 'add' : 'remove';
        node.classList[methodName](item);
      })
    }
  }
}

console.log(Node2);
Node2.getSibling(item3);

