import history from "../history";
import config from "../config/config";
import { useSlots } from "vue";
/* eslint-disable */

function isDef(v) {
  return v !== undefined && v !== null;
}

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}

function getFirstComponentChild(children) {
  console.log(children, "this is children");
  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      const c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}

const stack = [];

function getIndexByKey(key) {
  for (let index = 0; index < stack.length; index++) {
    if (stack[index].key === key) {
      return index;
    }
  }
  return -1;
}

let VuePageStack = keyName => {
  return {
    name: config.componentName,
    abstract: true,
    data() {
      return {};
    },
    props: {
      max: {
        type: [String, Number],
        default() {
          return "";
        },
      },
    },
    render(props) {
      console.log(props);
      const slots = useSlots();
      console.log(234234234);
      let r = this.$route.query["r"] == undefined ? "" : this.$route.query["r"];
      r = "";
      let key = this.$route.query[keyName] + r;
      const slot = this.$slots.default();
      console.log(slots.default());
      // const vnode = getFirstComponentChild(slot);
      const vnode = slot && slot[0];
      // const vnode = getCurrentInstance().vnode;
      // const vnodeC = getCurrentInstance(vnode);
      console.log(vnode, "this is vnode");
      // console.log(vnodeC, "this is current instance");
      // getCurrentInstance().vnode.type.data().type = 1234;
      // vnodeTest.props = mergeProps(vnodeTest.props, {
      //   title: "test",
      //   onClick() {
      //     console.log(234);
      //   },
      //   onChange() {},
      //   "onUpdate:modelValue"() {},
      // });

      console.log(vnode, "this is vnode component");
      console.log(vnode, "this is component options");
      if (!vnode) {
        return vnode;
      }
      console.log(vnode.type);
      let index = getIndexByKey(key);
      console.log(index);
      if (index !== -1) {
        vnode.componentInstance = stack[index].vnode.componentInstance;
        // destroy the instances that will be spliced
        // for (let i = index + 1; i < stack.length; i++) {
        //   stack[i].vnode.componentInstance.$destroy();
        //   stack[i] = null;
        // }
        // stack.splice(index + 1);
      } else {
        if (history.action === config.replaceName) {
          // destroy the instance
          stack[stack.length - 1].vnode.componentInstance.$destroy();
          stack[stack.length - 1] = null;
          stack.splice(stack.length - 1);
        }
        stack.push({ key, vnode });
      }

      // vnode.type = mergeProps(vnode.type, {
      //   // keepAlive: true,
      //   __isKeepAlive: true,
      // });
      vnode.type.__isKeepAlive = true;

      // vnode.type.keepAlive = true;
      console.log(vnode);
      return vnode;
      // return vnodeC.vnode;
    },
  };
};

function getStack() {
  return stack;
}

export { VuePageStack, getIndexByKey, getStack };
