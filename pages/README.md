# Introduction

## ViewModel

A *ViewModel* is a class that owns business logic in a view-agnostic way.  
That means *ViewModel* is concentrated on application domain rather that 
DOM manipulations. ViewModel describes by a TypeScript class:

```typescript
class ApplicationViewModel {
    /* ViewModel content */
}
```

ViewModel exposes:

* static data to be read by View;
* observable dynamic data to be listened by View;
* methods to be called by View

*Demo:*

<iframe src="snippets/01_view-model/index.html" style="height: 
300px"></iframe>

## View

A **View** is a function that generates HTML Dom elements connected to a 
*ViewModel* instance.

?> JohnSmith uses JSX-like language to define Views. The 
syntax looks like the one used in React but in fact it uses custom rendering 
backend that translates the JSX code to a JavaScript runtime function. This 
mechanism works on TypeScript compilation level and has no connection to 
React libraries or dependencies nighter at Compile- nor at Run-time.

?> A *View* should be declared in a `.tsx` file rather than `.ts`

There are two ways to define a *View*:

* compact way -- declare the *View* as an arrow function;
* advanced way -- declar the *View* as a class.
* declaring a class that extends `View<TViewModel>`;
* declaring an arrow function that accepts a `TViewModel` instance as a 
  parameter.

### View as a function

A *View* can be defined as an arrow function with a single argument which is 
the *ViewModel*. The function should return JSX-based markup expression. 
This option provides concise way of declaring a *View* and should work in 
most cases.

<iframe src="snippets/02_view/01_function/index.html" style="height:
300px"></iframe>

### View as a class

A *View* can be defined as a class that implements `View` interface and has 
constructor with a single argument which is the `ViewModel`:

<iframe src="snippets/02_view/02_class/index.html" style="height:
300px"></iframe>

## Bindings

*View* can connect values from *ViewModel* to DOM Elements or Attributes, 
these connections are called **bindings**. *Bindings* work for both static 
and dynamic values. If the value is dynamic (observable) the *View* will add 
a **listener** to the corresponding value.

### Text Binding

Text binding enables you to display dynamic content in your application. To 
define it, you simply include an expression within curly braces. This 
follows the standard JSX syntax

```tsx
const ApplicationView = (viewModel: ViewModel) =>
    <section>{viewModel.message}</section>
```

In this code snippet, `viewModel.message` is the expression being bound to 
the text content of the `<section>` element. This means that the content of 
the `<section>` will be dynamically generated based on the value of 
`viewModel.message`.

Text bindings demo:

<iframe src="snippets/03_binding/01_text/index.html" style="height:
300px"></iframe>

### Attributes Binding

Similar to text binding, you can also connect ViewModel values to be 
rendered as DOM element attributes.

```tsx
const ApplicationView = (viewModel: ViewModel) =>
    <section id={viewModel.identifier}></section>
```

In this code, `viewModel.identifier` is bound to the `id` attribute of the 
`<section>` element. So, the `id` attribute of the `<section>` will be 
dynamically set based on the value of `viewModel.identifier`.

Attribute bindings demo:

<iframe src="snippets/03_binding/02_attribute/index.html" style="height:
300px"></iframe>