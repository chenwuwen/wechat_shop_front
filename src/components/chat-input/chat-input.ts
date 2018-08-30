import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

// https://segmentfault.com/a/1190000009070500
// https://blog.csdn.net/wangdan_2013/article/details/81314959
// https://blog.thoughtram.io/angular/2016/07/27/custom-form-controls-in-angular-2.html

/**
 * 必须注册成为表单组件（使用providers属性）
 * 注释：
 * 1.provide：将组件注册到DI框架，让其成为一个可被表单访问的组件
 * 2.useExisting：让组件暴露对应的validatate方法实现表单验证
 * 3.multi：为true时表示这个token对应多个依赖项，可在多个表单里使用，互不影响
 */
export const EXE_COUNTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChatInputComponent),
  multi: true
};


@Component({
  selector: 'chat-input',
  templateUrl: 'chat-input.html',
  /*利用这一 Token 可将控件注册成为可让表单访问到其值的控件*/
  providers: [EXE_COUNTER_VALUE_ACCESSOR]
})
export class ChatInputComponent implements ControlValueAccessor {

  @Input()
  product_url: string = "";

  constructor() {
    console.log('=======自定义表单控件初始化========');
  }


  /**
   * 自定义一个方法来处理自定义表单控件中的变化数据
   * @param text
   */
  propagateChange = (text: any) => {
    console.log("自定义表单控件,输入的商品链接是：", text)
  };

  /**
   * view->model
   * 将数据从模型传输到视图
   */
  writeValue(obj: any): void {
    console.log("writeValue方法: ", obj)
    if (obj) {
      this.product_url = obj;
    }
  }

  /**
   * model->view
   * 重构自定义表单控件类中的 registerOnChange 方法
   * 将数据从视图传播到模型
   *
   */
  registerOnChange(fn: any): void {
    /**fn其实是一个函数，当视图中的数据改变时就会调用fn指向的这个函数，从而达到将数据传播到模型的目的 */
    this.propagateChange = fn;  // 将fn的指向赋值给this.propagateChange，在需要将改变的数据传到模型时只需要调用this.propagateChange方法即可
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  inputText(event: any) {
    let text = event.target.childNodes[0].nodeValue
    console.log("自定义组件,输入链接的内容：", text)
    if (text != this.product_url) {
      this.product_url = text
      this.propagateChange(this.product_url)
    }
  }
}
