import { AttributifyAttributes } from "windicss/types/jsx";

// declare module "react" {
//   type HTMLAttributes<T> = AttributifyAttributes;
// }

// 看评论区说上面的无效了，要用这种，等出问题了再看看吧
import { AttributifyAttributes } from "windicss/types/jsx";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
