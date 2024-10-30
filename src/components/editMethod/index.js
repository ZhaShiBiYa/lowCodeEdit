import { h } from "vue"

export function editMethod(obj) {
  const { type, props, children, id, parentId } = obj;

  function cssToStyle(css) {
    return Object.keys(css).reduce((style, key) => {
      style[key] = css[key];
      return style;
    }, {});
  }
  // 将自定义属性添加到 props 中
  const customProps = {
    ...props,
    style: cssToStyle(props.css),
    'data-id': id, 
    'parentId': parentId
  };
  
  let vnodeChildren = []
  // 处理子节点
  if (Array.isArray(children)) {
    vnodeChildren = children.map(child => editMethod(child));
  } else if (children !== undefined && children !== null) {
    // 如果 children 不是数组但有值，则直接使用
    vnodeChildren = [children];
  }

  if (props && props.text) {
    vnodeChildren.push(props.text);
  }


  return h(type, customProps, vnodeChildren);
}