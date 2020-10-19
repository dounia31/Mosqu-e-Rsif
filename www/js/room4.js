room4.prototype = Object.create(THREE.Object3D.prototype);
room4.prototype.constructor = room4;

function room4(scene) {
    THREE.Object3D.call(this);
    var room4 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/4.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom3 = new NavigationArrow(scene, {
        degree: 0,
        verticalOffset: 15,
        onFocus: function () { 

            // remove the room
            room4.remove();
            // Start a new room
            new room3(scene);
        },
    });

    this.navigationArrowToroom5 = new NavigationArrow(scene, {
        degree: 180,
        verticalOffset: 15,
        onFocus: function () { 

            // remove the room
            room4.remove();
            // Start a new room
            new room5(scene);
        },
    });

    /*this.navigationArrowToroom14 = new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () { 

            // remove the room
            room4.remove();
            // Start a new room
            new room14(scene);
            scene.rotation.y += 600 ;
        },
    });*/
   
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom3.remove();
        this.navigationArrowToroom5.remove();
        //this.navigationArrowToroom14.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}