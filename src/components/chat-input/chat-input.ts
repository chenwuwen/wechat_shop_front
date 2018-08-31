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

  get value(): any {
    console.log("get value() 执行........")
    return this.product_url;
  };

  set value(v: any) {
    console.log("set value() 执行........")
    if (v !== this.product_url) {
      this.product_url = v;
      this.propagateChange(v);
    }
  }


  /**
   * 自定义一个方法来处理自定义表单控件中的变化数据
   * @param text
   */
  propagateChange = (_: any) => {
    console.log("自定义表单控件,输入的商品链接是：", _)
    this.product_url = _
  };

  propagateTouch = () => {
    console.log("自定义表单控件,输入的商品链接是：")
    // this.product_url = _
  };


  /**
   * model->view
   * 将数据从模型传输到视图
   * 将模型中的新值写入视图或DOM元素属性中
   */
  writeValue(obj: any): void {
    console.log("writeValue方法: ", obj)
    if (obj) {
      this.product_url = obj;
    }
  }

  /**
   *
   * view->model
   * 重构自定义表单控件类中的 registerOnChange 方法
   * 将数据从视图传播到模型
   * 设置当控件接收到change事件后，调用的函数
   * 设置一个当控件接受到改变的事件时所要调用的函数
   */
  registerOnChange(fn: (_: any) => void): void {
    /**fn其实是一个函数，当视图中的数据改变时就会调用fn指向的这个函数，从而达到将数据传播到模型的目的 */
    this.propagateChange = fn;  // 将fn的指向赋值给this.propagateChange，在需要将改变的数据传到模型时只需要调用this.propagateChange方法即可
  }

  /**
   * 设置当控件接收到touched事件后，调用的函数
   * @param fn
   */
  registerOnTouched(fn: () => void): void {
    this.propagateTouch = fn;
  }

  /**
   * 设置控件的Disabled状态
   * 当控件状态变成 DISABLED 或从 DISABLED 状态变化成 ENABLE 状态时，会调用该函数。该函数会根据参数值，启用或禁用指定的 DOM 元素
   * @param isDisabled
   */
  setDisabledState(isDisabled: boolean): void {
  }

  /**
   * 输入框失去焦点,这里是p标签
   * @param event
   */
  inputText(event: any) {
    let text = event.target.childNodes[0].nodeValue.trim()
    console.log("自定义组件,输入链接的内容：", text)
    if (text != this.product_url && text != 'undifiend' && text != '') {
      this.product_url = text
      this.propagateChange(this.product_url)
    }
  }
}
