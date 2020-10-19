room6.prototype = Object.create(THREE.Object3D.prototype);
room6.prototype.constructor = room6;
 
function room6(scene) {
    THREE.Object3D.call(this);
    var room6 = this;
    scene.room = this;
    this.photoSphere = new PhotoSphere(scene, 'images/Mosquée Rsif/6.jpg');

    this.textLights = new TextLights(scene, {});

    this.navigationArrowToroom5 = new NavigationArrow(scene, {
        degree: 30,
        verticalOffset: 15,
        onFocus: function () {
            // remove the room
            room6.remove();
            // Start a new room
            new room5(scene);
            scene.rotation.y -= 300 ;
        },
    });

    this.navigationArrowToroom7 = new NavigationArrow(scene, {
        degree: 270,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room6.remove();
            // Start a new room
            new room7(scene);
        },
    });

    this.navigationArrowToroom9 = new NavigationArrow(scene, {
        degree: 190,
        verticalOffset: 15,
        onFocus: function () {

            // remove the room
            room6.remove();
            // Start a new room
            new room9(scene);
            //scene.rotation.y += 600 ;
        },
    });
   
    this.remove = function () {
        this.photoSphere.remove();

        this.navigationArrowToroom5.remove();
        this.navigationArrowToroom7.remove();
        this.navigationArrowToroom9.remove();

        this.textLights.remove();

        // remove self
        scene.removeRoom(this);
    }
}