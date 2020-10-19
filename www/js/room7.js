room7.prototype = Object.create(THREE.Object3D.prototype);
room7.prototype.constructor = room7;

function room7(scene) {
    THREE.Object3D.call(this);
    var room7 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/7.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom6 = new NavigationArrow(scene, {
        degree: 80,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room7.remove();
            // Start a new room
            new room6(scene);
        },
    });

    this.navigationArrowToroom8 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room7.remove();
            // Start a new room
            new room8(scene);
            //scene.rotation.y += 300 ;
        },
    });

    
   
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom6.remove();
        this.navigationArrowToroom8.remove();
        //this.navigationArrowToroom11.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}