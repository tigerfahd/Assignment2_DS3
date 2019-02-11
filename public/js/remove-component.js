AFRAME.registerComponent('remove-component', {
    schema: {},
    init : function() {
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            Context_AF.deleteAll();
        });
    },
    deleteAll : function() {

        //select all boxes and delete them 
        var boxes = document.getElementsByTagName('a-box');
        var l = boxes.length;
        for (var i = 0; i < l; i++) 
        {
            boxes[0].parentNode.removeChild(boxes[0]);
        }
        //stop all sounds 
        soundElem = document.querySelector('#eSound');
        soundElem.components['sound'].stopSound();
        soundElem1 = document.querySelector('#gSound');
        soundElem1.components['sound'].stopSound();
        soundElem2 = document.querySelector('#dSound');
        soundElem2.components['sound'].stopSound();
        soundElem3 = document.querySelector('#tSound');
        soundElem3.components['sound'].stopSound();
        soundElem4 = document.querySelector('#fSound');
        soundElem4.components['sound'].stopSound();
        soundElem5 = document.querySelector('#pSound');
        soundElem5.components['sound'].stopSound();
    }
});