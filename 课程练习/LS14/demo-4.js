//通过Object.defineProperty来添加和改变的get /set的属性特性
//添加访问器
var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){//只定义了get 特性，因此只能读不能写
        return this._name;
    }
});
console.log(obj1.name);//"Lucy"
obj1.name="jack";//只定义了getter访问器，因此写入失效
console.log(obj1.name);//"Lucy"

//改变访问器属性特性 注意添加访问器和修改访问器特性的写法的区别
var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);
//Lucy_hihi
obj2.name="jack";
console.log(obj2.name);
//Jack_haha_hihi

var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,//若为true会如何
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);
//Jack
person.name = "Lucy";
console.log(person.name);
//Lucy
delete person.name;
console.log(person.name);
//Lucy

var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:true,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name);
//Jack
person.name = "Lucy";
console.log(person.name);
//Lucy
delete person.name;//delete person.name;
console.log(person.name);

