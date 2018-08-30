import {Injectable} from '@angular/core';

/**
 * 定义常量
 * provider，也叫service。前者是ionic的叫法，后者是ng的叫法。
 * https://www.jianshu.com/p/4fd02f51a667
 */
@Injectable()
export class ConstantProvider {

  public CHAT_TYPE_GUEST: string = "GUEST";
  public CHAT_TYPE_MASTER: string = "MASTER"

  constructor() {
    console.log('Hello ConstantProvider Provider');
  }

}
