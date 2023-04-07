import {
  VuePageStack,
  getIndexByKey,
  getStack,
} from "./components/VuePageStack";
import mixin from "./mixin";
import history from "./history";
import config from "./config/config";
/* eslint-disable */

function hasKey(query, keyName) {
  console.log(query[keyName]);
  return !!query[keyName];
}

function getKey(src) {
  return src.replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const VuePageStackPlugin = {};

VuePageStackPlugin.install = function (
  app,
  { router, name = config.componentName, keyName = config.keyName },
) {
  console.log(app);
  if (!router) {
    throw Error("\n vue-router is necessary. \n\n");
  }
  app.component(name, VuePageStack(keyName));

  app.config.globalProperties.$pageStack = {
    getStack,
  };

  mixin(router);

  function beforeEach(to, from) {
    // console.log(hasKey(to.query, keyName));
    if (!hasKey(to.query, keyName)) {
      to.query[keyName] = getKey("xxxxxxxx");
      let replace =
        history.action === config.replaceName || !hasKey(from.query, keyName);
      // next({
      //   hash: to.hash,
      //   path: to.path,
      //   name: to.name,
      //   params: to.params,
      //   query: to.query,
      //   meta: to.meta,
      //   replace: replace,
      // });
      console.log(to);
      console.log(111);
      // next({ ...to, replace });
      // return { ...to };
      return { ...to, replace };
    } else {
      let r = to.query["r"] == undefined ? "" : to.query["r"];
      r = "";
      let key = to.query[keyName] + r;
      let index = getIndexByKey(key);
      if (index === -1) {
        to.params[keyName + "-dir"] = config.forwardName;
      } else {
        to.params[keyName + "-dir"] = config.backName;
      }
      console.log(222);
      console.log(to);
      console.log(from);
      // next({ params: to.params });
      // next({ path: to.path, name: to.name, params: to.params });
      // next({ name: to.name, params: to.params });
      // next();
      // next({ name: "index" });
      // return { ...to };
      // return { name: "index" };
      return true;
    }
  }

  // ensure it's the first beforeEach hook
  // router.beforeHooks.unshift(beforeEach);
  router.beforeEach(beforeEach);
};

export default VuePageStackPlugin;
