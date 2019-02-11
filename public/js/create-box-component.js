AFRAME.registerComponent('create-box-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
        //free use audio library and free use world wide beats //free drum traack beats
       

        Context_AF.el.addEventListener('click', function(event) {
            
            console.log("click");
            Context_AF.createBox();
            
            

        });
    },
    createBox : function() {

        const Context_AF = this;
        //random placement of cubes 
        var min=-20;
        var max=20; 
        var miny=3;
        var maxy=10;
        var minz=-20;
        var maxz=6; 
        var minc=0;
        var maxc=6; 
        //random variable to determine color and sound of each cube 
        var colSquare =Math.floor(Math.random() * (+maxc - +minc))+ +minc;
        var randomx =Math.floor(Math.random() * (+max - +min))+ +min;
        var randomy =Math.floor(Math.random() * (+maxy - +miny)) + +miny;
        var randomz =Math.floor(Math.random() * (+maxz - +minz)) + +minz;
        
        let BoxElem = document.createElement('a-box');
        
        
      
        switch (colSquare) {
            case 0:
                BoxElem.setAttribute('material', {src:'/assets/textures/red.jpg'});
                BoxElem.addEventListener('click', function(event) {
                  Context_AF.soundElem = document.querySelector('#gSound');
                  Context_AF.soundElem.components['sound'].stopSound(); 
                  Context_AF.soundElem.components['sound'].playSound();
                });
              
              break;
            case 1:
                BoxElem.setAttribute('material', {src:'/assets/textures/yellow.jpg'});
                BoxElem.addEventListener('click', function(event) {
                  Context_AF.soundElem = document.querySelector('#dSound');
                  Context_AF.soundElem.components['sound'].stopSound(); 
                  Context_AF.soundElem.components['sound'].playSound();
                });
              break;
            case 2:
                BoxElem.setAttribute('material', {src:'/assets/textures/aqua.jpg'});
                BoxElem.addEventListener('click', function(event) {
                  Context_AF.soundElem = document.querySelector('#pSound');
                  Context_AF.soundElem.components['sound'].stopSound(); 
                  Context_AF.soundElem.components['sound'].playSound();
                });
              break;
            case 3:
                BoxElem.setAttribute('material', {src:'/assets/textures/blue.png'});
                BoxElem.addEventListener('click', function(event) {
                  Context_AF.soundElem = document.querySelector('#tSound');
                  Context_AF.soundElem.components['sound'].stopSound(); 
                  Context_AF.soundElem.components['sound'].playSound();
                });
              break;
            case 4:
                BoxElem.setAttribute('material', {src:'/assets/textures/green.png'});
                BoxElem.addEventListener('click', function(event) {
                  Context_AF.soundElem = document.querySelector('#fSound');
                  Context_AF.soundElem.components['sound'].stopSound(); 
                  Context_AF.soundElem.components['sound'].playSound();
                });
              break;
            case 5:
                BoxElem.setAttribute('material', {src:'/assets/textures/purple.jpg'});
                BoxElem.addEventListener('click', function(event) {
                  Context_AF.soundElem = document.querySelector('#eSound');
                  Context_AF.soundElem.components['sound'].stopSound(); 
                  Context_AF.soundElem.components['sound'].playSound();
                });
              break;
          }
        //set attributes and animation
       

        BoxElem.setAttribute('width', '4');
        BoxElem.setAttribute('height', '4');
        BoxElem.setAttribute('depth', '4');
   
        BoxElem.setAttribute('position', {x:randomx, y:randomy, z:randomz});
        BoxElem.setAttribute('rotation', {x:0, y:0, z:45});

        let aniElem = document.createElement('a-animation');
        // BoxElem.setAttribute('obj-model', {obj:'/assets/models/Cow.obj'});
        aniElem.setAttribute('begin', 'mouseenter');
        aniElem.setAttribute('attribute', 'scale');
        aniElem.setAttribute('dur', '300');
        aniElem.setAttribute('to', '1.5 1.5 1.5');

        let endElem = document.createElement('a-animation');
        // BoxElem.setAttribute('obj-model', {obj:'/assets/models/Cow.obj'});
        endElem.setAttribute('begin', 'mouseleave');
        endElem.setAttribute('attribute', 'scale');
        endElem.setAttribute('dur', '300');
        endElem.setAttribute('to', '1 1 1');
        
        let rotElem = document.createElement('a-animation');
        // BoxElem.setAttribute('obj-model', {obj:'/assets/models/Cow.obj'});
        rotElem.setAttribute('begin', 'click');
        rotElem.setAttribute('attribute', 'rotation');
        rotElem.setAttribute('dur', '300');
        rotElem.setAttribute('to', '360 405 45');
        
        BoxElem.appendChild(aniElem);
        BoxElem.appendChild(endElem);
        BoxElem.appendChild(rotElem);
        
       

        let scene = document.querySelector('a-scene');
        scene.appendChild(BoxElem);

        

        
    }
});