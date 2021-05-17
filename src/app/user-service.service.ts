import { Injectable } from '@angular/core';

export interface User  {
  imageUrl: any,
  name:string,
  email:string,
  info:string,
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  users: User[] = [
    {imageUrl:'https://steamuserimages-a.akamaihd.net/ugc/1770456332614326759/A948567681FFDC6CF0CCDB6DCBA4E22F411BE5DD/',
    name:"Leanne Graham",email:"Sincere@april.biz",info:
     'lorem ipsum dolor sit amet consectetur adipiscing elit ad maecenas ornare nam facilisi efficitur felis condimentum fames eu eros consequat litora sociosqu proin arcu purus nunc mollis molestie class iaculis himenaeos nibh in commodo sollicitudin congue penatibus tortor lobortis vitae montes mauris justo vehicula parturient dui tellus laoreet nisl blandit urna nisi scelerisque ultricies et posuere sodales interdum fusce at vivamus curabitur suscipit mus lacinia augue cubilia libero platea phasellus'},
    {imageUrl:'https://steamuserimages-a.akamaihd.net/ugc/1770456332614350349/A77E2FB0F098A608B7EC1CF7B8D67AD30FBF8BC3/',
    name:'Ervin Howell',email:'Shanna@melissa.tv',info:'lorem ipsum dolor sit amet consectetur adipiscing elit purus iaculis ut malesuada massa eu nisl parturient sem natoque fermentum nisi et penatibus eros dui metus at augue sociosqu congue viverra maecenas ante velit conubia taciti eleifend neque magna placerat nunc id molestie vitae tempus vel libero faucibus eget fusce a montes vehicula euismod vivamus himenaeos nullam pharetra justo blandit sagittis curabitur pellentesque in litora varius gravida aliquam urna finibus dignissim'},
    {imageUrl:'https://steamuserimages-a.akamaihd.net/ugc/270589157931336662/9D65C622C5A948B19B00F2E1CC19D9DC8685BEF0/',
    name:'Clementine Bauch',email:'Nathan@yesenia.net',info:'lorem ipsum dolor sit amet consectetur adipiscing elit mauris ridiculus maximus maecenas tellus nisi curae lobortis porta facilisi bibendum nam dis aptent id senectus dictumst viverra imperdiet mus class netus dui egestas nunc vehicula orci fusce faucibus himenaeos luctus lacinia euismod ligula inceptos hendrerit donec condimentum praesent lacus taciti cursus placerat augue feugiat nec ex pellentesque quam dapibus neque arcu dictum eros proin aliquam sem blandit sollicitudin ac est sed'},
    {imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg',
    name:'Patricia Lebsack',email:'Julianne.OConner@kory.org',info:'lorem ipsum dolor sit amet consectetur adipiscing elit cras vitae vestibulum ullamcorper dictum fermentum non dui volutpat nulla eu fames vivamus lectus tempus sagittis fringilla mi mauris duis id facilisi varius suscipit felis rhoncus vulputate netus sed condimentum facilisis malesuada arcu dapibus et urna eros senectus ultricies congue risus odio sollicitudin tellus fusce sodales mollis ex justo eget purus proin ac viverra quisque potenti ridiculus cubilia orci ante class gravida'},

  ];
}
