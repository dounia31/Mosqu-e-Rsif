room5.prototype = Object.create(THREE.Object3D.prototype);
room5.prototype.constructor = room5;

function room5(scene) {
    THREE.Object3D.call(this);
    var room5 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/5.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom4 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room5.remove();
            // Start a new room
            new room4(scene);
        },
    });

    this.navigationArrowToroom6 = new NavigationArrow(scene, {
        degree: 95,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room5.remove();
            // Start a new room
            new room6(scene);
            scene.rotation.y += 300 ;
        },
    });

    /*this.navigationArrowToroom13 = new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room5.remove();
            // Start a new room
            new room13(scene);
            scene.rotation.y += 600 ;
        },
    });*/
    
   
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom4.remove();
        this.navigationArrowToroom6.remove();
        //this.navigationArrowToroom13.remove();
        
        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}