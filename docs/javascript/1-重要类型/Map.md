

## Map

> 它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键

```javascript
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

//使用 Map 结构的set方法，将对象o当作m的一个键，然后又使用get方法读取这个键，接着使用delete方法删除了这个键。
```

### 

### Map实例

+ `Map`构造函数接受数组作为参数，实际上执行的是下面的算法

  ```javascript
  const items = [
    ['name', '张三'],
    ['title', 'Author']
  ];
  
  const map = new Map();
  
  items.forEach(
    ([key, value]) => map.set(key, value)
  );
  ```

+ Map的键对类型的识别

  ```javascript
  //如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。另外，undefined和null也是两个不同的键。虽然NaN不严格相等于自身，但 Map 将其视为同一个键。
  
  let map = new Map();
  
  map.set(-0, 123);
  map.get(+0) // 123
  
  map.set(true, 1);
  map.set('true', 2);
  map.get(true) // 1
  
  map.set(undefined, 3);
  map.set(null, 4);
  map.get(undefined) // 3
  
  map.set(NaN, 123);
  map.get(NaN) // 123
  ```



------

### 实例的属性和方法

+ 属性

  + **size**
  + **Map.prototype.set(key, value)**
    + `set`方法返回的是当前的`Map`对象，因此可以采用链式写法。
  + **Map.prototype.get(key)**
    + `get`方法读取`key`对应的键值，如果找不到`key`，返回`undefin`
  + **Map.prototype.has(key)**
    + `has`方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
  + **Map.prototype.delete(key)**
    + `delete`方法删除某个键，返回`true`。如果删除失败，返回`false`。
  + **Map.prototype.clear()**
    + `clear`方法清除所有成员，没有返回值。

+ 遍历

  + Map 结构原生提供三个遍历器生成函数和一个遍历方法。

    - `Map.prototype.keys()`：返回键名的遍历器。

    - `Map.prototype.values()`：返回键值的遍历器。

    - `Map.prototype.entries()`：返回所有成员的遍历器。

    - `Map.prototype.forEach()`：遍历 Map 的所有成员。

      ```javascript
      const map = new Map([
        ['F', 'no'],
        ['T',  'yes'],
      ]);
      
      for (let key of map.keys()) {
        console.log(key);
      }
      // "F"
      // "T"
      
      for (let value of map.values()) {
        console.log(value);
      }
      // "no"
      // "yes"
      
      for (let item of map.entries()) {
        console.log(item[0], item[1]);
      }
      // "F" "no"
      // "T" "yes"
      
      // 或者
      for (let [key, value] of map.entries()) {
        console.log(key, value);
      }
      // "F" "no"
      // "T" "yes"
      
      // 等同于使用map.entries()
      for (let [key, value] of map) {
        console.log(key, value);
      }
      // "F" "no"
      // "T" "yes"
      ```



------

### Map与其他数据结构的转换

+ Map 结构转为数组结构，比较快速的方法是使用扩展运算符（`...`）

  ```javascript
  const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
  ]);
  
  [...map.keys()]
  // [1, 2, 3]
  
  [...map.values()]
  // ['one', 'two', 'three']
  
  [...map.entries()]
  // [[1,'one'], [2, 'two'], [3, 'three']]
  
  [...map]
  // [[1,'one'], [2, 'two'], [3, 'three']]
  ```
  
+ 数组转Map

  ```javascript
  //将数组传入 Map 构造函数，就可以转为 Map。
  new Map([
    [true, 7],
    [{foo: 3}, ['abc']]
  ])
  ```

+ 

  