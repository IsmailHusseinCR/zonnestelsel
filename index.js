
// const $ = (query) => document.querySelector(query);
// // dit documentqueryselector pakt een html element en die stop ik in een $ var
// // en kan ik $('p') een p element selecteren.


// let sheres = []
// const scene = $('a-scene');

// for(let i = 0; i < 5; i ++){
//   const element = document.createElement('a-sphere');
//   scene.appendChild(element);
//   sheres.push(element)
// }



// const sphere = $('a-sphere');
// const plane = $('a-plane');
// const color = `hsl(${degrees}, 100%, 50%)`; 
// const shiftDegrees = (value) => (value + 1) % 360;

// let degrees = 0;

// for (let i = 0; i < sheres.length; i++) {
//   let element = sheres[i];
//   let x = Math.random() * 20 + 1
  
//   let upAndDown = Math.sin(Date.now() / 1000);
//   let position = `${x} ${1.5 + upAndDown} -2`;
//   element.setAttribute('color', color);
//   element.setAttribute('position', position);

  
// }

// const animate = () => {
//   degrees = shiftDegrees(degrees);
 
//   const rotation = `-90 0 ${degrees}`;
//   // const position = `1 ${1.5 + upAndDown} -2`;
 
//   plane.setAttribute('color', color);
//   plane.setAttribute('rotation', rotation);
//   requestAnimationFrame(animate);
// };

// requestAnimationFrame(animate);